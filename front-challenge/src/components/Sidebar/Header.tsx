// Header.js
import { useState } from 'react';
import CartButton from './CardButton';
import Logo from './Logo';
import SidebarModal from './SidebarModal';
import * as S from './styles';

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <S.HeaderContainer>
      <Logo />
      <CartButton onClick={toggleSidebar} />
      <SidebarModal showSidebar={showSidebar} />
    </S.HeaderContainer>
  );
}
