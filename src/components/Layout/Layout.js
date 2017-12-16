import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';

import coreUI from './../../../scss/style.scss';
import FontAwesome from './../../../node_modules/font-awesome/scss/font-awesome.scss';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className="app">
        <div className="app-body">
          <main className="main">
            <div className="container-fluid">
              <div className="wrapper">
                {this.props.children}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default withStyles(normalizeCss, s, coreUI, FontAwesome)(Layout);
