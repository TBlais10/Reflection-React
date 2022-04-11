import React, { Fragment } from "react";

const Navbar = (props) => {
    return (
        <Fragment>
            <div style={{
                backgroundColor: "goldenrod",
                position: 'absolute',
                width: '100%',
                zIndex: 9999,
                top: 0,
                left: 0,
                height: '75px',
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'space-between',
            }}>
                <h1>Navbar</h1>
                <h1>Buttons</h1>
            </div>
            <div style={{height: '75px'}} />
        </Fragment>
    )
}

export default Navbar;