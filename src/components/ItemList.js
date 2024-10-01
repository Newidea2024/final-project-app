import React from 'react';
import ItemCard from './ItemCard';

const ItemList = ({ items }) => {
console.log("Item List items:", items);


  return (
    <div className="item-list">
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
