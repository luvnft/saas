//GoogleForm.tsx

import React from 'react';

const GoogleForm: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScSHvUJn07Tka5QsX7sg_VAo4fmUdYlaIqIE23GPa6HecDyqQ/viewform?embedded=true"
        width="100%"
        height="100%"
        
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;
