import React, { Component, Fragment } from 'react';

import { Tag, Form, Input, Button } from 'antd';

class Keywords extends Component{

    constructor(props){
        super(props);

        this.state = {
            keyword: '',
            keywords: this.props.keywords,
            colors: [
                'magenta',
                'red',
                'volcano',
                'orange',
                'gold',
                'lime',
                'green',
                'cyan',
                'blue',
                'geekblue',
                'purple',
            ]
        }

        this.addKeywords = this.addKeywords.bind(this);
        this.onKeywordChange = this.onKeywordChange.bind(this);
        this.deleteKeyword = this.deleteKeyword.bind(this);
        this.updateProps = this.updateProps.bind(this);
    }

    onKeywordChange(e) {
        this.setState({
            keyword: e.target.value
        })
    }

    addKeywords(e){
        e.preventDefault();
    
        this.setState( (state) => {
            return {
                keywords: [...state.keywords, this.state.keyword],
                keyword: ""
            }
        }, () => this.updateProps())
    }

    deleteKeyword(element) {
        this.setState({
            
            keywords: this.remove(this.state.keywords, element)
            
        }, () => this.updateProps())
    }

    updateProps(){
        this.props.onChange(this.state.keywords);
    }

    remove(array, element) {
        const index = array.indexOf(element);

        if (index !== -1) {
          array.splice(index, 1);
        }

        return array;
    }

    render() {

        return (
            <Fragment>
                <h2>Keywords</h2>

                {
                    this.state.keywords.map((element, i) => {
                        return (
                            <Tag key={i} color={this.state.colors[i%11]} closable={true} onClick={() => this.deleteKeyword(element)}>{element}</Tag>
                        );
                    })
                }
                <Form layout={"inline"} onSubmit={this.addKeywords}>
                    <Form.Item>
                        <Input type={"text"} value={this.state.keyword} onChange={this.onKeywordChange} />
                    </Form.Item>
                    <Form.Item>
                        <Button type={"primary"} htmlType={"submit"}>
                            Add Keyword
                        </Button>
                    </Form.Item>
                </Form>
            </Fragment>
        );
    }
}

export default Keywords;