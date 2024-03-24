//GoogleForm.tsx

import React from 'react';

const GoogleForm: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSet7RyUL_R-WW4pdTiSsAgNj5MJg5WYfle2sjezmAPrJaikUA/viewform?embedded=true"
        width="100%"
        height="100%"
        
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;
