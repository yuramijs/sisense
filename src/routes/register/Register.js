import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Register.scss';

import {sendData} from '../../helpers/helpers';

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  submit(event) {
    event.preventDefault();
    const data = this.state;
    const link = event.target.action;

    sendData(link, data);

    this.loginForm.reset();
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h5>{this.props.title}</h5>
        </div>
        <form
          action="/register"
          ref={el => this.loginForm = el}
          onSubmit={this.submit.bind(this)}>
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
            <button className="btn btn-primary">Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(s)(Register);
