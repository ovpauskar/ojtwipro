

import React, { Component } from 'react'
import {Panel} from 'primereact/components/panel/Panel';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Button} from 'primereact/components/button/Button';
import {Link} from 'react-router-dom';
import {Lq1y} from './LandlineComponents/LQ1Y';
import {Lq1n} from './LandlineComponents/LQ1N'
export class Landline extends Component {
  
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
          <strong>Can you please check if the cables that connects your device are connected properly?  </strong>
          <Button label="Yes, it is well connected" className="ui-button-success"  name="yes" onClick={this.ansYes}/> 
          <Button label="No, it is not connected" className="ui-button-danger" name="no" onClick={this.ansNo}/>
          </Panel>
           {this.state.ansYesStatus ? <Lq1y></Lq1y> :  null     }
           {this.state.ansNoStatus ? <Lq1n></Lq1n> :  null     }
        </div>
    );
  }
}

