import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import {connect} from 'react-redux';

import getToken from '../../actions/getToken';

class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h5>{this.props.title}</h5>
        </div>
        <form action="authenticate" method="post">
          <div className="card-body">
            <label className={s.label} htmlFor="Name">
              Username
              <input
                className={s.input}
                type="text"
                name="name"
              />
            </label>
            <label className={s.label} htmlFor="Password">
              Password:
              <input
                className={s.input}
                name="password"
              />
            </label>
          </div>
          <div onClick={() => this.props.getToken()}>get token</div>
          {/*<div className="card-footer">*/}
            {/*<button className="btn btn-primary" type="submit">Log in</button>*/}
          {/*</div>*/}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
});
const mapDispatchToProps = {
  getToken
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(Login));
