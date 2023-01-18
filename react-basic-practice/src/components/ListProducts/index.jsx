// import react
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import component
import Grid from '@/layouts/Grid';
import ProductCard from '../ProductCard';
import Button from '../common/Button';

// import context
import { useLoading } from '@/contexts/LoadingProvider';

// import service
import { getListProducts } from '../../services/Products';

import './index.css';

const ListProducts = (props) => {
  const { fieldSort, order, keyword } = props;
  const [products, setProducts] = useState([]);
  const { loading, setLoading } = useLoading();
  const [pageNumber, setPageNumber] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getListProducts(pageNumber, keyword, fieldSort, order);
        data ? setProducts(data) : setProducts([]);
      } catch {
        alert('Error loading data, please reload the page');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [keyword, fieldSort, order]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getListProducts(pageNumber);
        const newData = [...products, data];

        data ? setProducts(newData.flat()) : setProducts([]);
        data.length >= 6 ? setIsDisabled(false) : setIsDisabled(true);
      } catch {
        alert('Error loading data, please reload the page');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [pageNumber]);

  const handleLoadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div className="list-products">
      {
        loading
          ? (
            <p className="loading">Loading...</p>
          )
          : (
            <Grid columns="3" rowGap="large" columnGap="large">
              {products && products.map((item) => (
                <Link to={`/products/${item.id}`} key={item.id}>
                  <ProductCard product={item} />
                </Link>
              ))}
            </Grid>
          )
      }
      <Button
        type="button"
        onClick={handleLoadMore}
        className="btn-primary btn-large"
        text="load more"
        status={isDisabled}
      />
    </div>
  );
};

export default ListProducts;
