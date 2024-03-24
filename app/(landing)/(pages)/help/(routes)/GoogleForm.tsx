//GoogleForm.tsx

import React from 'react';

const GoogleForm: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe6u82w3Sa9Wm7QjzGiiDbii0WQRP_9iL4BRP4CBFaeEc-fiw/viewform?embedded=true"
        width="100%"
        height="100%"
        
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;
