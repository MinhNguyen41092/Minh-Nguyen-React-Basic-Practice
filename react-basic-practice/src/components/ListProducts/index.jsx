import React, { useEffect, useState } from 'react';
import Grid from '@/layouts/Grid';
import ProductCard from '../ProductCard';
import { getListProductsLimit } from '../../services/Products';
import './index.css';

const ListProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getListProductsLimit(1);
      setProducts(data);
    };
    getData();
  }, []);

  return (
    <div className="list-products">
      {products.length ? (
        <Grid columns="3" rowGap="large" columnGap="large">
          {products.map((item) => (
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
