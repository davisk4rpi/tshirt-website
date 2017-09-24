import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

const ProductGalleryItem = ({ product, handleDelete }) => {
  return (
    <Card
      image={product.imageURL}
      header={product.name}
      href={product.link}
      description={product.description}
      extra={product.price}
    />
  );
};

export default ProductGalleryItem;
