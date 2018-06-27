import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Link, Switch, Route } from "react-router-dom";
import ProductPannel from "./components/abc/products";
import { button, Modal, input } from "semantic-ui-react";
import BillDetail from "./components/abc/bill-details";
import PreviousBill from "./components/abc/previous_bill";
import { CreateIssue } from "./components/createissue";
import { ViewIssueList } from "./components/viewissuelist";
import { ViewIssue } from "./components/viewissue";
import { Landline } from "./components/landline";
import { Cellular } from "./components/cellular";
import { Broadband } from "./components/Broadband";

firebase.initializeApp({
  apiKey: "AIzaSyC5G_reyZ3T36tziy-pDameUDVe0sofsOo",
  authDomain: "sociallogin-bf851.firebaseapp.com"
})

class App extends Component {
  state = {
    isSignedIn: false, fields: {},
    errors: {},
    fieldSignup: {},
    errorSignup: {} }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    //preventDefault();

    //FirstName
    if (!fields["FirstName"]) {
      formIsValid = false;
      errors["FirstName"] = "User name should not be empty";
    }
    //Password
    if (!fields["Password"]) {
      formIsValid = false;
      errors["Password"] = "Password should not be empty";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  // sign up validation
  handleValidationSignup() {
    let fieldSignup = this.state.fieldSignup;
    let errorSignup = {};
    let formIsValid = true;
    //preventDefault();

    //FirstName
    if (!fieldSignup["fName"]) {
      formIsValid = false;
      errorSignup["fName"] = "First name should not be empty";
    }
    //LastName
    if (!fieldSignup["lName"]) {
      formIsValid = false;
      errorSignup["lName"] = "Last name should not be empty";
    }
    //Email
    if (!fieldSignup["Email"]) {
      formIsValid = false;
      errorSignup["Email"] = "Email should not be empty";
    }
    //Mobile Number
    if (!fieldSignup["MobileNo"]) {
      formIsValid = false;
      errorSignup["MobileNo"] = "Mobile Number should not be empty";
    }
    //Password
    if (!fieldSignup["SPassword"]) {
      formIsValid = false;
      errorSignup["SPassword"] = "Password should not be empty";
    }
    //confirm password
    if (!fieldSignup["CPassword"]) {
      formIsValid = false;
      errorSignup["CPassword"] = "Confirm Password should not be empty";
    }
    //password should be same
    if (typeof fieldSignup["CPassword"] !== "undefined") {
      if (!fieldSignup["CPassword"].match(fieldSignup["SPassword"])) {
        formIsValid = false;
        errorSignup["CPassword"] = "Password should match";
      }
    }
    this.setState({ errorSignup: errorSignup });
    return formIsValid;
  }

  handleChangeSignup(field, e) {
    let fieldSignup = this.state.fieldSignup;
    fieldSignup[field] = e.target.value;
    this.setState({ fieldSignup });
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      //console.log("user", user.uid)
    })
  }

  render() {
    const style = {blue_text: { color: "blue" }};
    const styles = { pointer: { cursor: "pointer" } };
    return <div>
        {this.state.isSignedIn ? <div class="ui container">
            <div>
              <div className="ui container">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">
                        <i className="home icon" /> Billing Application
                      </Link>
                    </li>
                     <li className="nav-item">
                      <Link className="nav-link" to="/viewissue">
                        <i className="eye outline icon" /> View Issues
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/creatissue">
                        <i className="edit outline icon" /> Create Issue
                      </Link>
                    </li>
                  </ul>

                  <ul className="ui navbar-nav right floated">
                    <li className="nav-item active">
                      <a className="nav-link">
                        | Welcome, {firebase.auth().currentUser.displayName}
                      </a>
                    </li>
                    <li className="nav-item active" style={styles.pointer} onClick={() => firebase
                          .auth()
                          .signOut()}>
                      <a className="nav-link">
                        {" "}
                        Sign-Out <i className="sign out alternate icon" />
                      </a>
                    </li>
                  </ul>
                </nav>

                <Switch>
                  <Route exact path="/" component={ProductPannel} />
                  <Route exact path="/billdetails/:id" component={BillDetail} />
                  <Route exact path="/previous_bill/:id" component={PreviousBill} />
                  <Route exact path="/viewissue" component={ViewIssueList} />
                  <Route exact path="/creatissue" component={CreateIssue} />
                  <Route exact path="/Cellular" component={Cellular} />
                  <Route exact path="/Landline" component={Landline} />
                  <Route exact path="/Broadband" component={Broadband} />
                  <Route exact path="/trackissue/:id" component={ViewIssue} />
                </Switch>
              </div>
            </div>
            <span />
          </div> : <div className="ui grid container center aligned">
            <div className="row">
              <h2 className="header">OJT</h2>
            </div>
            <div className="row">
              <div className="left aligned six wide computer eight wide tablet sixteen wide mobile column">
                <div className="ui stackable segment">
                  <div className="ui form">
                    <div className="field">
                      <label>
                        <i className="user icon" />Username
                      </label>
                      <div className="ui left icon input">
                        <input placeholder="Add user name" type="text" id="FirstName" ref="FirstName" onChange={this.handleChange.bind(this, "FirstName")} value={this.state.fields["FirstName"]}/>
                        <i className="user icon" />
                      </div>
                    <p style={{ color: "red" }}>{this.state.errors["FirstName"]}</p>
                    </div>
                    <div className="field">
                      <label>
                        <i className="lock icon" /> Password
                      </label>
                      <div className="ui left icon input">
                        <input type="password" placeholder="Add password"  id="Password" onChange={this.handleChange.bind(this, "Password")} />
                        <i className="lock icon" />
                      </div>
                      <p style={{color: "red"}}>{this.state.errors["Password"]}</p>
                    </div>
                    <button className="ui blue submit button" onClick= {this.handleValidation.bind(this)}>
                      <i className="sign in alternate icon" /> Sign-In
                    </button>&nbsp;
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#sign_up">
                      <i className="sign out alternate icon" /> Sign-Up
                    </button> &nbsp;
                    <span data-toggle="modal" data-target="#forget_password" className="text-primary">
                      Forget Password ?
                    </span>
                    {/* ==================SIGN-UP====================== */}
                  <div className="modal" id="sign_up">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title">Sign Up </h4>
                          <button type="button" className="close" data-dismiss="modal">
                            &times;
                            </button>
                        </div>
                        <div className="modal-body">
                          <div className="form-group">
                            <label className>First Name:</label>
                            <input type="text" id="fName" className="form-control" className placeholder="Add here..." onChange={this.handleChangeSignup.bind(this, "fName")} />
                            <p style={{ color: "red" }}>{this.state.errorSignup["fName"]}</p>
                          </div>
                          <div className="form-group">
                            <label className>Last Name:</label>
                            <input type="text" className="form-control" id="lName" className placeholder="Add here..." onChange={this.handleChangeSignup.bind(this, "lName")} />
                            <p style={{ color: "red" }}>{this.state.errorSignup["lName"]}</p>
                          </div>
                          <div className="form-group">
                            <label className>Email ID:</label>
                            <input type="text" className="form-control" id="Email" className placeholder="Add here..." onChange={this.handleChangeSignup.bind(this, "Email")} />
                            <p style={{ color: "red" }}>{this.state.errorSignup["Email"]}</p>
                          </div>
                          <div className="form-group">
                            <label className>Mobile Number:</label>
                            <input type="text" className="form-control" id="MobileNo" className placeholder="Add here..." onChange={this.handleChangeSignup.bind(this, "MobileNo")} />
                            <p style={{ color: "red" }}>{this.state.errorSignup["MobileNo"]}</p>
                          </div>
                          <div className="form-group">
                            <label className>Enter Password:</label>
                            <input type="password" className="form-control" id="SPassword" className placeholder="Add here..." onChange={this.handleChangeSignup.bind(this, "SPassword")} />
                            <p style={{ color: "red" }}>{this.state.errorSignup["SPassword"]}</p>
                          </div>
                          <div className="form-group">
                            <label className>Confirm Password:</label>
                            <input type="password" className="form-control" id="CPassword" className placeholder="Add here..." onChange={this.handleChangeSignup.bind(this, "CPassword")} />
                            <p style={{ color: "red" }}>{this.state.errorSignup["CPassword"]}</p>
                          </div>

                          <button type="button" className="btn btn-warning" onClick={this.handleValidationSignup.bind(this)} >
                            Submit <i className="file icon" />
                          </button>
                        </div>

                        <div className="modal-footer">
                          <button type="button" className="btn btn-danger" data-dismiss="modal">
                            Close
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                    {/* =====================FORGET PASSWORD=========================== */}
                    <div className="modal" id="forget_password">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title">Forget Password</h4>
                            <button type="button" className="close" data-dismiss="modal">
                              &times;
                            </button>
                          </div>
                          <div className="modal-body">
                            <p>
                              Please provide email ID for password reset{" "}
                            </p>
                            <div className="form-group">
                              <label className>Enter Email </label>
                              <input type="text" className="form-control" className placeholder="Add here..." />
                            </div>
                            <button type="button" className="btn btn-warning">
                              Send <i className="paper plane icon" />
                            </button>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ui horizontal divider block_or">
                      OR{" "}
                    </div>
                    <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </div>;
  }
}

export default App
