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

    const styles = {
      cardrPimary: {
        backgroundColor: '#0275d8',
        borderColor: '#0275d8'
      },
      btncolor: {
        color: '#fff'
      }

    }
    return (
      this.state.issue ? < div className="card " >
        <h3 className="card-header text-white" style={styles.cardrPimary}>Issue ID: <span className="fa fa-phone pull-right">
        </span> {this.state.issue.id}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><label>  Issue Summary:</label>  {this.state.issue.summary}</li>
          <li className="list-group-item"><label> Issue Status :</label>  {this.state.issue.issueStatus}</li>
          <li className="list-group-item"> <label> Created Date :</label>  {this.state.issue.createdDate}</li>
        </ul>
      </div >: null

        
    )
  }
  
}