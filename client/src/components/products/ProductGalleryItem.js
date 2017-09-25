import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

const ProductGalleryItem = ({ product, handleDelete }) => {
  return (
    <Grid.Column mobile={12} tablet={8} computer={4}>
      <Card
        fluid
        image={product.imageURL}
        header={product.name}
        href={product.link}
        description={product.description}
        extra={`$${product.price} at Amazon.com`}
      />
    </Grid.Column>
  );
};

export default ProductGalleryItem;
