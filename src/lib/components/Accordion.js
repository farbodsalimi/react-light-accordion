import React, { Component } from 'react';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        atomic: this.props.atomic
      });
    });
  }

  render() {
    return <div className="accordion">{this.renderChildren()}</div>;
  }
}

export default Accordion;
