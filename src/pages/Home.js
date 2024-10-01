import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from '../components/ItemList';

const Home = () => {
  /*
The API Url can be obtained from this url:
https://mockapi.io/projects/66f88c4d2a683ce9730fb153#
Endpoint url is copied from the 'items' resource in this example
  */
const apiUrl="https://66f88c4d2a683ce9730fb152.mockapi.io/items"


  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        let data = response.data
        console.log("Response from mockapi:", data);

        return setItems(data.reverse())
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h1>Items List</h1>
      <ItemList items={items} />
    </div>
  );
};

export default Home;

