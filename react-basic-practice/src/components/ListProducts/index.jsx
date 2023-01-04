import React from 'react';
import Grid from '@/layouts/Grid';
import ProductCard from '../ProductCard';

const ListProducts = (props) => {
  const { data } = props;
  return (
    <div className="list-products">
      {data.length ? (
        <Grid columns="3" rowGap="large" columnGap="large">
          {data.map((item) => (
            <ProductCard
              product={item}
            />
          ))}
        </Grid>
      ) : (
        <span className="error-no-posts">
          There are no product to show right now
        </span>
      )}
    </div>
  );
};

export default ListProducts;
