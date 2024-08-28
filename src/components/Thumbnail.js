import React from 'react';

const Thumbnail = ({ id, name, image, type }) => {
  const style = `imgContainer ${type}`;

  return (
    <div className={style}>
      <div className="number">
        <small> #0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detailWrapper">
        <h3>{name}</h3>
        <small>Type: {type}</small>
      </div>
    </div>
  );
};

export default Thumbnail;
