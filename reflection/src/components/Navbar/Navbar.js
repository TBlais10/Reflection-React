import React, { Fragment } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import NavButton from "./NavButton";

const Navbar = (props) => {
  const [auth] = useContext(AuthContext);

  return (
    <Fragment>
      <div style={{
          backgroundColor: "goldenrod",
          position: "fixed",
          width: "100%",
          zIndex: 9999,
          top: 0,
          left: 0,
          height: "75px",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: "2.5em",
            margin: "0 20px",
          }}
        >Reflection</h1>
        <div style={{
            margin: "0 20px",
            flexDirection: 'row',
            background: "transparent",
            userSelect: "none",
            alignItems: "center",
          }}>
          <NavButton to="/" label="Home" />
          {auth.token ? (
            <Fragment>
              <NavButton to="/Entries" label="Journal Entries" />,
              <NavButton to="/profiles" label="Profiles" />
            </Fragment>
            ) : (
              <Fragment>
                <NavButton to="/login" label="Login" />
                <NavButton to="/signup" label="Register" />
              </Fragment>
          ) }
        </div>
      </div>
      <div style={{ height: "75px" }} />
    </Fragment>
  );
};

export default Navbar;
