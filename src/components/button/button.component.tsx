import React from 'react';

import './button.component.css';

type myProps = {
  text: string;
  btnType?: boolean;
};

class Button extends React.Component<myProps, {}> {
  render() {
    return (
      <div>
        <div className={this.props.btnType ? 'primary-btn' : 'secondary-btn'}>
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Button;
