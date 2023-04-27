import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFound } from 'pages/not-found/Not-found';
import { Layout } from 'pages/layout';
import { Main } from 'pages/main';
import { About } from 'pages/about';
import { Routers } from 'types/enums/routers';
import { FormPage } from 'pages/form';
import { optionSelect } from '../store/options';
import { birdsData } from '../store/data';

export const App = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Navigate to={Routers.MAIN_PAGE} />} />
      <Route path={Routers.MAIN_PAGE} element={<Main contentCard={birdsData} />} />
      <Route path={Routers.ABOUT_PAGE} element={<About />} />
      <Route path={Routers.FORM} element={<FormPage option={optionSelect} />} />
    </Route>
    <Route path='*' element={<NotFound />} />
  </Routes>
);
