import React, { useState } from 'react';
import axios from 'axios';
import FormInput from '../components/FormInput';

const CreateItem = () => {

  /*
The API Url can be obtained from this url:
https://mockapi.io/projects/66f88c4d2a683ce9730fb153#
Endpoint url is copied from the 'items' resource in this example
  */
const apiUrl="https://66f88c4d2a683ce9730fb152.mockapi.io/items"

  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(apiUrl, { name })
      .then(() => alert('Item created successfully!'))
      .catch(error => console.error('Error creating item:', error));
  };

  return (
    <div className="container">
      <h1>Create Item</h1>
      <form onSubmit={handleSubmit}>
        <FormInput label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit" className="btn btn-success">Create</button>
      </form>
    </div>
  );
};

export default CreateItem;

