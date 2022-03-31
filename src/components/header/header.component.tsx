import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.component.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/products'>Products</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
