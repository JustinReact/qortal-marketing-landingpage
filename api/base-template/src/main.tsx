import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// TypeScript declaration for build-time constant
declare const __BUILD_ID__: string;

interface CustomWindow extends Window {
  _qdnBase: any; // Replace 'any' with the appropriate type if you know it
}
const customWindow = window as unknown as CustomWindow;

// Now you can access the _qdnTheme property without TypeScript errors
const baseUrl = customWindow?._qdnBase || "";

// Unique build ID - generated at build time, same for all users of this version
const buildId = __BUILD_ID__;

// Powered by badge component
function PoweredByBadge() {
  return (
    <div
      id={buildId}
      style={{
        position: "fixed",
        bottom: "16px",
        right: "16px",
        background: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(10px)",
        color: "white",
        padding: "10px 18px",
        borderRadius: "24px",
        fontSize: "12px",
        fontWeight: "600",
        boxShadow:
          "0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        transition: "all 0.2s ease",
        cursor: "default",
        textDecoration: "none",
        border: "1px solid rgba(255, 255, 255, 0.15)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow =
          "0 6px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2)";
        e.currentTarget.style.background = "rgba(0, 0, 0, 0.95)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)";
        e.currentTarget.style.background = "rgba(0, 0, 0, 0.85)";
      }}
    >
      <span style={{ fontSize: "14px" }}>⚡</span>
      <span>Powered by The Qortal Network</span>
    </div>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter basename={baseUrl}>
    <App />
    <PoweredByBadge />
  </BrowserRouter>
);
