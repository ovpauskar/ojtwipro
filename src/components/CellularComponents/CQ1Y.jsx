import React, { Component } from 'react'
import {Panel} from 'primereact/components/panel/Panel';
import {Button} from 'primereact/components/button/Button';
export  class Cq1y extends Component {
  render() {
    return (
      <div>
        <Panel>
         <strong>Please get in touch with your device provider to fix this issue.   </strong>
         {/* <Button label="Yes, it is well connected" className="ui-button-success"  name="yes" onClick={this.ansYes}/> 
          <Button label="No, it is not connected" className="ui-button-danger" name="no" onClick={this.ansNo}/> */}
           </Panel>
      </div>
    )
  }
}
