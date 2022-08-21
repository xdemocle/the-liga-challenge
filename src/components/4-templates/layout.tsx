import { Outlet } from 'react-router-dom';
import Main from '../3-organisms/main';
import Topbar from '../3-organisms/topbar';

const LayoutTemplate = () => {
  return (
    <>
      <Topbar />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default LayoutTemplate;
