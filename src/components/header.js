import React, { Component, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import { useScrollTrigger } from "@mui/material";
import { CSSTransition } from "react-transition-group"; // ES6
import "../header.css";
import SearchIcon from "@mui/icons-material/Search";

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
      <AppBar className="appBar">
        <div className="header">
          <div id="headerTop">
            <h1 style={{ display: "inline" }}>
              <img src="https://s.yimg.com/rz/p/yahoo_homepage_en-US_s_f_p_bestfit_homepage.png" />
            </h1>
            <form style={{ display: "inline" }}>
              <div id="searchGroup">
                <input type={"search"} id="search" />
                <SearchIcon id="searchIcon" />
              </div>
            </form>
            <button id="register">Register</button>
            <span id="notification"><img src={process.env.PUBLIC_URL + "sprites.png"} id="notificationIcon"/></span>
            <span id="mail"><img src={process.env.PUBLIC_URL + "sprites.png"} id="mailIcon"/></span><label>Mail</label>
          </div>
          <div
            style={{
              overflow: "hidden",
              transition: "all .3s",
              height: isVisible ? "32px" : "0",
            }}
            className="disappear"
            id="headerBottom"
          >
            <a href="#">Mail</a>
            <a href="#">Coronavirus</a>
            <a href="#">Messages</a>
            <a href="#">Sports</a>
            <a href="#">Finances</a>
            <a href="#">Stars</a>
            <a href="#">Style</a>
            <a href="#">weather</a>
            <a href="#">Further...</a>
          </div>
        </div>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
