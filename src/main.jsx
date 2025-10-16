import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  const name = '홍길동';
  const age = 20;
  root.render(<StrictMode>
      <BrowserRouter basename={'/yum_r/'}>
        <App />
      </BrowserRouter>
    </StrictMode>);
}