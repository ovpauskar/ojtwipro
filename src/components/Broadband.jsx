

import React, { Component } from 'react'
import {Panel} from 'primereact/components/panel/Panel';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Button} from 'primereact/components/button/Button';
import { Link } from 'react-router-dom';
import {Bq1y} from './BroadbandComponents/BQ1Y';
import {Bq1n} from './BroadbandComponents/BQ1N'
export class Broadband extends Component {
  constructor ()
  {
    super();
    this.state={
      cellular:"",
      selectedAns:"",
      ansYesStatus:false,
      ansNoStatus:false,
    }

    this.ans_collection = {};
  }
  ansYes=()=>
  {
        this.setState({
          ansYesStatus:true,
          ansNoStatus:false
        });

        let input = this.refs.q1;
        let  added = Object.assign({},this.ans_collection,input);
       
       

        //this.ans_collection.push(input);
        //console.log(added);
      
        
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
          <strong ref="q1">Can you please check if the cables that connects your device are connected properly?</strong>
          <Button label="Yes, it is well connected" className="ui-button-success"  name="yes" onClick={this.ansYes}/> 
          <Button label="No, it is not connected" className="ui-button-danger" name="no" onClick={this.ansNo}/>
          </Panel>
           {this.state.ansYesStatus ? <Bq1y pass_props_yes_q1 = {this.ans_collection}></Bq1y> :  null     }
           {this.state.ansNoStatus ? <Bq1n></Bq1n> :  null     }
        </div>
    );
  }
}

