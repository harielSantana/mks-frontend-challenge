import { AnimatePresence } from 'framer-motion';
import React from 'react';
import * as S from './styles';

interface SidebarModalProps {
  showSidebar: boolean;
}

const SidebarModal: React.FC<SidebarModalProps> = ({ showSidebar }) => {
  return (
    <AnimatePresence>
      {showSidebar && (
        <S.SidebarModal
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <S.CartTitle>Itens do Carrinho</S.CartTitle>
          {/* Aqui você pode adicionar os itens do carrinho */}
        </S.SidebarModal>
      )}
    </AnimatePresence>
  );
};

export default SidebarModal;
