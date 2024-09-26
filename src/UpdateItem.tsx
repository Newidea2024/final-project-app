import React, { useState, useEffect, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Define the shape of the data you expect from the API
interface Item {
  id: string;
  name: string;
}

const UpdateItem: React.FC = () => {
  // Define the type for the route parameter `id`
  const { id } = useParams<{ id: string }>();
  
  // Define state for the item name
  const [name, setName] = useState<string>('');

  // Fetch the item data from the API when the component mounts
  useEffect(() => {
    if (id) {
      axios.get<Item>(`https://mockapi.io/endpoint/items/${id}`)
        .then(response => setName(response.data.name))
        .catch(error => console.error('Error fetching the item:', error));
    }
  }, [id]);

  // Handle the form submission for updating the item
  const handleUpdate = (e: FormEvent) => {
    e.preventDefault();
    if (id) {
      axios.put(`https://mockapi.io/endpoint/items/${id}`, { name })
        .then(() => alert('Item updated successfully!'))
        .catch(error => console.error('Error updating

