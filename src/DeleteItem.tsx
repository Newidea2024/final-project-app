import React from 'react';
import axios from 'axios';

interface DeleteItemProps {
  id: string;
}

const DeleteItem: React.FC<DeleteItemProps> = ({ id }) => {
  const handleDelete = () => {
    axios.delete(`https://mockapi.io/endpoint/items/${id}`)
      .then(() => alert('Item deleted successfully!'))
      .catch(error => console.error('There was an error deleting the item!', error));
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteItem;
