import React, { Component } from 'react'
import {Panel} from 'primereact/components/panel/Panel';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Button} from 'primereact/components/button/Button';
import { Link } from 'react-router-dom';
import {Cq1y} from './CellularComponents/CQ1Y';
import {Cq1n} from './CellularComponents/CQ1N'
export  class Cellular extends Component {
 
  constructor ()
  {
    super();
    this.state={
      cellular:"",
      selectedAns:"",
      ansYesStatus:false,
      ansNoStatus:false,
      issuesummary:""
    }
  }
  ansYes=()=>
  {
        this.setState({
          ansYesStatus:true,
          ansNoStatus:false,
          issuesummary:this.refs.summary.value
        });
  }
  ansNo=()=>
  {
        this.setState({
          ansNoStatus:true,
          ansYesStatus:false,
          issuesummary:this.refs.summary.value
        });
  }

  render() {
    return (
        <div>
          <Panel>
          <strong ref="CQ1">Can you please check if there was any firmware update that happened in the recent past?   </strong>
          <Button label="Yes, there was an update" className="ui-button-success"  name="yes" onClick={this.ansYes}/> 
          <Button label="No, there was no update found" className="ui-button-danger" name="no" onClick={this.ansNo}/>
          </Panel>
           {this.state.ansYesStatus ? <Cq1y summery={this.state.selectedSummary}></Cq1y> :  null     }
           {this.state.ansNoStatus ? <Cq1n></Cq1n> :  null     }
        </div>
    );
  }
}
