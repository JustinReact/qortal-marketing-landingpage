import { styled } from '@mui/system';
import { Box, Button } from '@mui/material';

export const EditorContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100vw',
  backgroundColor: '#1e1e1e',
  overflow: 'hidden',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}));

export const EditorContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  overflow: 'hidden',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
}));

export const SandpackWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  height: '100%',
  '& .sp-wrapper': {
    height: '100% !important',
  },
  '& .sp-layout': {
    height: '100% !important',
    border: 'none !important',
  },
  '& .sp-stack': {
    height: '100% !important',
  },
  '& .sp-preview-actions': {
    display: 'none !important',
  },
  '& button[title="Open in CodeSandbox"]': {
    display: 'none !important',
  },
  '& button[title="Refresh"]': {
    display: 'none !important',
  },
}));

export const PublishSection = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '24px',
  right: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '8px',
  zIndex: 1000,
  '@media (max-width: 768px)': {
    bottom: '16px',
    right: '16px',
  },
}));

export const PublishDescription = styled(Box)(({ theme }) => ({
  color: '#ffffff',
  fontSize: '14px',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  padding: '8px 12px',
  borderRadius: '8px',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  maxWidth: '300px',
  textAlign: 'right',
}));

export const PublishButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4CAF50',
  color: '#ffffff',
  padding: '12px 32px',
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(76, 175, 80, 0.4)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#45a049',
    boxShadow: '0 6px 16px rgba(76, 175, 80, 0.6)',
    transform: 'translateY(-2px)',
  },
  '&:active': {
    transform: 'translateY(0)',
  },
}));

