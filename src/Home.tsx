import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the shape of the data you expect from the API
interface Item {
  id: string;
  name: string;
}

const Home: React.FC = () => {
  // Define state for the list of items
  const [items, setItems] = useState<Item[]>([]);

  // Fetch the list of items from the API when the component mounts
  useEffect(() => {
    axios.get<Item[]>('https://mockapi.io/endpoint/items')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  return (
    <div>
      <h1>Welcome to MockAPI Project</h1>
      <h2>Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
