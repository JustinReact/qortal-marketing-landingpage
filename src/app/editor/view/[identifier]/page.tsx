"use client";

import { useParams } from "next/navigation";
import { useRef } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: #000;
  overflow: hidden;
`;

const IframeContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  margin: 0;
  padding: 0;
  display: block;
`;

export default function AppViewPage() {
  const params = useParams();
  const identifier = params?.identifier as string;
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const defaultUrl = `http://localhost:12391/render/FILES/onboarding?identifier=${identifier}`;

  return (
    <Container>
      <IframeContainer>
        <StyledIframe
          ref={iframeRef}
          id="browser-iframe"
          src={defaultUrl}
          sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-modals"
          allow="fullscreen; clipboard-read; clipboard-write"
        />
      </IframeContainer>
    </Container>
  );
}
