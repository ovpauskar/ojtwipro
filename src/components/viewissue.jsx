import React, { Component } from 'react'
import axios from 'axios';

export class ViewIssue extends Component {

  constructor(props) {
    super(props);
    this.state = {
      issue: null
    }
  }

  componentDidMount = () => {
    const issueId = parseInt(this.props.match.params.id, 10);
    axios.get('https://my-json-server.typicode.com/kiranrkkulkarni/issuetrackerMock/issues/' + issueId)
      .then((res) => {
        this.setState({
          issue: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      this.state.issue ? <div className="ui card">
          <div className="content">
            <div className="header">
              Issue Details with id : {this.state.issue.id}
            </div>
            <div className="description">
              <p><strong>Issue Summary</strong> {this.state.issue.summary}</p>
              <p><strong>Issue Status: </strong> {this.state.issue.issueStatus}</p>
              <p><strong>Created Date: </strong> {this.state.issue.createdDate}</p>
        
            </div>
          </div> 
        </div> : null
    )
  }
  
}