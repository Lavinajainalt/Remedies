import React, { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    
    document.body.appendChild(script);


    return () => {
      document.body.removeChild(script);
    };
  }, []); 

  return (
    <div>
      <div 
        className="visme_d" 
        data-title="Simple Blank Feedback Form"
        data-url="kk34pq0x-simple-blank-feedback-form"
        data-domain="forms"
        data-full-page="false"
        data-min-height="500px"
        data-form-id="115792"
      />
    </div>
  );
}
