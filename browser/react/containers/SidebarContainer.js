import { connect } from 'react-redux';
import React, {Component} from 'react';
import store from '../store';
import Sidebar from '../components/Sidebar';

const mapStateToProps = function (state, ownProps) {
  return {
    playlists: state.playlists.list,
  };
}

export default connect(mapStateToProps)(Sidebar);
