import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function MainLayout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-darkbg text-white">
      {/* Yläpalkki jossa logo ja logout */}
      <Header />

      {/* Keskiosa, jossa näkyy reititetty sisältö */}
      <main className="flex-1 overflow-auto p-4">
        <Outlet />
      </main>

      {/* Alaosan navigaatio */}
      <BottomNav />
    </div>
  );
}
