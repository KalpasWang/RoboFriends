import React from 'react';

const Card = ({id, name, email}) => {
  return (
    <div className="dib tc grow bg-light-green br3 pa3 ma2 bw2 shadow-5">
      <img alt={`robot${id}`} src={`https://robohash.org/${id}?set=set3&size=200x200`}></img>
      <div>
        <h2 className="f6 lh-title">{name}</h2>
        <p className="f7 lh-copy">{email}</p>
      </div>
    </div>
  );
}

export default Card;