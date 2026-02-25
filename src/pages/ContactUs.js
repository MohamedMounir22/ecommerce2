
// contact us page
import React from 'react';
import './contactUs.css';
function ContactUs() {
    return (
        <div className='contactUsContainer'>
            <h2>Contact Us</h2>
            <hr />
            {/* form that has name and email and massege and send button */}
            <form className='contactForm' style={{ display: 'flex', flexDirection: 'column',  }}>
                <h6>name</h6>
                <input type="text" placeholder="Name" style={{  fontSize: '1rem' }} />
                <h6>email</h6>
                <input type="email" placeholder="Email" style={{  fontSize: '1rem' }} />
                <h6>message</h6>
                <textarea placeholder="Message" rows="5" style={{  fontSize: '1rem' }}></textarea>
                <button type="submit" style={{  fontSize: '1rem', backgroundColor: '#555', color: '#fff', border: 'none', cursor: 'pointer' }}>Send</button>
            </form>
            
        </div>
    );
}
export default ContactUs;