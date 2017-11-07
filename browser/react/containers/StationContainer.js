import { connect } from 'react-redux';
import Station from '../components/Station.js';
import { convertSong } from '../utils';
import { toggleSong } from '../action-creators/player';

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  };
}


const mapStateToProps = function (state, ownProps) {
  const checkGenre = function(song){
    return song.genre === ownProps.params.genreName
  }
  let s = state.songs.filter(checkGenre).map(convertSong);
  return {
    genreName: ownProps.params.genreName,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
    songs: s,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Station);
