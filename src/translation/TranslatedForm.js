import React from 'react';
import PropTypes from 'prop-types';

function TranslatedForm({transResult, transAudio}) {
  var audio = new Audio();
  audio.src = {transAudio};
  return (
    <form className="translated_form">
      <textarea value={transResult}/>
      <input type="button" onClick="audio.play();" value="PLAY"/>
      <input type="button" onClick="audio.pause();" value="PAUSE"/>
    </form>
  );
}

Nasa.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  center: PropTypes.string.isRequired
}

export default TranslatedForm;