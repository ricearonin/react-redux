import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ songDetail }) => {
  if (!songDetail) {
    return <div>Select a song!</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {songDetail.title}
        <br />
        Duration: {songDetail.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { songDetail: state.selectedSong }; //refer to reducers to find correct prop
};

export default connect(mapStateToProps)(SongDetail);
