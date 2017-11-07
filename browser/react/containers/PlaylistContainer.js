import { connect } from 'react-redux';
import React, {Component} from 'react';
import store from '../store';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  };
}


const mapStateToProps = function (state, ownProps) {
  console.log(state, ownProps)
  return {
    selectedPlaylist: state.playlists.selected
  };
}

export default connect(mapStateToProps)(Playlist);
