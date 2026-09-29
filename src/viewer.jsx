import React from 'react';
import { createRoot } from 'react-dom/client';
import { PdfViewer, PresentationViewer } from './resource-viewers.jsx';

const viewer = document.getElementById('resource-viewer');
createRoot(viewer).render(viewer.dataset.type === 'outline'
  ? <PdfViewer src="Lab 1 Outline - Foundation.pdf" />
  : <PresentationViewer />);
