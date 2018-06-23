import React, { Component } from 'react'
import {Panel} from 'primereact/components/panel/Panel';
import {Button} from 'primereact/components/button/Button';
import {SubmitTicketLandline} from "../submitissue/SubmitTicketLandline";
export class Bq1nn extends Component {
  constructor ()
  {
    super();
    this.state={
      cellular:"",
      selectedAns:"",
      ansYesStatus:false,
      ansNoStatus:false
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
             <strong>Can you please check if the modem shows any red light for internet service?</strong>
             <Button label="Yes, it is well connected" className="ui-button-success"  name="yes" onClick={this.ansYes}/> 
              <Button label="No, it is not connected" className="ui-button-danger" name="no" onClick={this.ansNo}/>
               </Panel>
               {this.state.ansYesStatus ? <SubmitTicketLandline></SubmitTicketLandline> :  null     }
          {this.state.ansNoStatus ? <SubmitTicketLandline></SubmitTicketLandline> :  null     }
          </div>
        )
      }
}