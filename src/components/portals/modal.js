import React from "react";
import ReactDOM from "react-dom";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    let modalRoot = document.getElementById('modal-root');
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    let modalRoot = document.getElementById('modal-root');
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
    // return <div>modal</div>
  }
}

export {Modal}