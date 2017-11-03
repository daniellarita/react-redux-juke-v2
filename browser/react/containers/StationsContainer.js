import { connect } from 'react-redux';
import Stations from '../components/Stations';

const convertSongsToStations = function (songsArray) {
  const stations = {};
  songsArray.forEach(song => {
    const genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song);
  });

  return stations;
};

const mapDispatchToProps = function(state){
  return {};
}

const mapStateToProps = function (state) {
  return {
    stations: convertSongsToStations(state.songs)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
