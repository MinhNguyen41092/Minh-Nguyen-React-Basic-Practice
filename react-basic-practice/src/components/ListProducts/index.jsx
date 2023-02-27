// Import react
import React, { useState } from 'react';

// Import component
import Grid from '@/layouts/Grid';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/common/Button';

import './index.css';

const ListProducts = (props) => {
  const { products, isDisabledLoadMoreBtn, setPageNumber } = props;

  const handleLoadMore = () => {
    setPageNumber(1);
  };

  return (
    <div className="list-products">
      <Grid columns="3" rowGap="large" columnGap="large">
        {products && products.map((item) => <ProductCard product={item} key={item.id} />)}
      </Grid>
      <Button
        typeButton="button"
        onClick={handleLoadMore}
        className="btn-primary btn-large"
        text="load more"
        isDisabled={isDisabledLoadMoreBtn}
      />
    </div>
  );
};

export default ListProducts;
