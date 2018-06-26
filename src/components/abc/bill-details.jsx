import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PDF from 'jspdf';
import { Growl } from 'primereact/components/growl/Growl';
import jsPDF from 'jspdf'
import { autoTable, autoTableEndPosY } from 'jspdf-autotable'
export default class BillDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            billdetails: null
        }
    }
    componentDidMount = () => {
        const billId = parseInt(this.props.match.params.id, 10); //this is going to match 
        axios.get('https://my-json-server.typicode.com/kiranrkkulkarni/billing/product/' + billId) // this is url parameter
            .then((res) => {
                this.setState({
                    billdetails: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }
    handlePdf = () => {
        var doc = new jsPDF('p', 'pt');
        var res = doc.autoTableHtmlToJson(document.getElementById("basic-table"));
        var header = function (data) {
            doc.setFontSize(18);
            doc.setTextColor(40);
            doc.setFontStyle('normal');
        };
        doc.text("Bill Details", 250, 50)
        doc.autoTable(res.columns, res.data, { margin: { top: 80 } });

        doc.save("Billdetail.pdf");

        this.growl.show({ severity: 'success', summary: 'Success Message', detail: 'Download Successful' });
    }
    render() {
        const styles = {
            cardrPimary: {
                backgroundColor: '#0275d8',
                borderColor: '#0275d8'
            },
            btncolor: {
                color: '#fff'
            }
        }
        return (
            this.state.billdetails ?
                <div>
                    <div className="card">
                        <h3 className="card-header text-black">Product Detail: <span className="fa fa-phone pull-right">
                        </span> {this.state.billdetails.product_name}</h3>
                        <div className="table-responsive">
                        <table id="basic-table" className="table">
                            <thead>
                                <tr class="table-primary">
                                    <th>Customer Name</th>
                                    <th>Customer Mobile Number</th>
                                    <th>Status</th>
                                    <th>Due Date</th>
                                    <th>Total Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.billdetails.customer_name}</td>
                                    <td>{this.state.billdetails.mobile_number}</td>
                                    <td>{this.state.billdetails.status}</td>
                                    <td>{this.state.billdetails.due_bill_date}</td>
                                    <td>{this.state.billdetails.total_amount}</td>
                                </tr>


                            </tbody>
                        </table>
                        </div>
                        <div className="row" >
                         <Link className="btn btn-primary text-white  col-11 ml-4 mb-2 col-md-3 " to={`/`} style={styles.btncolor} > Back </Link>
                         <Link className="btn btn-primary text-white col-11  ml-4 mb-2 col-md-3" to={`/previous_bill/${this.state.billdetails.id}`} style={styles.btncolor}> Bill History</Link>
                        <button className="btn btn-primary text-white mb-2 col-11 ml-4 col-md-3" onClick={this.handlePdf}>Download PDF</button>
                            <Growl ref={(el) => { this.growl = el; }}></Growl>

                        </div>

                        <div className="card-footer">
                            <small className="text-muted" >Last updated 3 mins ago</small>
                        </div>
                    </div>


                </div>
                : null
        )
    }
}