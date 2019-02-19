import React from 'react';

import gift from '../media/images/gift.png';

const GiftsPage = () => (
  <div>
    <h1>GIFT REGISTRY</h1>
    <img src={gift} alt='a gift' />
    <p>Of course, it is your presence not your presents that
will make our day so special, however any cash
contributions to our honeymoon in Mexico would be
warmly accepted.</p>
    <p>NB. very expensive gifts are also welcome.</p>
  </div>
);

export default GiftsPage;
