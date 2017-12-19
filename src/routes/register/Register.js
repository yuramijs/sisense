import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Register.scss';

import {sendData, getFormValues} from '../../helpers';

class Register extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    const data = getFormValues(this);
    const link = 'http://localhost:3000/register';
    sendData(link, data);

    this.loginForm.reset();
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h5>{this.props.title}</h5>
        </div>
      
        <form
          method="post"
          ref={el => this.loginForm = el}
          onSubmit={this.handleSubmit}>
          <div className="card-body">
            <label
              className={s.register__form__label}
              htmlFor="name">
              Name
            </label>
            <input
              ref="name"
              name="name"
              className="form-control"
            />
            <label
              className={s.register__form__label}
              htmlFor="password">
              Password
            </label>
            <input
              ref="password"
              name="password"
              className="form-control"
              type="password"
            />
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(s)(Register);
