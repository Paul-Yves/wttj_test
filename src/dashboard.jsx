import React, { Component } from "react";
import ReactDOM from "react-dom";
import Cable from "actioncable";
import axios from 'axios';
import Dashboard from './components/dashboard'

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: 'No company',
            recruits: []
        }
    }

    componentDidMount(){
        this.fetchCompanyInfo();
        this.createSocket();
    }
    fetchCompanyInfo(){
        const self = this;
        let company_id = 1; //fake id stubbed in backend for demo purpose
        axios.get('company/'+company_id+'/show')
            .then(function (response) {
                const data = response.data;
                self.setState({name: data.name, recruits: data.recruits});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    createSocket() {
        let cable = Cable.createConsumer('ws://localhost:3000/cable');
        this.socket = cable.subscriptions.create({
            channel: 'DashboardChannel'
        }, {
            connected: () => {},
            received: (data) => {
                const recruits_indexes = this.state.recruits.map(recruit => recruit.id);
                // we fetch only if the recruit that changed is in our list
                if (data.message === 'step_changed' && recruits_indexes.indexOf(data.id) >= 0){
                    this.fetchCompanyInfo();
                }
            },
            create: function(chatContent) {
                this.perform('create', {
                    content: chatContent
                });
            }
        });
    }

    render(){
        return (
            <div>
                <div className='menu-bar'>
                    <h1>{this.state.name} - Account manager</h1>
                </div>
                <Dashboard recruits={this.state.recruits}></Dashboard>
            </div>
        )
    }
}
ReactDOM.render( <App />, document.getElementById('dash'));