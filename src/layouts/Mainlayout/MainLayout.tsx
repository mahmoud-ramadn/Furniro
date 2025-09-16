import { Outlet } from 'react-router-dom';
import TheHeader from '../../components/common/TheHeader/TheHeader';
import TheFooter from '../../components/common/TheFooter/TheFooter';
import { Toaster } from 'react-hot-toast';

function MainLayout() {
  return (
    <div className="w-full overflow-hidden mx-auto relative  md:px-0">
      <TheHeader />
      <div className="h-[100px]"></div>
      <Toaster position="top-right" />

      <Outlet />
      <TheFooter />
    </div>
  );
}

export default MainLayout;
