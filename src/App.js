import React, { Component } from 'react';
import { Row, Col, Input } from 'antd'

import Roles from './Roles'
import Keywords from './Keywords';
import Context from './Context';
import CustomList from './CustomList';
import Generator from './Generator';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      roles: {
        animator: "",
        scribe: "",
        manager: "",
        secretary: "",
      },
      keywords : [],
      context: "",
      generalization: "",
      constraints: [],
      problematics: [],
      hypothesis: [],
      actions: [],

    }

    this.onRoleChange = this.onRoleChange.bind(this);
    this.onKeywordsChange = this.onKeywordsChange.bind(this);
    this.onContextChange = this.onContextChange.bind(this);
    this.onGeneralizationChange = this.onGeneralizationChange.bind(this);
    this.onConstraintChange = this.onConstraintChange.bind(this);
    this.onProblematicsChange = this.onProblematicsChange.bind(this);
    this.onHypothesisChange = this.onHypothesisChange.bind(this);
    this.onActionChange = this.onActionChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onRoleChange(value){
    this.setState({
      roles: value
    })
  }

  onKeywordsChange(value){
    this.setState({
      keywords: value
    })
  }

  onContextChange(value){
    this.setState({
      context: value
    })
  }

  onGeneralizationChange(value){
    this.setState({
      generalization: value
    })
  }

  onConstraintChange(value){
    this.setState({
      constraints: value
    })
  }

  onProblematicsChange(value){
    this.setState({
      problematics: value
    })
  }

  onHypothesisChange(value){
    this.setState({
      hypothesis: value
    })
  }

  onActionChange(value){
    this.setState({
      actions: value
    })
  }

  onTitleChange(e){
    this.setState({
      title: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Row type="flex" justify={"center"} align={"middle"}>
          <Col span={5}>
            <h1>Prosit Maker</h1>
            <h2>{this.state.title}</h2>
            <Input value={this.state.title} onChange={this.onTitleChange} />
          </Col>
        </Row>
        <Row type="flex" justify={"center"} align={"middle"}>
          <Col span={12}>
            <Roles roles={this.state.roles} onChange={this.onRoleChange} />
          </Col>
        </Row>
        <Row type="flex" justify={"center"} align={"middle"}>
          <Col span={12}>
            <Keywords keywords={this.state.keywords} onChange={this.onKeywordsChange} />
          </Col>
        </Row>
        <Row type="flex" justify={"center"} align={"middle"}>
          <Col span={12}>
            <Context context={this.state.context} title={"Context"} onChange={this.onContextChange} />  
          </Col>
        </Row>
        <Row type="flex" justify={"center"} align={"middle"}>
          <Col span={12}>
            <Context context={this.state.generalization} title={"Generalization"} onChange={this.onGeneralizationChange} />  
          </Col>
        </Row>
        <Row type="flex" justify={"center"} align={"middle"}>
          <Col span={12}>
            <CustomList ordered={false} list={this.state.constraints} title={"Constraint"} onChange={this.onConstraintChange} />  
          </Col>
        </Row>
        <Row type="flex" justify={"center"} align={"middle"}>
          <Col span={12}>
            <CustomList ordered={false} list={this.state.problematics} title={"Problematics"} onChange={this.onProblematicsChange} />  
          </Col>
        </Row>
        <Row type="flex" justify={"center"} align={"middle"}>
          <Col span={12}>
            <CustomList ordered={false} list={this.state.hypothesis} title={"Hypothesis"} onChange={this.onHypothesisChange} />  
          </Col>
        </Row>
        <Row type="flex" justify={"center"} align={"middle"}>
          <Col span={12}>
            <CustomList ordered={true} list={this.state.actions} title={"Action Plan"} onChange={this.onActionChange} />  
          </Col>
        </Row>
        <Row type="flex" justify={"center"} align={"middle"}>
          <Col span={12}>
            <Generator component={this.state} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
