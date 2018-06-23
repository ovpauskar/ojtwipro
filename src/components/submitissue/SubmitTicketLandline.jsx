import React, { Component } from 'react'
import {Panel} from 'primereact/components/panel/Panel';
import {Button} from 'primereact/components/button/Button';
export  class SubmitTicketLandline extends Component {
  render() {
    return (
      <div>
        <Panel>
         <Button label="Open an Issue" className="Primary"  name="yes"/> 
        </Panel>
      </div>
    )
  }
}