import { FiSearch, FiPlus } from 'react-icons/fi';

import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 30px;
`;

export const Header = styled.header`
  padding: 10px 30px;
  display: flex;
  gap: 30px;
  align-items: center;
  background: #ffd836;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Beer = styled(Image)``;

export const ContainerText = styled.div``;

export const Title = styled.h1`
  font-size: 24px;
  display: block;
  margin: 0;
  font-weight: bold;
`;

export const Description = styled.span`
  font-size: 14px;
  display: block;
`;

export const ContainerActions = styled.span`
  flex-grow: 1;
  display: flex;
  gap: 30px;
`;

export const ContainerSearch = styled.div`
  position: relative;
  flex-grow: 1;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 45px;
  border: 0;
  border-radius: 24px;
  padding: 0px 20px 0 45px;
  outline: none;
  font-size: 16px;
`;

export const IconSearch = styled(FiSearch)`
  position: absolute;
  top: 10px;
  left: 12px;
  width: 24px;
  height: 24px;
`;

export const ButtonAdd = styled.button`
  height: 45px;
  border: 0;
  border-radius: 24px;
  padding: 0px 14px;
  outline: none;
  font-size: 14px;
  background: #3f3f3f;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 300ms;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: #272727;
  }
`;

export const IconAdd = styled(FiPlus)`
  width: 24px;
  height: 24px;
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: 0 30px;

  .masonry-grid {
    display: flex;
    margin-left: -30px;
    width: auto;
  }

  .masonry-grid-column {
    padding-left: 30px;
    background-clip: padding-box;
  }

  .masonry-grid-column > div {
    margin-bottom: 30px;
  }
`;

export const Card = styled.div`
  padding: 40px;
  background: #fff;
  border-radius: 8px;
`;
