import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import { setTokens } from '../utils/auth-util';
import '../styles/pages/auth.css';
import { sanitizeInput, validateEmail, validatePassword } from '../utils/validation';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        if (!validateEmail(email) || !validatePassword(password)) {
            setError('Invalid email or password');
            return;
        }

        try {
            const { access_token, refresh_token } = await login({ email, password });
            setTokens(access_token, refresh_token);
            window.dispatchEvent(new Event('storage'));
            navigate('/dashboard');
        } catch(err: any) {
            setError(err.message || 'Login failed. please try again.');
        }
    };

    return (
        <div className="auth-page">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
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
            <button className="auth-button" type="submit">Login</button>
            <p>Don't have an account? <span onClick={() => navigate('/register')}>register</span></p>
          </form>
        </div>
      );
    };
    
    export default Login;