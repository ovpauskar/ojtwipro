import React, { Component } from 'react'

import {Panel} from 'primereact/components/panel/Panel';
import {Button} from 'primereact/components/button/Button';
import {SubmitTicketCellular} from '../submitissue/SubmitTicketCellular';
export  class Cq1n extends Component {
    constructor()
    {
        super();
        this.state={
          ansNoStatus:false,
          ansYesStatus:false,
        }
    }
    ansYes=()=>
    {
          this.setState({
            ansYesStatus:true,
            ansNoStatus:false
          });
    }
    ansNo=()=>
    {
          this.setState({
            ansNoStatus:true,
            ansYesStatus:false,
          });
    }
  render() {
    return (
      <div>
        <Panel>
        <strong>Have you changed your SIM card in the recent past?   </strong>
        <Button label="Yes, I changed the SIM few days back" className="ui-button-success"  name="yes" onClick={this.ansYes}/> 
        <Button label="No, I have not changed my SIM recently" className="ui-button-danger" name="no" onClick={this.ansNo}/>
        </Panel>
        {this.state.ansYesStatus ? <SubmitTicketCellular></SubmitTicketCellular> :  null     }
        {this.state.ansNoStatus ? <SubmitTicketCellular></SubmitTicketCellular> :  null     }
         
      </div>
    )
  }
}
