// NGODocument.js

import React from "react";
import "../css/document.css";
import PDFViewer from "../components/PDFViewer";
const NGODocument = () => {
  return (
    <div className="ngo-document">
      <h1>NGO Document</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar
        odio in neque dapibus, et egestas dolor pellentesque. Vivamus id ex
        ligula. Integer malesuada leo in velit fermentum, sit amet condimentum
        lorem sagittis. Cras quis pharetra odio. Nullam at hendrerit libero.
        Fusce vitae est eget leo sodales fermentum. Ut ac sem sed dolor
        fermentum egestas. Duis nec pharetra nulla. Cras aliquam quam vitae
        vestibulum blandit. Donec vestibulum felis non nunc efficitur
        pellentesque.
      </p>
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Nam nec metus sed odio tincidunt fermentum sed in urna.
        In hac habitasse platea dictumst. Phasellus vehicula mauris vel nisi
        rhoncus, eu varius elit sollicitudin. Donec sed urna ut odio luctus
        aliquet. Duis quis risus ut magna maximus accumsan. Mauris placerat
        ligula velit, eu convallis lorem elementum ac. In non elit commodo,
        pulvinar purus eu, posuere ipsum. Nam suscipit tincidunt libero, eget
        mattis elit tristique id.
      </p>
      <div className="pdf-viewr">
      
          <h1>PDF Viewer</h1>
          <div className="pdf-container">
            <PDFViewer  />
          </div>
      </div>
    </div>
  );
};

export default NGODocument;
