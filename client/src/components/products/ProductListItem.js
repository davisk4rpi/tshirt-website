import React from 'react';
import { List, Image } from 'semantic-ui-react';

const ProductListItem = ({ product }) => {
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
    </List.Item>
  );
};

export default ProductListItem;
