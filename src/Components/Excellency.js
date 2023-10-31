import React, { useState } from 'react';


const Excellency = ({document}) => {

  return (
     <div>
      <h2>Document Viewer</h2>
      <div>{document}</div>
      {/* Add an editor component here if needed */}
    </div>
  );
};

export default Excellency