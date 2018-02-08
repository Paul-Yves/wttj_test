import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: 'No company',
            candidates: []
        }
    }

    componentDidMount(){
        const self = this;
        let company_id = 1; //fake id stubbed in backend for demo purpose
        axios.get('company/'+company_id+'/show')
            .then(function (response) {
                const data = response.data;
                self.setState({name: data.name, candidates: data.recruits});
                console.log(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render(){
        return (
            <div>
                <h1>{this.state.name} - Account manager</h1>
                <div>This is my dashboard</div>
            </div>
        )
    }
}
ReactDOM.render( <App />, document.getElementById('dash'));