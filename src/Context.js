import React, {Component, Fragment} from 'react'
import { Input } from 'antd';

class Context extends Component{

    constructor(props){
        super(props);

        this.state = {
            context: this.props.context
        }

        this.onContextChange = this.onContextChange.bind(this);
    }

    onContextChange(e){
        this.setState({
            context: e.target.value
        }, () => this.updateProps())
    }

    updateProps(){
        this.props.onChange(this.state.context)
    }

    render(){
        return (
            <Fragment>
                <h2>{this.props.title}</h2>
                <p>{this.state.context}</p>
                <Input type={"text"} onChange={this.onContextChange} />
            </Fragment>
        )
    }
}

export default Context;