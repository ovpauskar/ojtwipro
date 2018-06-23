import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import classnames from 'classnames';
import {Panel} from 'primereact/components/panel/Panel';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';

export class IssueForm extends Component {
  
    constructor(props)
    {
        super(props);
        this.state={
            issues:[],
            createdId: []
        }
    }

    ComponentDidMount(){
        this.refs.issSumry.focus()
    }

    handleOnClick=(e)=>{
        e.preventDefault();
        let issues=this.state.issues;
        let issStatus="Pending";
        let issuesummary=this.refs.summary.value;
        let issue={ summary:issuesummary,issueStatus:issStatus,createdDate:Date(), }
        console.log(issue);
        issues.push(issue);
        this.setState({
            issues : issues
        })
        
        axios.post('https://my-json-server.typicode.com/kiranrkkulkarni/issuetrackerMock/issues/',issues)
      .then((res) => {
        console.log("issue id" , res.data);
        this.setState({
          done: true,
          createdId: res.data
         
        })
       
      })
      .catch((err) => {
        console.log(err);
      });
       // console.log("On state",this.state.issues)
     }

  
  
  

  render() {
    const currentId=this.state.createdId.map(resData=>{
      return(resData.id);
    });
    if(this.state.done===true)
    {
      console.log(currentId);
      var issueNotification= <Panel>
      <strong>Issue {currentId} has been created for you. We will keep you posted on any updates. You can see the updates on your Tracker</strong>
      <br/>
      </Panel>;
    }
    return (
      
      <div >
        <br/><br/>
          <center>
            <form ref="Issuelog" className="ui form">
            <div className="ui form">
                <textarea ref="summary" rows="4" cols="90" placeholder="Please describe your issue here"></textarea><br/><br/>
                <button className="ui basic blue button" onClick={(e)=>this.handleOnClick(e)}>Submit Issue</button>
            </div>
            </form>
            <br/><br/>
            </center>

          {issueNotification}
      </div>
    )
  }
}
