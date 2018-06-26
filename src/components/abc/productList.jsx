import React, { Component } from 'react'
import { Panel } from 'primereact/components/panel/Panel';
import { Link } from 'react-router-dom';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



class ProductDetails extends Component {
    
  

    render() {
       
        
        return (
            <div>

                <div className="content-section implementation">
                
                    {/* Code to add panel dynamically  */}
                    <Panel header={this.props.prodata.product_name} toggleable={true} >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Phone No: </label> {this.props.prodata.mobile_number}<br />
                                    <label>Custome Name: </label> {this.props.prodata.customer_name}
                                    <br />

                                </div>
                                <div className="col-md-6">
                                    <label>Status: </label> {this.props.prodata.status}<br />
                                    <label>Bill Date: </label> {this.props.prodata.generate_bill_date}

                                </div>
                                <div>

                                </div>

                            </div>
                            <div className="row">                            
                                <Link  className="btn btn-primary ml-2 col-8 mb-1 col-md-3 text-white" to={`/billdetails/${this.props.prodata.id}`}>View bill</Link>
                                <button type="button"  className="btn btn-primary ml-2 col-8 mb-1 col-md-3" disabled> View Plan</button>
                                <button type="button"  className="btn btn-primary ml-2 col-8 col-md-3" disabled> Support</button>
                            </div>
                        </div>

                    </Panel>

                </div>
            </div>
        )
    }
}
export default ProductDetails;