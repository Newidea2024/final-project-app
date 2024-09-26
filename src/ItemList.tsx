import React from 'react';
import ItemCard from './ItemCard';

// Define the shape of an item
type Item = {
  id: string;
  name: string;
};

interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
