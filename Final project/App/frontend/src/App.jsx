import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainLayout from './layouts/MainLayout';
import ScanQr from './pages/ScanQr';
import Light from './pages/Light';
import Hoist from './pages/Hoist';
import Sound from './pages/Sound';
import DeviceDetail from './pages/DeviceDetail';  // Tuodaan DeviceDetail
import MaintenanceLogs from './pages/MaintenanceLogs';  // Tuodaan MaintenanceLogs
import FaultReports from './pages/FaultReports';  // Tuodaan FaultReports

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
        
        {/* Lisää DeviceDetail reitti */}
        <Route path="device/:deviceId" element={<DeviceDetail />} />
        
        {/* Lisää reitit huoltotiedoille ja vikailmoituksille */}
        <Route path="device/:deviceId/maintenanceLogs" element={<MaintenanceLogs />} />
        <Route path="device/:deviceId/faultReports" element={<FaultReports />} />

      </Route>
    </Routes>
  );
}
