import { FiSearch, FiPlus } from 'react-icons/fi';

import Image from 'next/image';
import styled from 'styled-components';

import { MEDIAS_QUERY } from '../../constants';

export const Header = styled.header`
  padding: 10px 30px;
  display: flex;
  gap: 30px;
  align-items: center;
  background: #ffd836;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  ${MEDIAS_QUERY.maxMdMin} {
    flex-direction: column;
    gap: 10px;
    padding: 10px 20px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  ${MEDIAS_QUERY.maxMdMin} {
    width: 100%;
  }
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

export const ContainerActions = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 30px;

  ${MEDIAS_QUERY.maxMdMin} {
    gap: 10px;
    width: 100%;
  }
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
  flex-shrink: 0;
`;

export const TitleAdd = styled.span`
  ${MEDIAS_QUERY.maxMdMin} {
    display: none;
  }
`;
