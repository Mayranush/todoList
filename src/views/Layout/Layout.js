import React, {Component} from "react";

const MainLayout = ({ children, location }) => {
  return (<div>

    <div id="content" className="main">
      {children}
    </div>

  </div>)
};

export {MainLayout};
