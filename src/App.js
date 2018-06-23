import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Link, Switch, Route } from "react-router-dom";
import ProductPannel from "./components/abc/products";
import PhoneDeatails from "./components/abc/phone-data";
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
      console.log("user", user.uid)
    })
  }

  render() {
    const styles = { pointer: { cursor: "pointer" } };
    return <div>
        {this.state.isSignedIn ? <div class="ui container">
            <div>
              <div className="ui container">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="/">
                        Billing Application
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Products
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/viewissue">
                        View Issues
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/creatissue">
                        Create Issue
                      </a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                      | Welcome,  {firebase.auth().currentUser.displayName}
                      </a>
                    </li>
                    <li className="nav-item active" style={styles.pointer} onClick={() => firebase
                          .auth()
                          .signOut()}> 
                      <a className="nav-link">  LOGOUT</a>
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
            <span>
              {/* <div>Signed In!</div>
              <button onClick={() => firebase.auth().signOut()}>
                Sign out!
              </button>
              <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
              <img alt="profile picture" src={firebase.auth().currentUser.photoURL} /> */}
            </span>
          </div> : <div className="ui grid container center aligned">
            {" "}
            // =======================================================================
            <div className="row">
              <h2 className="header">OJT</h2>
            </div>
            <div className="row">
              <div className="left aligned six wide computer eight wide tablet sixteen wide mobile column">
                <div className="ui stackable segment">
                  <div className="ui form">
                    <h2>Login</h2>
                    <div className="field">
                      <label>Username</label>
                      <div className="ui left icon input">
                        <input placeholder="Add user name" type="text" />
                        <i className="user icon" />
                      </div>
                    </div>
                    <div className="field">
                      <label>Password</label>
                      <div className="ui left icon input">
                        <input type="password" placeholder="Add password" />
                        <i className="lock icon" />
                      </div>
                    </div>
                    <button className="ui blue submit button">Login</button>

                    <div className="ui horizontal divider">OR </div>
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
