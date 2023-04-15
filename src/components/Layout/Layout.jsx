import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div>
      <ul className={css.LayoutUl}>
        <li className={css.LayoutIl}>
          <NavLink className={css.LayoutIl} to="/">
            <a className={css.Text}>Home</a>
          </NavLink>
        </li>
        <li className={css.LayoutIl}>
          <NavLink className={css.LayoutIl} to="/movies">
            <a className={css.Text}>Movies</a> 
          </NavLink>
        </li>
      </ul>

      
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};