import React, { useState } from 'react';
import './order.scss';

function Order() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        apiKey.SERVICE_ID,
        apiKey.TEMPLATE_ID_REG,
        e.target,
        apiKey.USER_ID,
      )
      .then(
        () => {
          handleClickOpen();
        },
        (error) => {
          alert('Něco se pokazilo, zkuste to znovu.', error.text);
        },
      );
    document.getElementById('contactForm').reset();
  };

  return (
    <>
      <button className="orderBtn" onClick={handleClickOpen}>
        Namíchat
      </button>
      {open && (
        <form id="contactForm" className="contactForm" onSubmit={handleSubmit}>
          <h3>Napište nám</h3>
          <div>
            <label htmlFor="email">
              Email:
              <br />
              <input required type="email" id="email" name="email" />
            </label>
            <label htmlFor="message">
              Zpráva: <br />
              <textarea type="textarea" id="message" name="message" />
            </label>
          </div>
          <button className="sendBtn" type="submit" onClick={handleClickClose}>
            Odeslat
          </button>
        </form>
      )}
    </>
  );
}

export default Order;
