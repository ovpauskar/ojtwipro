import React from 'react';
import ReactDom from 'react-dom';
import Telephone from './telephone';
import Broadband from './broadband';
import Mobile from './mobile';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
class ParentComp extends React.Component {
  constructor() {
    super();
    this.changeValue = this.changeValue.bind(this)
  }
  changeValue(evt) {
    if (evt.target.value === "broadband") {
      ReactDom.render(
        <Router>
          <div>
            <ChildComp changeHandler={this.changeValue} />
            <Broadband />
          </div>
        </Router>
        , document.getElementById('root')
      );
    }
    else if (evt.target.value === "telephone") {
      ReactDom.render(
        <Router>
          <div>
            <ChildComp changeHandler={this.changeValue} />
            <Telephone />
          </div>
        </Router>
        , document.getElementById('root')
      );
    }
    else if (evt.target.value === "mobile") {
      ReactDom.render(
        <Router>
          <div>
            <ChildComp changeHandler={this.changeValue} />
            <Mobile />
          </div>
        </Router>
        , document.getElementById('root')
      );
    }
  }
  render() {
    return (
      <section>
        <ChildComp changeHandler={this.changeValue} />
        
      </section>
    )
  }
}

class ChildComp extends React.Component {
  constructor() {
    super();
    this.state = {
      userband: [
        { value: '', name: '' },
        { value: 'broadband', name: 'Broadband' },
        { value: 'telephone', name: 'Telephone' },
        { value: 'mobile', name: 'Mobile' }
      ]
    }

  }

  render() {
    return (
      <div className="container">
        <select onChange={this.props.changeHandler}>
          {
            this.state.userband.map((bandName, index) => {
              return <option key={bandName.name} value={bandName.value}>{bandName.name}</option>
            })
          }

        </select>
      </div>
    )
  }
}
export default ChildComp;
ReactDom.render(<ParentComp />
  , document.getElementById('root')
);