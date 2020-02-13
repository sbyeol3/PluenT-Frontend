import React from 'react';
import PropTypes from 'prop-types';
import './LectForm.css';

function LectForm({ title, image, content1, teacher, price}) {
  return (
    <div className="LectForm">
      <div className="Lect_Column">
        <LectImg image={image} alt={title} />
      </div>
      <div className="Lect_Column">
        <h2>{title}</h2>
        <div className="Lect_Contents">
          <div>{price}</div>
          <div>{content1}</div>
          <div>{teacher}</div>
        </div>
      </div>
    </div>
  );
}

function LectImg({image, alt}) {
  return (
    <img src={image} alt={alt} title={alt} className="Lect_img" />
  );
}

LectForm.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content1:PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

LectImg.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
export default LectForm;