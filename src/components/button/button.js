import React from 'react';
import './button.css';

const Button = (props) => {
    if (props.tertiary) {
        return <div className="button tertiary-button">{props.label}</div>
    } else if (props.secondary) {
        return <div className="button secondary-button">{props.label}</div>;
      } else {
        return <div className="button primary-button">{props.label}</div>;
      }
}

export default Button;