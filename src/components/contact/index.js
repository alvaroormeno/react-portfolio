import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };
    return (
        <section className='contact mt-5 mb-5 w-50 m-auto'>
            <h1 data-testid="h1tag" data-aos="fade-right" data-aos-duration="1500">Contact me</h1>
            <br />
            <form id="contact-form" onSubmit={handleSubmit}>
                <div data-aos="fade-right" data-aos-duration="1000">
                    <label className="form-label" htmlFor="name">Name:</label>
                    <br />
                    <input type="text" className="form-control" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div data-aos="fade-right" data-aos-duration="800">
                    <label className="form-label" htmlFor="email">Email address:</label>
                    <br />
                    <input type="email" className="form-control" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div data-aos="fade-right" data-aos-duration="600">
                    <label className="form-label" htmlFor="message">Message:</label>
                    <br />
                    <textarea name="message" className="form-control" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div data-aos="fade-right" data-aos-duration="400">
                        <p className="error-text fw-light">{errorMessage}</p>
                    </div>
                )}
                <br />
                <button className='btn btn-outline-light change' data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;