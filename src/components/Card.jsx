import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <div style={ this.props.style }>
                { this.props.name }
                <br />
                <sup>likes: { this.props.likes }</sup>
            </div>
        )
    }
}