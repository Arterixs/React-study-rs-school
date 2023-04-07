import { Navigate, Route, Routes } from 'react-router-dom';
import { About } from '../pages/about/about';
import { Layout } from '../pages/layout/layout';
import { Main } from '../pages/main/main';
import { NotFound } from '../pages/not-found/not-found';
import { Routers } from '../types/enums/routers';
import { birdsData } from '../store/data';

export const App = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Navigate to={Routers.MAIN_PAGE} />} />
      <Route path={Routers.MAIN_PAGE} element={<Main contentCard={birdsData} />} />
      <Route path={Routers.ABOUT_PAGE} element={<About />} />
    </Route>
    <Route path='*' element={<NotFound />} />
  </Routes>
);
