import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component{

    render(){
        return (
            <div>
                <h1>Hello</h1>
                <div>This is my dashboard</div>
            </div>
        )
    }
}
ReactDOM.render( <App />, document.getElementById('dash'));