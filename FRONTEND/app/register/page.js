// Import necessary dependencies from react-router-dom
'use client'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Register = (props) => {
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    // Fix the typo here: async instead of asysnc
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name);
        try {
            // Assuming you have an API endpoint for user registration
            const response = await fetch('https://ap-south-1.aws.neurelo.com/rest/User/__one', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, password: pass }),
            });

            if (response.ok) {
                const newUser = await response.json();
                setRegisteredUsers([...registeredUsers, newUser]);
                console.log("User registered:", newUser);
            } else {
                // Handle registration error
                console.error("Registration failed");
            }
        } catch (error) {
            // Handle fetch or other errors
            console.error("Error during registration:", error);
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />

                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="" id="password" name="password" />
                <button type="submit">Register</button>
            </form>
            {/* Use Link component to navigate to the login page */}
            <Link to="/login" className="link-btn">Already have an account? Login here.</Link>
        </div>
    )
}

export default Register;