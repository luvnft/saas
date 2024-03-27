//GoogleForm.tsx

import React from 'react';

const GoogleForm: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf7R7RehtxWnxYzq9yfcejOD2e1x2bqb1euLgOLcN5QspxCfQ/viewform?embedded=true"
        width="100%"
        height="100%"
        
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;
