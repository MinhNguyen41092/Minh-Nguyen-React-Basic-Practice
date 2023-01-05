import React, { useEffect, useState } from 'react';

import Grid from '@/layouts/Grid';
import ProductCard from '../ProductCard';

import { getListProductsLimit } from '../../services/Products';
import { useLoading } from '@/contexts/loading';

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const getData = async () => {
      const data = await getListProductsLimit(1);
      setProducts(data);
    };
    try {
      setLoading(true);
      getData();
    } catch {
      alert('Error loading data, please reload the page');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="list-products">
      {
        loading
          ? (
            <p className="loading">Loading...</p>
          )
          : (
            <Grid columns="3" rowGap="large" columnGap="large">
              {products.map((item) => (
                <ProductCard
                  product={item}
                />
              ))}
            </Grid>
          )
      }
    </div>
  );
};

export default ListProducts;
