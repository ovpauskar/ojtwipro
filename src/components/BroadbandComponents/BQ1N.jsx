import React, { Component } from 'react'
import {Bq1ny} from "./BQ1NY";
import {Bq1nn} from "./BQ1NN";
import {Panel} from 'primereact/components/panel/Panel';
import {Button} from 'primereact/components/button/Button';
export  class Bq1n extends Component {
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
         <strong>Does it work after connecting the cable?</strong>
         <Button label="Yes, it works" className="ui-button-success"  name="yes" onClick={this.ansYes}/> 
          <Button label="No, it is still not working" className="ui-button-danger" name="no" onClick={this.ansNo}/>
          </Panel>
          {this.state.ansYesStatus ? <Bq1ny></Bq1ny> :  null     }
           {this.state.ansNoStatus ? <Bq1nn></Bq1nn> :  null     }
      </div>
    )
  }
}
