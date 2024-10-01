import React from 'react';
import axios from 'axios';

const DeleteItem = ({ id }) => {
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
