import React, { useState, FormEvent } from 'react';
import axios from 'axios';

const CreateItem: React.FC = () => {
  // Define the state for the item name
  const [name, setName] = useState<string>('');

  // Handle the form submission for creating a new item
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios.post('https://mockapi.io/endpoint/items', { name })
      .then(() => alert('Item created successfully!'))
      .catch(error => console.error('Error creating item:', error));
  };

  return (
    <div>
      <h1>Create Item</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item Name"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateItem;
