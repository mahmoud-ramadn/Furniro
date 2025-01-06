import { Outlet } from 'react-router-dom';
import TheHeader from '../../components/common/TheHeader/TheHeader';
import TheFooter from '../../components/common/TheFooter/TheFooter';
function MainLayout() {
  return (
    <div className=" w-full  mx-auto ">
      <TheHeader />
      <Outlet />
      <TheFooter />
    </div>
  );
}

export default MainLayout;
