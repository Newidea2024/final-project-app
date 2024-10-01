import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateItem = () => {
  const { id } = useParams();
  const [name, setName] = useState('');

  useEffect(() => {
    axios.get(`https://mockapi.io/endpoint/items/${id}`)
      .then(response => setName(response.data.name))
      .catch(error => console.error(error));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://mockapi.io/endpoint/items/${id}`, { name })
      .then(() => alert('Item updated successfully!'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Update Item</h1>
      <form onSubmit={handleUpdate}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateItem;
