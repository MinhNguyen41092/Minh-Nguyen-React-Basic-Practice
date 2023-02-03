// Import react
import React, { useEffect, useState } from 'react';

// Import component
import DefaultLayout from '@/layouts/DefaultLayout';
import ListProducts from '@/components/ListProducts';
import Sidebar from '@/components/SideBar';
import LoadingSpinner from '@/components/common/LoadingSpinner';

// Import context
import { useLoading } from '@/contexts/LoadingProvider';

// Import service
import { getListProducts } from '../../services/Products';

// Import file css
import './index.css';

const HomePage = () => {
  const [keyword, setKeyword] = useState('');
  const [order, setOrder] = useState('');
  const [fieldSort, setFieldSort] = useState('');
  const [valueSelected, setValueSelected] = useState('');
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getListProducts(pageNumber, keyword, fieldSort, order);
        data ? setProducts(data) : setProducts([]);
        data.length >= 6 ? setIsDisabled(false) : setIsDisabled(true);
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
        const data = await getListProducts(pageNumber, keyword, fieldSort, order);
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

  const handleSearch = (value) => {
    setKeyword(value);
  };

  const handleSort = (value) => {
    const param = value.split(' ');
    setProducts([]);
    setPageNumber(1);
    setFieldSort(param[0]);
    setOrder(param[1]);
    setValueSelected(value);
  };

  const handleLoadMore = (value) => {
    setPageNumber(pageNumber + value);
  };

  return (
    <DefaultLayout>
      <Sidebar onSearch={handleSearch} onSort={handleSort} valueSelected={valueSelected} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ListProducts
          products={products}
          isDisabledLoadMoreBtn={isDisabled}
          setPageNumber={handleLoadMore}
        />
      )}
    </DefaultLayout>
  );
};

export default HomePage;
