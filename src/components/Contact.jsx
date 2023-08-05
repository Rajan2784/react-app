import React from 'react'
import { useState } from 'react';

const Contact = () => {

  const [showAfterSubmit, setShowAfterSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAfterSubmit(true);

    // After 3 seconds (adjust the time as needed)
    setTimeout(() => {
      setShowAfterSubmit(false);
    }, 3000);
  };
  return (
    <div className='contact'>
      <main>

        <h1>Contact Us</h1>
        {showAfterSubmit ? (
          <div className='afterSubmit'>
            <h1>Thank You!!</h1>
            <p>for contacting us.....</p>
            <p>We will reach you soon!!</p>
          </div>
        ):(
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" placeholder='Abc' required />
          </div>

          <div>
            <label>Email</label>
            <input type="email" placeholder='Abc@gmail.com' required />
          </div>

          <div>
            <label>Message</label>
            <input type="text" required placeholder='tell us something' />
          </div>
          <button type="submit">Submit</button>

        </form>
        )}
      </main>

    </div>
  )
}

export default Contact

