import React from "react";
import AppBar from "@mui/material/AppBar";
import { useScrollTrigger } from "@mui/material";

function ElevationScroll(props) {
  const { children, window } = props;

  let comp = children;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
    
  });

  if (trigger) {
    comp = <AppBar>{children.props.children[0]}</AppBar>
  }

  return React.cloneElement(comp, {
    elevation: trigger ? 4 : 0,
  });
}

function Header() {
  return (
    <ElevationScroll>
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
        <div style={{transition: "2s"}}>
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
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
