import React, { useEffect, useState } from 'react';

import Grid from '@/layouts/Grid';
import ProductCard from '../ProductCard';

import { getListProductsLimit } from '../../services/Products';
import { useLoading } from '@/contexts/loading';

import './index.css';

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getListProductsLimit(1);
        data ? setProducts(data) : setProducts([]);
      } catch {
        alert('Error loading data, please reload the page');
      } finally {
        setLoading(false);
      }
    };

    getData();
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
                  key={item.id}
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
