import React from 'react';
import { List, Image, Button } from 'semantic-ui-react';

const ProductListItem = ({ product, handleDelete }) => {
  return (
    <List.Item>
      <Image avatar src={product.imageURL} />
      <List.Content>
        <List.Header>
          {product.name}
        </List.Header>
        <List.Description as="a" href={product.link}>
          {product.link}
        </List.Description>
      </List.Content>
      <Button
        icon="delete"
        floated="right"
        onClick={() => handleDelete(product._id)}
        color="red"
      />
    </List.Item>
  );
};

export default ProductListItem;
