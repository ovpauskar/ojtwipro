import React, { Component } from 'react'
import {Panel} from 'primereact/components/panel/Panel';
import {Button} from 'primereact/components/button/Button';
import {Bq1nn} from "./BQ1NN";
import {Bq1nnn} from "./BQ1NNN";
import {SubmitTicketLandline} from "../submitissue/SubmitTicketLandline"
export  class Bq1 extends Component {
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
          <div class="left">
         <strong>Can you please check if the device at your home works properly by reconnecting the cables to it?</strong>
         </div>
         <div class="right">
         <Button label="Yes, it is well connected" className="ui-button-success"  name="yes" onClick={this.ansYes}/> 
          <Button label="No, it is not connected" className="ui-button-danger" name="no" onClick={this.ansNo}/>
          </div>
          </Panel>
          {this.state.ansYesStatus ? <SubmitTicketLandline></SubmitTicketLandline> :  null     }
          {this.state.ansNoStatus ? <Bq1nn></Bq1nn> :  null     }
      </div>
    )
  }
}
