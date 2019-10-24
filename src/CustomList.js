import React, {Component, Fragment} from 'react'
import { Form, Input, Button } from 'antd';

class CustomList extends Component{

    constructor(props){
        super(props);

        this.state = {
            element: '',
            elements: this.props.list
        }

        this.onElementChange = this.onElementChange.bind(this);
        this.addElements = this.addElements.bind(this);
        this.deleteElement = this.deleteElement.bind(this);
        this.updateProps = this.updateProps.bind(this);
    }

    onElementChange(e) {
        this.setState({
            element: e.target.value
        })
    }

    addElements(e){
        e.preventDefault();
    
        this.setState( (state) => {
            return {
                elements: [...state.elements, this.state.element],
                element: ""
            }
        }, () => this.updateProps())
    }

    deleteElement(elem) {
        this.setState({
            
            elements: this.remove(this.state.elements, elem)
            
        }, () => this.updateProps())
    }

    updateProps(){
        this.props.onChange(this.state.elements);
    }

    remove(array, element) {
        const index = array.indexOf(element);

        if (index !== -1) {
          array.splice(index, 1);
        }

        return array;
    }


    render(){
        return(

            <Fragment>
                <h2>{this.props.title}</h2>

                {
                    this.props.ordered ? (
                        <ol>
                            {
                                this.state.elements.map((element,i) => {
                                    return <li key={i} onClick={() => this.deleteElement(element)} >{element}</li>
                                })
                            }
                        </ol>
                    ) : (
                        <ul>
                            {
                                this.state.elements.map((element,i) => {
                                    return <li key={i} onClick={() => this.deleteElement(element)} >{element}</li>
                                })
                            }
                        </ul>
                    )
                }

                

                <Form layout={"inline"} onSubmit={this.addElements}>
                    <Form.Item>
                        <Input type={"text"} value={this.state.element} onChange={this.onElementChange} />
                    </Form.Item>
                    <Form.Item>
                        <Button type={"primary"} htmlType={"submit"}>
                            Add {this.props.title}
                        </Button>
                    </Form.Item>
                </Form>
            </Fragment>
        );
    }
}

export default CustomList;