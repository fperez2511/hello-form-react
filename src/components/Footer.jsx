import React, { Component } from "react";

class Footer extends Component {
    render() {
        const { currentDate, customClickHandler } = this.props;

        return (
            <footer>
                <p>Copyright <span onClick={customClickHandler}>{currentDate}</span>. - Fabricio Perez</p>
            </footer>
        );
    }
}

export default Footer;