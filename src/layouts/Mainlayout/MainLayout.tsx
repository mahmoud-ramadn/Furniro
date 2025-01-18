import { Outlet } from 'react-router-dom';
import TheHeader from '../../components/common/TheHeader/TheHeader';
import TheFooter from '../../components/common/TheFooter/TheFooter';
import { Toaster } from 'react-hot-toast';

function MainLayout() {
  return (
    <div className="w-full mx-auto relative">
      <TheHeader />
      <Toaster position="top-right" />
      <Outlet />
      <TheFooter />
    </div>
  );
}

export default MainLayout;
