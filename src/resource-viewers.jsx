import React, { useEffect, useRef, useState } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import slides from './presentation.json';

GlobalWorkerOptions.workerSrc = new URL('./pdf.worker.min.mjs', import.meta.url).href;

export function PdfViewer({ src }) {
  const canvas = useRef(null);
  const [pdf, setPdf] = useState(null);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('Loading outline…');
  const [pageText, setPageText] = useState('');

  useEffect(() => {
    const task = getDocument({ url: src });
    let cancelled = false;
    task.promise.then(document => { if (!cancelled) setPdf(document); })
      .catch(error => { if (!cancelled) { console.error('Outline load failed:', error); setStatus('The outline could not load. Please use the Open or Download link above.'); } });
    return () => { cancelled = true; task.destroy(); };
  }, [src]);

  useEffect(() => {
    if (!pdf) return;
    let cancelled = false;
    let render;
    setStatus('Rendering page…');
    setPageText('');
    pdf.getPage(page).then(async documentPage => {
      if (cancelled) return;
      const viewport = documentPage.getViewport({ scale: 1.7 });
      const target = canvas.current;
      target.width = viewport.width;
      target.height = viewport.height;
      render = documentPage.render({ canvasContext: target.getContext('2d'), viewport });
      await render.promise;
      const text = await documentPage.getTextContent();
      if (!cancelled) {
        setPageText(text.items.map(item => item.str).join(' '));
        setStatus('');
      }
    }).catch(error => {
      if (!cancelled && error.name !== 'RenderingCancelledException') setStatus('This page could not render. Please open the original PDF above.');
    });
    return () => { cancelled = true; render?.cancel(); };
  }, [pdf, page]);

  return <div className="document-viewer">
    <div className="page-controls">
      <button disabled={!pdf || page === 1} onClick={() => setPage(page - 1)}>Previous page</button>
      <span aria-live="polite">Page {page} of {pdf?.numPages || '…'}</span>
      <button disabled={!pdf || page === pdf.numPages} onClick={() => setPage(page + 1)}>Next page</button>
    </div>
    <p role="status">{status}</p>
    <canvas ref={canvas} role="img" aria-label={`Lab 1 outline, page ${page}. Read the page text below for an accessible version.`} hidden={!pdf} />
    {pageText && <details><summary>Read page text</summary><p>{pageText}</p></details>}
  </div>;
}

export function PresentationViewer() {
  const [page, setPage] = useState(0);
  const [textOnly, setTextOnly] = useState(false);
  return <div className="slide-viewer">
    <div className="page-controls"><button aria-pressed={textOnly} onClick={() => setTextOnly(!textOnly)}>{textOnly ? 'Show original slides' : 'Read slide text instead'}</button></div>
    {!textOnly ? <>
      <p>If this browser cannot display Google Slides, use “Read slide text instead” or open the original presentation in your regular browser.</p>
      <iframe className="presentation-embed" title="EduQuest Feasibility Presentation" src="https://docs.google.com/presentation/d/e/2PACX-1vQm5DKoJH_vblQYT1AjOu8_5Nqu8VBlWj9GwnFZgpxsR71kFOLTM8Dh3VjlXVjNHAxSg9hOQqaCi98V/pubembed?start=false&loop=false&delayms=10000" allowFullScreen />
    </> : <>
    <p>This text view contains a saved copy of the published slide content. Choose “Show original slides” for the current presentation with its layout, images, and diagrams.</p>
    <div className="page-controls">
      <button disabled={page === 0} onClick={() => setPage(page - 1)}>Previous slide</button>
      <label>Slide <select aria-label="Choose slide" value={page} onChange={event => setPage(Number(event.target.value))}>{slides.map((slide, index) => <option key={slide.number} value={index}>{slide.number} of {slides.length}</option>)}</select></label>
      <button disabled={page === slides.length - 1} onClick={() => setPage(page + 1)}>Next slide</button>
    </div>
    <article className="slide-content" aria-live="polite" aria-label={`Slide ${page + 1} text`}>
      <h3>Slide {page + 1}</h3>
      {slides[page].content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    </article>
    </>}
  </div>;
}
