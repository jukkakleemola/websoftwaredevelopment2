import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainLayout from './layouts/MainLayout';
import ScanQr from './pages/ScanQr';
import Light from './pages/Light';
import Hoist from './pages/Hoist';
import Sound from './pages/Sound';

export default function App() {
  return (
    <Routes>
      {/* Login-sivu on ensimmäisenä */}
      <Route path="/" element={<Login />} />
      {/* MainLayout toimii kaikkien muiden sivujen pohjana */}
      <Route path="/main" element={<MainLayout />}>
        <Route path="scan" element={<ScanQr />} />
        <Route path="light" element={<Light />} />
        <Route path="hoist" element={<Hoist />} />
        <Route path="sound" element={<Sound />} />
      </Route>
    </Routes>
  );
}
