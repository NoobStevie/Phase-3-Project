import React, { useState } from 'react';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform sign-up here
        console.log('Email:', email);
        console.log('Password:', password);
        // Reset form fields
        setEmail('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;