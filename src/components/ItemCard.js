import React from 'react';
import { Link } from 'react-router-dom';
import DeleteItem from '../DeleteItem';

const ItemCard = ({ item }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <Link to={`/update/${item.id}`} className="btn btn-primary mr-2">Edit</Link>
        <DeleteItem id={item.id} />
      </div>
    </div>
  );
};

export default ItemCard;
