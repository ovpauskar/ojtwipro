import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getPaymentStatus } from './services/getPaymentStatus';
import axios from 'axios';
import {Button} from 'primereact/components/button/Button';
import {Panel} from 'primereact/components/panel/Panel';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';     
import { IssueForm } from './issueform';   

export  class CreateIssue extends Component { 

    constructor(props) {
    super(props);
    this.state = { 
        paymentStatus:"",
        outageArea:"",
        loadForm: false

    }
    this.getPaymentStatus = new getPaymentStatus(); 
    }
    handleCheck = (data) => {
       
       this.setState({
           viewBill: data,
           modalIsOpen: true,
           slectedPdfData: null
       })
   }
   loadForm =() =>{
    this.setState({
        loadForm:true
        
      });
   }
   close =() =>{
    this.setState({
        loadForm:false
        
      });
   }
    componentDidMount = () => {
        axios.get("http://demo9727824.mockable.io/paymnetDetails")
        .then((res)=>{
            
            this.setState({
                paymentStatus: res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })

        axios.get("http://demo9727824.mockable.io/outageArea")
        .then((res)=>{
           
            this.setState({
                outageArea: res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })

    }
    render() {
    if(this.state.paymentStatus==="Payment Not Done")
    {
        return(<Panel><div><h3>Oops! It looks like your service is restricted. Please call our customer care at 1800 100 100 or visit the nearest outlet for faster resolution</h3></div></Panel>)
    }
    else if(this.state.outageArea==="TRUE")
    {
        return(
        <div><Panel>
        <strong>Oops! We found an outage at your location. Please provide the details and we will get back to you as soon as we receive an update</strong>
        <br/><br/>
        <Button label="Open Issue" className="ui-button-success"  name="yes" onClick={this.loadForm}/> 
        <Button label="close" className="ui-button-danger" name="no" onClick={this.close}/>
          
        </Panel>

        {this.state.loadForm ? <IssueForm></IssueForm> :  null     }
      </div>)
    }
    else{

        return (<div></div> )
    }
    }
}
