import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Root from '@/components/pages/Root';
import NotFound from '@/components/pages/NotFound';
import { ROOT } from '@/constants/routes';

const Layout = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROOT} element={<Root />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Layout;
