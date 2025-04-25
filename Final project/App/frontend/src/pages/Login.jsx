import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');  // email tila
  const [password, setPassword] = useState('');  // password tila
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),  // käytä emailia ja passwordia
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);  // Tallenna JWT-tunnus
        navigate('/main/scan');  // Siirry scan-näkymään
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Jotain meni pieleen.');
      }
    } catch (error) {
      console.error('Virhe kirjautumisessa:', error);
      alert('Jotain meni pieleen.');
    }
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
            onChange={(e) => setEmail(e.target.value)}  // emailin muutos
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 rounded bg-white/20 text-white outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  // passwordin muutos
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
