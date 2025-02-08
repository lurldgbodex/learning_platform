import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/auth';
import { sanitizeInput, validateEmail } from '../utils/validation';
import { setTokens } from '../utils/auth-util';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e:React.FormEvent) => {
            e.preventDefault();
            if (!validateEmail(email) || password === null || password === '') {
                setError('Invalid email or password');
                return;
            }

            try {
                const { access_token, refresh_token } = await register({ email, password });    
                setTokens(access_token, refresh_token);

                window.dispatchEvent(new Event('storage'));
                navigate('/dashboard');
            } catch(err: any) {
                console.log('Register Error:', err.message)
                setError(err.message || 'Registration failed. please try again.');
            }
        };

        return (
        <div className="auth-page">
            <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            {error && <p className="error">{error}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(sanitizeInput(e.target.value))}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(sanitizeInput(e.target.value))}
            />
            <button className="auth-button" type="submit">Register</button>
            <p>Already have an account? <span onClick={() => navigate('/login')}>login</span></p>
            </form>
        </div>
        );
}

export default Register;