// src/components/PDFViewer.js
import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import "../components/pad-worker"; // Import the worker configuration

const PDFViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      <div style={{ height: "750px" }}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
          <Viewer
            fileUrl={require("../media/AADTB2697KF20241_signed.pdf")}
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
      <div style={{ height: "750px", marginTop: "20px" }}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
          <Viewer
            fileUrl={require("../media/AADTB2697KE20231_signed.pdf")}
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
    </div>
  );
};

export default PDFViewer;
