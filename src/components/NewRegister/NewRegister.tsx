'use client';

import React, { useEffect } from 'react';

import {
  Col,
  Drawer,
  Form,
  Input,
  Row,
  Button,
  Collapse,
  ColorPicker,
} from 'antd';
import locale from 'antd/es/date-picker/locale/pt_BR';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setChurras,
  Churras,
  updateChurras,
} from '../../store/slices/churrasSlice';
import { setOpenDrawer } from '../../store/slices/uiSlice';
import { maskFormatter, maskParser } from '../../utils/format';

import * as Styled from './styles';

const NewRegister = () => {
  const [form] = Form.useForm<Churras>();

  const dispatch = useAppDispatch();

  const selectedChurras = useAppSelector(
    (state) => state.churras.selectedChurras
  );

  const openDrawer = useAppSelector((state) => state.ui.openDrawer);

  const isEdit = !!selectedChurras.id;

  const onCloseDrawer = () => {
    dispatch(setOpenDrawer(false));
  };

  const formatDate = 'DD/MM/YYYY HH:mm';

  const register = () => {
    form.validateFields().then((values) => {
      const valueFormatted = {
        ...values,
        users: values.users
          ? values.users.map((u) => ({ ...u, id: uuidv4() }))
          : [],
        id: isEdit ? selectedChurras.id : uuidv4(),
        color:
          typeof values.color === 'string'
            ? values.color
            : values.color.toHexString(),
        date:
          typeof values.date === 'string'
            ? values.date
            : values.date.format(formatDate),
      };

      if (isEdit) {
        dispatch(updateChurras(valueFormatted));
      } else {
        dispatch(setChurras(valueFormatted));
      }

      onCloseDrawer();
    });
  };

  useEffect(() => {
    if (openDrawer) {
      form.resetFields();
    }
  }, [openDrawer, form]);

  const participantsList = () => {
    return [
      {
        key: '1',
        label: 'Lista de participantes',
        children: (
          <>
            <Styled.Help
              message='Adicione os participantes preenchendo o nome e o valor de contribuição de cada um, variando de acordo com a preferência de cada um. Valor sugerido: R$ 20,00.'
              type='warning'
            />
            <Form.List name='users'>
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Row gutter={16} key={key}>
                      <Col span={14}>
                        <Form.Item
                          {...restField}
                          name={[name, 'name']}
                          rules={[{ required: true, message: 'Digite o nome' }]}
                        >
                          <Input placeholder='Nome' size='large' />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          {...restField}
                          name={[name, 'contribution']}
                          rules={[
                            { required: true, message: 'Escolha o valor' },
                          ]}
                          initialValue={20}
                        >
                          <Styled.Number
                            size='large'
                            formatter={(value) => maskFormatter(value, 'R$')}
                            parser={(value) => maskParser(value, 2, 'R$')}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={2}>
                        <Styled.IconMinus onClick={() => remove(name)} />
                      </Col>
                    </Row>
                  ))}
                  <Styled.FormItemParticipants>
                    <Styled.ButtonAdd type='dashed' onClick={() => add()} block>
                      <Styled.IconAdd />
                      Adicionar participante
                    </Styled.ButtonAdd>
                  </Styled.FormItemParticipants>
                </>
              )}
            </Form.List>
          </>
        ),
      },
    ];
  };

  const initialValues = () => {
    if (isEdit) {
      return {
        name: selectedChurras.name,
        color: selectedChurras.color,
        date: dayjs(selectedChurras.date, formatDate),
        users: selectedChurras.users,
        description: selectedChurras.description,
        observation: selectedChurras.observation,
      };
    }

    return {};
  };

  return (
    <Drawer
      title={`${isEdit ? 'Editar' : 'Novo'} churras`}
      placement={'right'}
      width={500}
      onClose={onCloseDrawer}
      open={openDrawer}
      footer={
        <Styled.FooterDrawer>
          <Button onClick={onCloseDrawer} size='large'>
            Cancelar
          </Button>
          <Button
            type='primary'
            size='large'
            htmlType='submit'
            onClick={register}
          >
            {isEdit ? 'Atualizar churras' : 'Cadastrar churras'}
          </Button>
        </Styled.FooterDrawer>
      }
    >
      <Form layout='vertical' form={form} initialValues={initialValues()}>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name='name'
              label='Nome do churras'
              rules={[{ required: true, message: 'Digite o nome do churras' }]}
            >
              <Input placeholder='Nome do churras' size='large' />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={18}>
            <Form.Item
              name='date'
              label='Data e hora do churras'
              rules={[
                { required: true, message: 'Escolha uma data e um horário' },
              ]}
            >
              <Styled.Date
                size='large'
                locale={locale}
                format={formatDate}
                showTime
                placeholder='Data e hora do churras'
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Styled.ContainerColor>
              <Form.Item
                name='color'
                label='Cor do card'
                initialValue='#ffffff'
              >
                <ColorPicker size='large' defaultFormat='hex' disabledAlpha />
              </Form.Item>
            </Styled.ContainerColor>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name='description' label='Descrição'>
              <Input.TextArea rows={2} placeholder='Descrição' size='large' />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name='observation' label='Observações'>
              <Input.TextArea rows={2} placeholder='Observações' size='large' />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Collapse
              items={participantsList()}
              defaultActiveKey={['1']}
              bordered={false}
            />
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default NewRegister;
