import React, { Component } from 'react';

class RSVPPage extends Component {

  render() {
    return (
      <div>
        <h1>RSVP</h1>

        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />

          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>

          <p>Able to attend?</p>
          <div>
            <label>Yes</label>
            <input type="radio" name="rsvp-status" value="Yes" />
          </div>

          <div>
            <label>No</label>
            <input type="radio" name="rsvp-status" value="No" />
          </div>

          <div>
            <label htmlFor="diet">Dietary requirements?</label>
            <textarea name="diet" id="diet" rows="6"></textarea>
          </div>

          <p>Do you need a coach between the ceremony and reception?</p>
          <div>
            <label>Yes please</label>
            <input type="radio" name="coach-status" value="Yes" />
          </div>

          <div>
            <label>No thanks</label>
            <input type="radio" name="coach-status" value="No" />
          </div>
        </form>

        <p>Please respond by 16th March 2019</p>
        <p>
          <a href='mailto:test@example.com?subject=subject&body=message'>
            Send
          </a>
        </p>
      </div>
    );
  }
}

export default RSVPPage;
