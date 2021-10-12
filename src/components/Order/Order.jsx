import React, {useEffect, useRef, useState} from 'react';
import close from '../../images/icons/close.svg';
import apiKey from '../../emailJsKey';
import emailjs from 'emailjs-com';
import './order.scss';

function Order() {
  const [open, setOpen] = useState(false);
  const focusInput = useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    handleClickClose()
    e.preventDefault();
    emailjs
      .sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
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

  useEffect(() => {
    if (open) focusInput.current.focus();
  }, [open])

  return (
    <>
      <button className="orderBtn" onClick={handleClickOpen}>
        Napište nám
      </button>
      {open && (
        <form id="contactForm" className="contactForm" onSubmit={handleSubmit}>
          <div className="contactForm_header">
            <h3>Napište nám</h3>
            <button onClick={handleClickClose}>
              <img src={close} alt=""/>
            </button>
          </div>
          <div className="contactForm_inputs">
            <label htmlFor="email">
              Email:
              <br/>
              <input required type="email" id="email" name="email" ref={focusInput}/>
            </label>
            <label htmlFor="message">
              Zpráva: <br/>
              <textarea id="message" name="message"/>
            </label>
          </div>
          <button className="sendBtn" type="submit">
            Odeslat
          </button>
        </form>
      )}
    </>
  );
}

export default Order;
