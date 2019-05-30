import React, { Component, Fragment } from 'react'

import { Input } from 'antd';

class Roles extends Component{

    constructor(props){
        super(props);

        this.state = {
            animator: this.props.roles.animator,
            scribe:  this.props.roles.scribe,
            manager:  this.props.roles.manager,
            secretary:  this.props.roles.secretary,
        };

        this.onAnimatorChange = this.onAnimatorChange.bind(this);
        this.onScribeChange = this.onScribeChange.bind(this);
        this.onManagerChange = this.onManagerChange.bind(this);
        this.onSecretaryChange = this.onSecretaryChange.bind(this);
        this.updateProps = this.updateProps.bind(this);
        this.selectNextInput = this.selectNextInput.bind(this);
    }

    onAnimatorChange(e) {
        this.setState({
            animator: e.target.value
        }, () => this.updateProps())
    }

    onScribeChange(e) {
        this.setState({
            scribe: e.target.value
        }, () => this.updateProps())
    }

    onManagerChange(e) {
        this.setState({
            manager: e.target.value
        }, () => this.updateProps())
    }

    onSecretaryChange(e) {
        this.setState({
            secretary: e.target.value
        }, () => this.updateProps())
    }


    updateProps(){
        this.props.onChange(this.state);
    }

    selectNextInput(id) {
        switch (id){
            case 1:
                this.refs.role2.focus();
                break;
            case 2:
                this.refs.role3.focus();
                break;
            case 3:
                this.refs.role4.focus();
                break;
            default:
                break;
        }
            
    }

    render() {
        return(
            <Fragment>

                <h2>Roles :</h2>

                <Input ref={"role1"} addonBefore={"Animator"} value={this.state.animator} onChange={this.onAnimatorChange} onPressEnter={() => this.selectNextInput(1)} />
                <Input ref={"role2"} addonBefore={"Scribe"} value={this.state.scribe} onChange={this.onScribeChange} onPressEnter={() => this.selectNextInput(2)} />
                <Input ref={"role3"} addonBefore={"Manager"} value={this.state.manager} onChange={this.onManagerChange} onPressEnter={() => this.selectNextInput(3)} />
                <Input ref={"role4"} addonBefore={"Secretary"} value={this.state.secretary} onChange={this.onSecretaryChange} onPressEnter={() => this.selectNextInput(4)} />
            </Fragment>
        );
    }

}

export default Roles;