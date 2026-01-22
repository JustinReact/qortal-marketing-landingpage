"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Sandpack,
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  useSandpack
} from "@codesandbox/sandpack-react";
import {
  EditorContainer,
  EditorContent,
  SandpackWrapper,
  PublishSection,
  PublishDescription,
  PublishButton,
  CloseIcon
} from "./EditorDemo-styles";
import { useTheme } from "@mui/material";

const API_BASE_URL: string =
  process.env.NEXT_PUBLIC_EBOOK_API_HOST || "http://localhost:3010";

// LocalStorage keys
const STORAGE_KEYS = {
  APP_CODE: "qortal_editor_app_code",
  INDEX_CODE: "qortal_editor_index_code",
  PUBLISH_RESULT: "qortal_editor_publish_result",
  IDENTIFIER: "qortal_editor_identifier",
  OVERLAY_DISMISSED: "qortal_editor_overlay_dismissed"
};

const defaultAppCode = `export default function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#667eea',
      color: 'white',
      textAlign: 'center'
    }}>
      <div>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Welcome to the demo editor.
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Change the background color and then publish the app.
        </p>
      </div>
    </div>
  );
}`;

const defaultIndexCode = `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`;

// Inner component that has access to Sandpack context
function EditorWithPublish() {
  const theme = useTheme();
  const { sandpack } = useSandpack();
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishResult, setPublishResult] = useState<{
    qortalUrl?: string;
    signature?: string;
    error?: string;
  } | null>(null);
  const [savedIdentifier, setSavedIdentifier] = useState<string | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);
  const [hasClickedDownload, setHasClickedDownload] = useState(false);
  const [showCopiedNotification, setShowCopiedNotification] = useState(false);

  // Load saved publish result and identifier from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedResult = localStorage.getItem(STORAGE_KEYS.PUBLISH_RESULT);
      const identifier = localStorage.getItem(STORAGE_KEYS.IDENTIFIER);
      const overlayDismissed = localStorage.getItem(
        STORAGE_KEYS.OVERLAY_DISMISSED
      );

      if (savedResult) {
        try {
          setPublishResult(JSON.parse(savedResult));
        } catch (error) {
          console.error("Failed to parse saved publish result:", error);
        }
      }

      if (identifier) {
        setSavedIdentifier(identifier);
      }

      // Show overlay if user hasn't published yet and hasn't dismissed it
      if (!identifier && !overlayDismissed) {
        setShowOverlay(true);
      }
    }
  }, []);

  const handleDismissOverlay = () => {
    setShowOverlay(false);
    localStorage.setItem(STORAGE_KEYS.OVERLAY_DISMISSED, "true");
  };

  // Save code changes to localStorage whenever the code changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const appCode = sandpack.files["/App.js"]?.code;
      const indexCode = sandpack.files["/index.js"]?.code;

      if (appCode) {
        localStorage.setItem(STORAGE_KEYS.APP_CODE, appCode);
      }
      if (indexCode) {
        localStorage.setItem(STORAGE_KEYS.INDEX_CODE, indexCode);
      }
    }
  }, [sandpack.files]);

  // Save publish result to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined" && publishResult) {
      localStorage.setItem(
        STORAGE_KEYS.PUBLISH_RESULT,
        JSON.stringify(publishResult)
      );
    }
  }, [publishResult]);

  const handlePublish = async () => {
    setIsPublishing(true);
    setPublishResult(null);

    try {
      // Get the current App.js code from Sandpack
      const appCode = sandpack.files["/App.js"]?.code || defaultAppCode;

      // Convert App.js to App.tsx format (just change the extension reference)
      const appTsxCode = appCode;

      // Prepare request body - use saved identifier if it exists (for updates)
      const requestBody: any = { appCode: appTsxCode };
      if (savedIdentifier) {
        requestBody.identifier = savedIdentifier;
      }

      // Send to backend
      const response = await fetch(`${API_BASE_URL}/publish`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();

      if (data.success) {
        const identifier = data.qortal?.identifier;
        const qortalUrl = data.qortal?.appUrl;
        const signature = data.qortal?.signature;

        if (!identifier) {
          throw new Error("No identifier returned from server");
        }

        // Save identifier to localStorage and state
        localStorage.setItem(STORAGE_KEYS.IDENTIFIER, identifier);
        setSavedIdentifier(identifier);

        const localAppUrl = `${window.location.origin}/editor/view/${identifier}`;

        setPublishResult({
          qortalUrl: localAppUrl,
          signature: signature
        });

        // Show success overlay for both first-time publish and updates
        setShowSuccessOverlay(true);
      } else {
        throw new Error(data.error || "Failed to publish");
      }
    } catch (error: any) {
      console.error("Publish error:", error);
      setPublishResult({ error: error.message });
      alert(`Failed to publish app:\n${error.message}`);
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <>
      <SandpackLayout>
        <SandpackCodeEditor
          showTabs={false}
          showLineNumbers={true}
          showInlineErrors={true}
          wrapContent={true}
          style={{ height: "100vh", flex: 1 }}
        />
        <SandpackPreview
          showNavigator={false}
          showRefreshButton={false}
          showOpenInCodeSandbox={false}
          style={{ height: "100vh", flex: 1 }}
        />
      </SandpackLayout>

      <PublishSection>
        {!publishResult?.qortalUrl && (
          <>
            <PublishDescription>
              Ready to share your creation? Click publish to deploy your app to
              Qortal.
            </PublishDescription>
            <PublishButton onClick={handlePublish} disabled={isPublishing}>
              {isPublishing ? "Publishing..." : "Publish to Qortal"}
            </PublishButton>
          </>
        )}

        {publishResult?.qortalUrl && (
          <div
            style={{
              marginTop: publishResult?.qortalUrl ? "0" : "20px",
              padding: "20px",
              background: "#0f4ed2",
              borderRadius: "12px",
              border: "2px solid #0f4ed2",
              boxShadow: "0 4px 12px rgba(16, 185, 129, 0.2)"
            }}
          >
            <p
              style={{
                color: "#ffffff",
                fontWeight: "bold",
                marginBottom: "16px",
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <span style={{ fontSize: "24px" }}>🎉</span>
              App Published Successfully!
            </p>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "14px",
                marginBottom: "12px"
              }}
            >
              Your app is now live on the Qortal network! Click the link below
              to view it:
            </p>
            <a
              href={publishResult.qortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
                wordBreak: "break-all",
                display: "block",
                marginBottom: "12px",
                padding: "12px 16px",
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                borderRadius: "6px",
                transition: "all 0.2s",
                textAlign: "center"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(16, 185, 129, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              🚀 View Your App
            </a>
            <p
              style={{
                fontSize: "12px",
                color: "rgba(255, 255, 255, 0.7)",
                marginTop: "8px",
                padding: "8px",
                background: "rgba(0, 0, 0, 0.2)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px"
              }}
            >
              <span style={{ wordBreak: "break-all" }}>
                <strong>URL:</strong> {publishResult.qortalUrl}
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(publishResult.qortalUrl || "");
                  setShowCopiedNotification(true);
                  setTimeout(() => setShowCopiedNotification(false), 2000);
                }}
                style={{
                  background: "rgba(16, 185, 129, 0.3)",
                  border: "1px solid #10b981",
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "11px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(16, 185, 129, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(16, 185, 129, 0.3)";
                }}
              >
                📋 Copy
              </button>
            </p>
            {publishResult.signature && (
              <p
                style={{
                  fontSize: "11px",
                  color: "rgba(255, 255, 255, 0.6)",
                  marginTop: "8px",
                  fontFamily: "monospace"
                }}
              >
                <strong>Tx Signature:</strong>{" "}
                {publishResult.signature.substring(0, 40)}...
              </p>
            )}

            <PublishButton
              onClick={handlePublish}
              disabled={isPublishing}
              style={{
                marginTop: "16px",
                background: "#667eea",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                width: "100%",
                color: "white"
              }}
            >
              {isPublishing
                ? "Updating..."
                : savedIdentifier
                  ? "🔄 Update App"
                  : "🔄 Re-publish App"}
            </PublishButton>
          </div>
        )}
      </PublishSection>

      {/* Copied Notification - MUI-style Snackbar */}
      {showCopiedNotification && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0, 0, 0, 0.87)",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "14px",
            fontWeight: "500",
            animation: "slideUp 0.3s ease-out"
          }}
        >
          <span style={{ fontSize: "18px" }}>✓</span>
          <span>URL copied to clipboard</span>
          <style jsx>{`
            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateX(-50%) translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
              }
            }
          `}</style>
        </div>
      )}

      {/* Welcome Overlay */}
      {showOverlay && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(8px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "20px"
          }}
          onClick={handleDismissOverlay}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: "20px",
              padding: "40px",
              maxWidth: "500px",
              width: "100%",
              textAlign: "center",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                fontSize: "48px",
                marginBottom: "20px"
              }}
            >
              👋
            </div>
            <h2
              style={{
                color: "white",
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "16px",
                lineHeight: "1.3"
              }}
            >
              Welcome to the Qortal Editor!
            </h2>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.95)",
                fontSize: "18px",
                lineHeight: "1.6",
                marginBottom: "12px"
              }}
            >
              This is a <strong>DEMO editor</strong>
            </p>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "24px",
                textAlign: "left"
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "17px",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <span style={{ fontSize: "20px" }}>1️⃣</span>
                <span>
                  Do one small change to the app. For example, change the
                  background color.
                </span>
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "17px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <span style={{ fontSize: "20px" }}>2️⃣</span>
                <span>
                  Then publish this decentralized app to the Qortal network
                </span>
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "17px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <span style={{ fontSize: "20px" }}>3️⃣</span>
                <span>
                  After this demo, make your own Qortal account with Qortal Hub.
                  Then you can publish your own apps to the Qortal network.
                </span>
              </p>
            </div>
            <button
              onClick={handleDismissOverlay}
              style={{
                background: "white",
                color: "#667eea",
                border: "none",
                borderRadius: "10px",
                padding: "14px 32px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 16px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0, 0, 0, 0.2)";
              }}
            >
              Got it! Let's start 🚀
            </button>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "12px",
                marginTop: "16px",
                fontStyle: "italic"
              }}
            >
              Click anywhere outside to dismiss
            </p>
          </div>
        </div>
      )}

      {/* Success Overlay - shown after first publish */}
      {showSuccessOverlay && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            borderRadius: "20px",
            padding: "40px",
            maxWidth: "550px",
            width: "90%",
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
            zIndex: 9999
          }}
        >
          <CloseIcon
            color={theme.palette.text.primary}
            onClickFunc={() => {
              setShowSuccessOverlay(false);
            }}
            height={"25"}
            width={"25"}
          ></CloseIcon>
          <div
            style={{
              fontSize: "64px",
              marginBottom: "20px"
            }}
          >
            🎉
          </div>
          <h2
            style={{
              color: "white",
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "20px",
              lineHeight: "1.3"
            }}
          >
            Just like that, you've published a decentralized app!
          </h2>
          <div
            style={{
              background: "rgba(0, 0, 0, 0.25)",
              borderRadius: "12px",
              padding: "24px",
              marginBottom: "24px",
              textAlign: "left",
              border: "1px solid rgba(255, 255, 255, 0.2)"
            }}
          >
            <p
              style={{
                color: "white",
                fontSize: "16px",
                marginBottom: "16px",
                lineHeight: "1.5"
              }}
            >
              <strong>This is just a demo.</strong>
            </p>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.95)",
                fontSize: "15px",
                lineHeight: "1.6",
                marginBottom: "12px"
              }}
            >
              Using <strong>Qortal Hub</strong> you can create full-fledged apps
              that can't be taken down.
            </p>
            <div
              style={{
                marginTop: "16px",
                paddingLeft: "12px"
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "14px",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px"
                }}
              >
                <span style={{ marginTop: "2px" }}>✓</span>
                <span>Authentication</span>
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "14px",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px"
                }}
              >
                <span style={{ marginTop: "2px" }}>✓</span>
                <span>Data publishing</span>
              </p>

              <p
                style={{
                  color: "white",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px"
                }}
              >
                <span style={{ marginTop: "2px" }}>✓</span>
                <span>Zero hosting fees!</span>
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px"
                }}
              >
                <span style={{ marginTop: "2px" }}>✓</span>
                <span>
                  And much more - <strong>always free!</strong>
                </span>
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexDirection: "column",
              width: "100%"
            }}
          >
            <button
              onClick={() => {
                if (publishResult?.qortalUrl) {
                  window.open(publishResult.qortalUrl, "_blank");
                }
              }}
              style={{
                background: "white",
                color: "#10b981",
                border: "none",
                borderRadius: "10px",
                padding: "14px 32px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 16px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0, 0, 0, 0.2)";
              }}
            >
              🚀 View Your App
            </button>
            <button
              onClick={() => {
                setHasClickedDownload(true);
                setShowSuccessOverlay(false);
                setHasClickedDownload(false);
                window.open("https://link.qortal.dev/download-hub", "_blank");
              }}
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                color: "white",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "10px",
                padding: "12px 32px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Download Qortal Hub
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Main component
export default function EditorDemo() {
  const [isClient, setIsClient] = useState(false);
  const [initialFiles, setInitialFiles] = useState({
    "/App.js": defaultAppCode,
    "/index.js": defaultIndexCode
  });

  // Load saved code from localStorage after component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);

    const savedAppCode = localStorage.getItem(STORAGE_KEYS.APP_CODE);
    const savedIndexCode = localStorage.getItem(STORAGE_KEYS.INDEX_CODE);

    if (savedAppCode || savedIndexCode) {
      setInitialFiles({
        "/App.js": savedAppCode || defaultAppCode,
        "/index.js": savedIndexCode || defaultIndexCode
      });
    }
  }, []);

  // Don't render Sandpack until client-side to avoid hydration issues
  if (!isClient) {
    return (
      <EditorContainer>
        <EditorContent>
          <SandpackWrapper>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100%",
                background: "linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)",
                color: "white",
                fontSize: "18px",
                fontWeight: "500"
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    marginBottom: "16px",
                    fontSize: "32px",
                    animation: "pulse 1.5s ease-in-out infinite"
                  }}
                >
                  ⚡
                </div>
                <div>Loading editor...</div>
              </div>
              <style jsx>{`
                @keyframes pulse {
                  0%,
                  100% {
                    opacity: 1;
                    transform: scale(1);
                  }
                  50% {
                    opacity: 0.5;
                    transform: scale(1.1);
                  }
                }
              `}</style>
            </div>
          </SandpackWrapper>
        </EditorContent>
      </EditorContainer>
    );
  }

  return (
    <EditorContainer>
      <EditorContent>
        <SandpackWrapper>
          <SandpackProvider
            template="react"
            theme="dark"
            files={initialFiles}
            options={{
              autorun: true,
              autoReload: true,
              recompileMode: "delayed",
              recompileDelay: 500,
              activeFile: "/App.js",
              visibleFiles: ["/App.js"]
            }}
            customSetup={{
              dependencies: {
                react: "^18.2.0",
                "react-dom": "^18.2.0"
              }
            }}
          >
            <EditorWithPublish />
          </SandpackProvider>
        </SandpackWrapper>
      </EditorContent>
    </EditorContainer>
  );
}
