import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {getFormValues} from '../../helpers';

class Login extends React.Component {

  handleSubmit = async event => {
    event.preventDefault();
    const data = getFormValues(this);
    const token = await axios.post('http://localhost:3000/authenticate', data);
    localStorage.setItem('token', token.data.token);
  };

  render() {
  return (
        <div className="card">
          <div className="card-header">
            <h5>{this.props.title}</h5>
          </div>
          <form action="authenticate" method="post" onSubmit={this.handleSubmit}>
            <div className="card-body">
              <label className='label' htmlFor="Name">
                Username
                <input
                  className='input'
                  type="text"
                  name="name"
                  ref="name"
                />
              </label>
              <label className='label' htmlFor="Password">
                Password:
                <input
                  className='input'
                  name="password"
                  ref="password"
                />
              </label>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" type="submit">Log in</button>
            </div>
          </form>
        </div>
      );
    }
}


export default Login
