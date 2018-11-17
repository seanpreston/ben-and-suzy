import React from 'react';

const RSVPPage = () => (
  <div>
    <h1>Can you come?</h1>
    <p>
      <a href='mailto:test@example.com?subject=THEWEDDING&body=YESIMCOMING'>
        Yes, I'd love to
      </a>
    </p>
    <p>
      <a href='mailto:test@example.com?subject=THEWEDDING&body=NOIMNOTCOMING'>
        No, this sounds shit
      </a>
    </p>
  </div>
);

export default RSVPPage;
