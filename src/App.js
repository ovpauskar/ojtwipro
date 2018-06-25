import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Link, Switch, Route } from "react-router-dom";
import ProductPannel from "./components/abc/products";
import { button, Modal, input } from "semantic-ui-react";
//import PhoneDeatails from "./components/abc/phone-data";
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
  state = { isSignedIn: false }
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

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      //console.log("user", user.uid)
    })
  }

  render() {
    const style = {
      blue_text: { color: "blue" }, 
      OR_block: {
        display: "inline - table",}
     };

    // =================Sign-Up===================
    const SignupPopup = () => <Modal className="tiny model" trigger={<button className="ui red button">
            Sign-Up&nbsp;
            <i className="sign out alternate icon" />
            
          </button>} closeIcon>
        <div className="ui header">Sign-Up</div>
        <Modal.Actions>
          <div className="ui form">
            <div className="ui two fields">
              <div className="ui field">
                <label>First Name</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="ui field">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="ui two fields">
              <div className="ui field">
                <label>Email-id</label>
                <input type="text" placeholder="abc@de.com" />
              </div>
              <div className="ui field">
                <label>Mobile</label>
                <input type="text" placeholder="Enter Mob Number" />
              </div>
            </div>
            <div className="ui two fields">
              <div className="ui field">
                <label>Password</label>
                <input type="password" placeholder="Enter password" />
              </div>
              <div className="ui field">
                <label>Confirm Password</label>
                <input placeholder="Re-enter Password" />
              </div>
            </div>
            <button type="submit" className="ui primary button" role="button">
              Submit
            </button>
          </div>
        </Modal.Actions>
      </Modal>;
    //reset password popup
    const ResetPasswordPopup = () => <Modal className="tiny model" trigger={<a style={style.blue_text}>
            {" "}
            Forgot Password ?
          </a>} closeIcon>
        <div className="ui header">Reset Your Password</div>
        <Modal.Content>
          <p>
            Please provide email ID for password reset
          </p>
        </Modal.Content>
        <Modal.Actions>
          <div name="myForm">
            <div className="ui reset password input">
              <input placeholder="Add registered email ID..." name="Email" type="email" onSubmit={this.handleSubmit} />
            </div>
            <input type="submit" className="ui primary button" name="myForm" value="Submit" />
            <div id="submitSuccess" />
            <div id="notSuccess" />
          </div>
        </Modal.Actions>
      </Modal>;


    const styles = { pointer: { cursor: "pointer" } };
    return <div>
        {this.state.isSignedIn ? <div class="ui container">
            <div>
              <div className="ui container">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="/">
                        <i className="home icon" /> Billing Application
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        <i className="product hunt icon" /> Products
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
                        <input placeholder="Add user name" type="text" />
                        <i className="user icon" />
                      </div>
                    </div>
                    <div className="field">
                      <label>
                        <i className="lock icon" /> Password
                      </label>
                      <div className="ui left icon input">
                        <input type="password" placeholder="Add password" />
                        <i className="lock icon" />
                      </div>
                    </div>
                    <button className="ui blue submit button">
                    <i className="sign in alternate icon" /> Sign-In
                    </button>
                    <SignupPopup />
                    <ResetPasswordPopup />

                    <div className="ui horizontal divider block_or" >OR </div>
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
