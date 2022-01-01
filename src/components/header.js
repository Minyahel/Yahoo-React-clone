import React from "react";

function Header() {
  return (
    <div>
      <div>
        <h1 style={{ display: "inline" }}><img src="https://s.yimg.com/rz/p/yahoo_homepage_en-US_s_f_p_bestfit_homepage.png"/></h1>
        <form style={{ display: "inline" }}>
          <input type={"search"} />
        </form>
        <button>Register</button>
        <p style={{ display: "inline" }}>Notification Icon</p>
        <p style={{ display: "inline" }}>Mail</p>
      </div>
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
    </div>
  );
}

export default Header;
