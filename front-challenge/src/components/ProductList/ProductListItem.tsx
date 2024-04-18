import { Product } from '@/types/Products';
import Image from 'next/image';
import React from 'react';
import card from '../../assets/svg/shopping-bag.svg';


interface ProductListItemProps {
  product: Product;
}

import { addToCart } from '@/store/reducers/cartReducer';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Photo = styled(Image)`
  width: 100%;
  height: auto;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f5f5f5;
  border-radius: 8px 0 0 8px;
  overflow: hidden;
  position: relative;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductDetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 12px;
`;

const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  padding: 4px;

  border-radius: 4px;
`;

const BuyButton = styled.button`
  width: 100%;

  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 0px 0px 5px 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;


const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card>
      <div>
        <ImageContainer>
          <Photo src={product.photo} alt={product.name} width={100} height={100}/>
        </ImageContainer>

        <ProductDetailContainer>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>R${product.price}</ProductPrice>
        </ProductDetailContainer>
      </div>

      <BuyButton onClick={handleAddToCart}>
        <Image src={card} alt='Comprar' width={12}/>
        <span>Comprar</span>
      </BuyButton>
    </Card>
  );
};

export default ProductListItem;
