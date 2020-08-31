import React, { Component } from 'react';
// import './ListItem.css';

class ListItem extends Component {
  render() {
    const {
      test_id,
      name
    } = this.props;

    return (
      <div >
        <div >{test_id}</div>
        <div >{name}</div>
      </div>
    );
  }
}

export default ListItem;