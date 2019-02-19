import React from 'react';

import band from '../media/images/band.png';
import church from '../media/images/church.png';

const WeddingWeekendPage = () => (
  <div>
    <h1>WEDDING WEEKEND</h1>
    <h2>FRIDAY NIGHT (19th)</h2>
    <div id="floatRight">
      <img src={band} alt='a band' />
    </div>
    <p>If all goes to plan, on the Friday night before the wedding we will all meet up at 6pm down in Port Isaac to watch our favourite sea shanty band, the Fisherman’s Friends, perform on the Platt. It’s not yet confirmed that they’ll be playing however they do so on most Friday evenings through summer so fingers crossed. There are plenty of pubs and restaurants nearby where people can grab a pint and some fish & chips.</p>
    <p>If Fisherman’s Friends are not performing then instead we’ll all head to a local pub to have a few drinks together and ready ourselves for the nuptials to come. Whatever happens, we’ll let you know closer to the time.</p>
    <br />

    <h2>WEDDING DAY (20th)</h2>

    <h3>The ceremony</h3>
    <div id="floatRight">
      <img src={church} alt='a church' />
    </div>

    <h3>Getting to the church</h3>
    <p>St. Enodoc Church,
    <br />Trebetherick,
    <br />Cornwall PL27 6SA</p>
    <p>Please arrive at the church by 12.15pm.</p>

    <p>Once you’ve come down Daymer Lane, the church can only be accessed by foot and so guests will need to do the short walk across the fairway. There will be signs and ushers to help you on your way and if you are coming by car there will be space reserved for wedding guests in the car park at the bottom of Daymer Lane.</p>

    <h3>Dress code</h3>
    <p>Formal. We’re hoping for a sunny day but please bear in mind that the weather can be changeable and a small part of the day will be enjoyed on the beach.</p>
    <p>For those who require it there will be coaches put on to take guests to the reception venue though we do encourage guests to drive themselves.</p>

    <h3>The reception</h3>
    <p>Roscarrock Farm,
    <br />Port Isaac,
    <br />Cornwall PL29 3SS</p>
    <p>The farm is a 15 minute journey from the church and there will be free parking available. Guests will also be able to leave their cars at the venue overnight should they need to.</p>
    <p>On arrival, there will be drinks and canapés on the lawn before making our way to the walled garden for dinner, speeches and dancing in the marquee.</p>
    <p>Carriages at 1.30am</p>
    <p>Taxis are few and far between so we’d advise booking your ride home ahead of time.</p>
    <p>Some useful numbers:</p>
    <ul>
      <li>TAXI COMPANY 1 – 01208 XXX XXX</li>
      <li>TAXI COMPANY 2 – 01208 XXX XXX</li>
      <li>TAXI COMPANY 3 – 01208 XXX XXX</li>
    </ul>
    <br />

    <h2>SUNDAY (21st)</h2>
    <p>We know many of you will be departing Cornwall on the morning after the wedding but for those who can stick around a little while longer we’ll be putting on some food back at the reception venue.</p>
    <p>We’d love to see you there to have a bite to eat, reminisce about the night before and see off any remaining liquor.</p>
    <p>1.30pm till whenever really.</p>
  </div>
);

export default WeddingWeekendPage;
