import React, { Component } from 'react';

class RSVPPage extends Component {

  render() {
    return (
      <div>
        <h1>Can you come?</h1>

        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />

          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>

          <div>
            <label>Yes, I'd love to</label>
            <input type="radio" name="rsvp-status" value="Yes, I'd love to" />
          </div>

          <div>
            <label>No, this sounds shit</label>
            <input type="radio" name="rsvp-status" value="No, this sounds shit" />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
        </form>

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
