import React from 'react';
import EditorDemo from '@/components/EditorDemo/EditorDemo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Qortal Editor Demo - Build Your Q-App',
  description: 'Interactive code editor for building decentralized applications on Qortal',
};

export default function EditorDemoPage() {
  return <EditorDemo />;
}

