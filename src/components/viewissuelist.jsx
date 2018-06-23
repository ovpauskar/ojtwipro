import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Table } from 'semantic-ui-react'
import axios from 'axios';

export class ViewIssueList extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      issueList: []
    };
 
  }

  componentDidMount = () => {
    axios.get('https://my-json-server.typicode.com/kiranrkkulkarni/issuetrackerMock/issues/')
      .then((res) => {
        this.setState({
            issueList: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }
  actionTemplate(id) {
    console.log(id);
    return ( <Link className="ui basic blue button"
    to={`/trackissue/${id}`}>
Show Details
</Link>);
  }

  render() {
    const title = <h3> Issue Tracker List</h3>;
    const issueRows = this.state.issueList.map(e => {
                              return (
                                <tr key={e.id}>
                                  <td>{e.id}</td>
                                  <td>{e.summary}</td>
                                  <td>{e.issueStatus}</td> 
                                  <td>{e.createdDate}</td>
                                
                                  <td>
                                    <Link className="ui basic blue button"
                                          to={`/trackissue/${e.id}`}>
                                      Show Details
                                    </Link>
                                  </td>
                                </tr>
                              )
                            });

    return (
      <div>
        {title}
        <table className="ui celled fixed sortable table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Summary</th> 
              <th>Status</th>
              <th>Created Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {issueRows}
          </tbody>
        </table>
        {/* <div className="content-section implementation">
                    
                    <DataTable value={this.state.issueList}>
                        <Column field="id" header="Issue ID" sortable={true}/>
                        <Column field="summary" header="Summary" sortable={true}/>
                        <Column field="issueStatus" header="Issue status" sortable={true}/>
                        <Column field="createdDate" header="Date" sortable={true}/>
                        <Column body={this.actionTemplate.bind(this.state.issueList.id)} header="Actions" style={{ textAlign: 'center' }}/>
                    </DataTable>
                </div> */}
      </div>
    )
  }
}
