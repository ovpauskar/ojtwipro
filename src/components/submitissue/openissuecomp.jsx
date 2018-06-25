import React, { Component } from 'react'
import {Panel} from 'primereact/components/panel/Panel';
import {Button} from 'primereact/components/button/Button';
export  class Openissuecomp extends Component {

  render() {
    const padding={
      padding: 10
    }
    return (
      <div>
        <Panel >
         <h3>Issue has been created, will get back to you shortly</h3>  
        </Panel>
      </div>
    )
  }
}