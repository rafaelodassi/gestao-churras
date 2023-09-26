import { FiSearch, FiX } from 'react-icons/fi';

import styled from 'styled-components';

export const ContainerSearch = styled.div`
  position: relative;
  flex-grow: 1;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 45px;
  border: 0;
  border-radius: 24px;
  padding: 0px 45px;
  outline: none;
  font-size: 16px;
`;

export const IconSearch = styled(FiSearch)`
  position: absolute;
  top: 11px;
  left: 12px;
  width: 24px;
  height: 24px;
`;

export const IconClear = styled(FiX)`
  position: absolute;
  top: 11px;
  right: 12px;
  width: 24px;
  height: 24px;
  transition: color 0.3s;

  &:hover {
    cursor: pointer;
    color: #9b9b9b;
  }
`;
