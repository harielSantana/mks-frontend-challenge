import Image from 'next/image';
import React from 'react';
import svg from '../../assets/svg/Vector.svg';
import * as S from './styles';

interface CartButtonProps {
  onClick: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
  return (
    <S.Button onClick={onClick}>
      <Image src={svg} width={24} alt="Carrinho" height={24} />
      Carrinho
    </S.Button>
  );
};

export default CartButton;
