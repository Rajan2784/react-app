import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <main>

        <h1>Contact Us</h1>

        <form>
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
      </main>
    </div>
  )
}

export default Contact

