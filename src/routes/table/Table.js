import React, {Component} from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Table.css'

import List from './../../components/List';

import {connect} from 'react-redux';

import getTable from '../../actions/getTable';

let skip = 20;
let view = 700;

class Table extends Component {

  //init data
  componentDidMount() {
    this.props.getTable();
  }

  //get new data
  getData = () => {
    skip += skip;
    this.props.getTable(skip);
  };

  sortByName = () => this.props.getTable(null);

  onChange = event => {
    const params = event.target.value;
    this.props.getTable(params);
  };

  handleScroll = event => {
    if(event.currentTarget.scrollTop >= view) {
      view += 1400;
      this.getData()
    }
  };


  render() {
    const {table} = this.props;

    return (
      <div className="card">
      {this.state.direction}
        <div onClick={() => this.sortByName()}>sortByName</div>
        <h2>Search</h2>
        <input type="text" onChange={this.onChange.bind(this)} />
        <br/>
        <h2>Table</h2>
        <div className={s.table__wrapper} onScroll={event => this.handleScroll(event)}>
          <table className="table">
            <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Date</th>
              <th>String</th>
              <th>Number</th>
            </tr>
            </thead>
            <tbody className={s.table__wrapper}>
              <List list={table}/>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  table: state.getTables.table,
});
const mapDispatchToProps = {
  getTable,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(Table));
