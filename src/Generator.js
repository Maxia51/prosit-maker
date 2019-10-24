import React, {Component, Fragment} from 'react'
import { Button } from 'antd';

let file = require('./static/markdown.md')

class Generator extends Component{

    constructor(props){
        super(props);

        this.generateMd = this.generateMd.bind(this);
        this.addKeyword = this.addKeyword.bind(this);
        this.addList = this.addList.bind(this);
        this.addTitle = this.addTitle.bind(this);
    }

    generateMd(){
        this.forceUpdate()
        let md;

        fetch(file)
            .then(response => {
                return response.text()
            })
            .then(text => {
                md = text;

                md = this.addTitle(md);
                md = this.addRole(md);
                md = this.addKeyword(md);
                md = this.addText(md, "Context", this.props.component.context);
                md = this.addText(md, "Generalization", this.props.component.generalization);
                md = this.addList(md, "Constraint", this.props.component.constraints);
                md = this.addList(md, "Problematics", this.props.component.problematics);
                md = this.addList(md, "Hypothesis", this.props.component.hypothesis);
                md = this.addList(md, "Actions", this.props.component.actions, true);

                md += '\n';

                const element = document.createElement("a");
                const file = new Blob([md], {type: 'text/plain'});
                element.href = URL.createObjectURL(file);
                element.download = "prositAller.md";
                document.body.appendChild(element); // Required for this to work in FireFox
                element.click();
            })

    }

    addTitle(md){
        let regex = /{Title}/gi;
        return md.replace(regex, this.props.component.title+"\n");
    }

    addRole(md){
        let regex = /{Roles}/gi;

        let role = '';
        role += ("*Animator: " + this.props.component.roles.animator+"\n")
        role += ("*Scribe: " + this.props.component.roles.scribe+"\n")
        role += ("*Manager: " + this.props.component.roles.manager+"\n")
        role += ("*Secretary: " + this.props.component.roles.secretary)

        return md.replace(regex, role)
    }

    addKeyword(md){
        let regex = /{Kewords}/gi;

        let tmp= '\n';

        this.props.component.keywords.map((element) => {
            return tmp += ("* **"+element+"**:\n");
        })

        return md.replace(regex, tmp.substring(0, tmp.length-1));
    }

    addText(md, reg, text){
        let regex;

        switch(reg){
            case 'Context':
                regex = /{Context}/gi;
                break;
            case 'Generalization':
                regex = /{Generalization}/gi;
                break;
            default:
                break;
        }

        let tmp= '\n';
        tmp += ("" +text)
        
        return md.replace(regex, tmp.substring(0, tmp.length-1))
    }

    addList(md, reg, list, ordered = false) {
        let regex;

        switch(reg){
            case 'Constraint':
                regex = /{Constraint}/gi;
                break;
            case 'Problematics':
                regex = /{Problematics}/gi;
                break;
            case 'Hypothesis':
                regex = /{Hypothesis}/gi;
                break;
            case 'Actions':
                regex = /{Actions}/gi;
                break;
            default:
                break;
        }

        let tmp= '\n';
        let listChar = ordered ? '1.' : '*'

        list.map((element) => {
            return tmp += (listChar+" "+element+"\n");
        });

        return md.replace(regex, tmp.substring(0, tmp.length-1))
    }

    render() {
        return (
            <Fragment>
                <Button type={"primary"} size={"large"} onClick={this.generateMd} >Generate Md</Button>
            </Fragment>
        );
    }

}

export default Generator;