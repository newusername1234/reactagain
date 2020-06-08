import React, { Component } from 'react';

export default class Card extends Component {
    // let condition = false;
    render() {
        return (
            <div style={myStyle}>
                {this.props.name}
                <br />
                <sup style={this.props.likes ? {color: "green"} : {color: "red"}}>likes: { this.props.likes }</sup>
            </div>
        )
    }
}

const myStyle = {
    maxWidth: "30%", 
    borderRadius: "5px", 
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)", 
    padding: "10px", 
    margin: "10px",
};