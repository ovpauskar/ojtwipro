import React, { Component } from 'react'
import {Panel} from 'primereact/components/panel/Panel';
import {Button} from 'primereact/components/button/Button';
import {Bq1nn} from './BQ1NN';
import {SubmitTicketLandline} from "../submitissue/SubmitTicketLandline";
export  class Bq1y extends Component {
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
    console.log(this.props.pass_props_yes_q1.ans_collection);
    return (
      <div>
        <Panel>
           
         <strong ref="q2">Can you please check if the modem shows any red light for internet service?</strong>
         <Button label="Yes, it shows red" className="ui-button-success"  name="yes" onClick={this.ansYes}/> 
          <Button label="No, it shows green" className="ui-button-danger" name="no" onClick={this.ansNo}/>
           </Panel>
           {this.state.ansYesStatus ? <SubmitTicketLandline></SubmitTicketLandline> :  null     }
          {this.state.ansNoStatus ? <SubmitTicketLandline></SubmitTicketLandline> :  null     }
      </div>
      
    )
  }
}
