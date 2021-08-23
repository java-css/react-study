import React, { Component } from "react";
import store from "../store";

export default class ReduxPage extends Component {
    componentDidMount() {
        store.subscribe(() => {
            this.forceUpdate()
        })
    }
    add = () => {
        store.dispatch({ type: "ADD" })
    }
    minus = () => {
        store.dispatch({ type: "MINUS" })
    }

    render() {
        return (
            <div>
                <h3>这是手写的redux</h3>
                <p>{store.getState()}</p>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>

            </div>
        )
    }
}