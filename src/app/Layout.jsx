import { Outlet, Link } from 'react-router-dom';
import { Wrapper } from '../shared';
import { useLocation } from 'react-router-dom';

export const Layout = () => {
  let path = useLocation();

  if (path.pathname == '/register' || path.pathname == '/login') {
    return (
      <Wrapper>
        <Outlet />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/library">library</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="reading">reading</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </Wrapper>
  );
};
