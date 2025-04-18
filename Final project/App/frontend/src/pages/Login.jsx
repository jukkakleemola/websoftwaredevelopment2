import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Tässä voi toteuttaa oikean autentikoinnin, nyt simuloidaan siirtymistä
    navigate('/main/scan');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#2C5364] via-[#203A43] to-[#0F2027]">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-80 shadow-md">
        <h2 className="text-center text-2xl font-bold mb-4 text-white">Login</h2>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-3 py-2 rounded bg-white/20 text-white outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 rounded bg-white/20 text-white outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="w-full bg-brand hover:bg-brand-dark text-white py-2 rounded font-semibold"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
