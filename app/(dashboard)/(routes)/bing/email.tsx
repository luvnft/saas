import React, { useState } from 'react';
import { FiCopy } from 'react-icons/fi';
    interface EmailContentProps {
      content: string;
    }
    const EmailContent: React.FC<EmailContentProps> = ({ content }) => {const [copied, setCopied] = useState(false);
        const handleCopy = () => {
          navigator.clipboard.writeText(content)
            .then(() => setCopied(true))
            .catch((err) => console.error('Copy failed', err));
          setTimeout(() => setCopied(false), 2000); // Hide copied notification after 2 seconds
        };
        return (
          <div style={{
            backgroundColor: 'grey',
            color: 'white',
            padding: '10px',
            borderRadius: '8px',
            position: 'relative',
            marginBottom: '10px'
          }}>
            {content}
            <button onClick={handleCopy} style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              cursor: 'pointer',
              backgroundColor: '#444',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              padding: '5px',
            }}>
              <FiCopy color="white" />
            </button>
            {copied && <span style={{ position: 'absolute', right: '10px', bottom: '10px', color: '#0f0' }}>Copied</span>}
          </div>
        );
      };
      export default EmailContent;
      