import React, { Component } from 'react'
import {Panel} from 'primereact/components/panel/Panel';
import {Button} from 'primereact/components/button/Button';
import {Lq1nnn} from "./LQ1NNN";
import {SubmitTicketLandline} from "../submitissue/SubmitTicketLandline"
export  class Lq1nn extends Component {
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
         <strong ref="q1">Can you please check if the device at your home works properly by reconnecting the cable to it?</strong>
         </div>
         <div class="right">
         <Button label="Yes, it is well connected" className="ui-button-success"  name="yes" onClick={this.ansYes}/> 
          <Button label="No, it is not connected" className="ui-button-danger" name="no" onClick={this.ansNo}/>
          </div>
          </Panel>
          {this.state.ansYesStatus ? <SubmitTicketLandline></SubmitTicketLandline> :  null     }
          {this.state.ansNoStatus ? <Lq1nnn></Lq1nnn> :  null     }
      </div>
    )
  }
}
