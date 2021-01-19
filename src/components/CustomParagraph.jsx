import React, { Component } from "react";

const styles = {
    color: 'red',
    height: '50px',
}

export default class CustomParagraph extends Component {
    render() {
        return (
            <p {...this.props} style={styles} />
        )
    }
}