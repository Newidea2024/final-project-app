import React from 'react';
import { Link } from 'react-router-dom';
import DeleteItem from './DeleteItem';

// Define the shape of an item
type Item = {
  id: string;
  name: string;
};

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <Link to={`/update/${item.id}`} className="btn btn-primary mr-2">Edit</Link>
        {/* Pass the id to the DeleteItem component for deletion */}
        <DeleteItem id={item.id} />
      </div>
    </div>
  );
};

export default ItemCard;

