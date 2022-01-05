import React, { Component, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import { useScrollTrigger } from "@mui/material";
import { CSSTransition } from "react-transition-group"; // ES6

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  if (trigger) {
    props.hide();
  } else {
    props.show();
  }

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header(props) {
  const [isVisible, setIsVisible] = useState(true);

  function handlerFalse() {
    setIsVisible(false);
  }

  function handlerTrue() {
    setIsVisible(true);
  }

  return (
    <ElevationScroll hide={handlerFalse} show={handlerTrue}>
      <AppBar>
        <div>
          <h1 style={{ display: "inline" }}>
            <img src="https://s.yimg.com/rz/p/yahoo_homepage_en-US_s_f_p_bestfit_homepage.png" />
          </h1>
          <form style={{ display: "inline" }}>
            <input type={"search"} />
          </form>
          <button>Register</button>
          <p style={{ display: "inline" }}>Notification Icon</p>
          <p style={{ display: "inline" }}>Mail</p>
        </div>
        <br />
        <CSSTransition
          timeout={3000}
        >
          {isVisible && (
            <div>
              <a>Mail</a>
              <a>Coronavirus</a>
              <a>Messages</a>
              <a>Sports</a>
              <a>Finances</a>
              <a>Stars</a>
              <a>Style</a>
              <a>weather</a>
              <a>Further...</a>
            </div>
          )}
        </CSSTransition>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
