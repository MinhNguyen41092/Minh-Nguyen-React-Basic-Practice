import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@/layouts/Grid';
import ProductCard from '../ProductCard';

import { getListProducts } from '../../services/Products';
import { useLoading } from '@/contexts/LoadingProvider';

import './index.css';

const ListProducts = (props) => {
  const { keyword } = props;
  const [products, setProducts] = useState([]);
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getListProducts(1, keyword);
        data ? setProducts(data) : setProducts([]);
      } catch {
        alert('Error loading data, please reload the page');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [keyword]);

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
                <Link to={`/products/${item.id}`}>
                  <ProductCard key={item.id} product={item} />
                </Link>
              ))}
            </Grid>
          )
      }
    </div>
  );
};

export default ListProducts;
