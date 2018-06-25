import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class PreviousBill extends Component {

    constructor(props){
        super(props)
        this.state={
        prvBill:[]
    }

    }
    
    componentDidMount = () => {
        //const prvId = parseInt(this.props.match.params.id,10); //this is going to match 
        axios.get('https://demo1402891.mockable.io/productapihistory') // this is url parameter
        .then((res) =>{
            console.log(res.data)
            
            let historyData = res.data.filter(d => d.product_id == this.props.match.params.id )
          this.setState({
            prvBill:historyData

          })
          
        console.log("Filtered data",historyData)
        })
        .catch((err)=>{
          console.log(err);
        });
      }

  render() {
    const styles = {
        cardrPimary: {
            backgroundColor: '#0275d8',
            borderColor: '#0275d8'
        },
        btncolor:{
            color:'#fff'
        },
        trbackground:{
            backgroundColor: '#f20404'
        }
        
        
    }

    const rowData = this.state.prvBill.map(j => {
        return(
            <tr key={j.product_id}>
                <td>{j.month}</td>
                <td>{j.amount}</td>
                <td style={styles.trbackground}>{j.pendding_amount}</td>
                <td>{j.due_date}</td>
                
                
            </tr>
        )
    }) 
    return (
        this.state.prvBill ? 
   
        <div className="card ">
            <h3 className="card-header text-black">Product History:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <td><strong>Month</strong></td>
                        <td><strong>Amount</strong></td>
                        <td><strong>Pending Amount</strong></td>
                        <td><strong>Paid Date</strong></td>
                    </tr>
                </thead>
                <tbody>
                    
                    {rowData}
                    
                </tbody>
            </table>
            <div>
                <button className="btn btn-primary "> <Link  to={`/billdetails/${this.props.match.params.id}}`} style={styles.btncolor} > Back </Link>  </button>
            </div>
            <div className="card-footer">
                <small className="text-muted" >Last updated 3 mins ago</small>
            </div>
        </div>
        : null
    )
  }
}
