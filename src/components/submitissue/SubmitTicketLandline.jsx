import React, { Component } from 'react'
import {Panel} from 'primereact/components/panel/Panel';
import {Button} from 'primereact/components/button/Button';
import {Openissuecomp} from './openissuecomp';
export  class SubmitTicketLandline extends Component {
  constructor()
  {
    super();
    this.state={
      openIssue:false
    }
  }
  openissue=()=>{
    this.setState({
      openIssue:true
    })
  }
  render() {
    const padding={
      padding: 10
    }
    return (
      <div>
        <Panel>
         <Button label="Open an Issue" className="Primary"  style={padding} onClick={this.openissue}/> 
        </Panel>
       
        {this.state.openIssue ? <Openissuecomp></Openissuecomp> :  null     }
      </div>
    )
  }
}