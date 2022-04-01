import React from 'react';
import { Link } from 'react-router-dom';

type myProps = {
  to: string;
};

class NavLink extends React.Component<myProps, {}> {
  render() {
    console.log(this.props.to);
    const isActive =
      this.context.router.route.location.pathname === this.props.to;
    var className = isActive ? 'active' : '';
    return (
      <Link className={className} {...this.props}>
        {this.props.children}
      </Link>
    );
  }
}

export default NavLink;
