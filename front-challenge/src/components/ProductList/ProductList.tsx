import { Product } from '@/types/Products';
import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import ProductListItem from './ProductListItem';

const fetchProducts = async (): Promise<{ products: Product[] }> => {
  const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC');
  if (!response.ok) {
    throw new Error('Falha ao buscar produtos');
  }
  return response.json();
};

const ProductList: React.FC = () => {
  const { data, isLoading, error } = useQuery<{ products: Product[] }>('products', fetchProducts);

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Ocorreu um erro: {(error as Error).message}</div>;

  return (
    <Container>
      <h2>Produtos</h2>
      <ProductListContainer>
        {data?.products.map(product => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </ProductListContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

export default ProductList;
