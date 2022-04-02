import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import NavLink from './NavLink/NavLink';

import Logo from '../../assets/img/logo.svg';
import DownArrow from '../../assets/img/down-arrow.svg';
import Cart from '../../assets/img/cart.svg';

import './header.component.css';

type myProps = {
  to?: string;
};
class Header extends React.Component<myProps, {}> {
  render() {
    return (
      <header>
        <nav>
          <ul className='header-nav-group'>
            <div className='header-nav-items left-nav'>
              <li className='header-nav-item'>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                  }
                >
                  WOMEN
                </NavLink>
              </li>
              <li className='header-nav-item'>
                <NavLink
                  to='/men'
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                  }
                >
                  MEN
                </NavLink>
              </li>
              <li className='header-nav-item'>
                <NavLink
                  to='/kids'
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                  }
                >
                  KIDS
                </NavLink>
              </li>
            </div>
            <li className='header-nav-items'>
              <NavLink to='/'>
                <img src={Logo} alt='logo' />
              </NavLink>
            </li>
            <div className='header-nav-items right-nav'>
              <li className='header-nav-item'>
                <p className='header-nav-current'>
                  $
                  <img src={DownArrow} alt='down arrow' />
                </p>
              </li>
              <li className='header-nav-item'>
                <p>
                  <img src={Cart} alt='cart' />
                </p>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
