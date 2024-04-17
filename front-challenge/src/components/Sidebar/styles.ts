import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #0F52BA;
  color: white;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
`;

export const Title = styled.span`
  color: white;
  font-size: 2.5rem;
  margin-right: 0.5rem;
  /* font-weight: bold; */
`;

export const SubTitle = styled.span`
  color: white;
  font-size: 1.188rem;
  /* font-weight: bold; */
`;

export const Button = styled.button`
  background-color: #fff;
  color: #333;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;

  display: flex;
  align-items:center;
  gap: 10px;
`;

export const SidebarModal = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 250px;
  background-color: #333;
  color: white;
  padding: 1rem;
`;

export const CartTitle = styled.h2`
  color: white;
`;
