import React from 'react';
import PropTypes from 'prop-types';

function Tform({transResult}) {
  console.log("call");
  return (
    
    <form className="translated_form">
      <textarea value={transResult}/>
    </form>
  );
}

export default Tform;