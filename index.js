import React from "react";

// added file format at the end
import App from "./client/components/App.jsx"; 
import { createRoot } from 'react-dom/client';
import "./css/styles.css"

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />)