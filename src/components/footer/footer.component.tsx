import React from 'react';
import './footer.component.css';

class Footer extends React.Component {
  render() {
    const date = new Date();
    return (
      <div className='footer'>
        Built with ❣️ by{' '}
        <a href='https://linkedin.com/in/geraldolumide' target='_blank'>Gerald Olumide</a>{' '}
        &copy; {date.getFullYear()}
      </div>
    );
  }
}

export default Footer;
