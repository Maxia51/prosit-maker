import React, { Component, Fragment } from 'react';

const file = require('./static/VERSION');

class Version extends Component{

    constructor(props){
        super(props);

        this.state = {
            version: ''
        }
    }

    componentDidMount(){
        fetch(file)
            .then(response => {
                return response.text()
            })
            .then(text => {
                this.setState({
                    version: text
                })
            })
    }

    render(){
        return (
            <Fragment>
                {JSON.stringify(this.state)}
            </Fragment>
        );
    }

}

export default Version;