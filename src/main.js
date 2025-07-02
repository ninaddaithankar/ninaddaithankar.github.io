import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HashRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(HashRouter, { children: _jsx(App, {}) }));
