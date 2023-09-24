import { FiUserPlus, FiMinusCircle } from 'react-icons/fi';

import { DatePicker, Button, Form, Alert, InputNumber } from 'antd';
import styled from 'styled-components';

export const FooterDrawer = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;

  :first-child,
  :last-child {
    flex-grow: 1;
  }
`;

export const Date = styled(DatePicker)`
  &.ant-picker {
    width: 100%;
  }
`;

export const ContainerColor = styled.div`
  .ant-color-picker-trigger {
    width: 100%;

    .ant-color-picker-color-block {
      width: 100%;
    }
  }
`;

export const Participants = styled.span`
  margin-bottom: 8px;
  display: block;
`;

export const ButtonAdd = styled(Button)`
  &.ant-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

export const FormItemParticipants = styled(Form.Item)`
  &.ant-form-item {
    margin: 0;
  }
`;

export const IconAdd = styled(FiUserPlus)`
  width: 18px;
  height: 18px;
`;

export const IconMinus = styled(FiMinusCircle)`
  width: 18px;
  height: 18px;
  margin-top: 10px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: rgba(0, 0, 0, 0.58);
  }
`;

export const Help = styled(Alert)`
  margin-bottom: 20px;
`;

export const Number = styled(InputNumber)`
  &.ant-input-number {
    width: 100%;
  }
`;
