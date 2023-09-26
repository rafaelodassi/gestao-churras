'use client';

import React, { useEffect } from 'react';

import type { MenuProps } from 'antd';
import { Collapse, Dropdown } from 'antd';

import Sausage from '../../../public/img/sausage.png';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  getChurras,
  Churras,
  selectChurras,
  removeChurras,
  setStatus,
  setQuerySearch,
  searchChurras,
} from '../../store/slices/churrasSlice';
import { setOpenDrawer } from '../../store/slices/uiSlice';

import * as Styled from './styles';

const CardList = () => {
  const dispatch = useAppDispatch();

  const status = useAppSelector((state) => state.churras.status);
  const churras = useAppSelector((state) => state.churras.churras);

  useEffect(() => {
    dispatch(setStatus('loading'));

    setTimeout(() => {
      dispatch(setStatus('succeeded'));
      dispatch(getChurras());
    }, 1000);
  }, [dispatch]);

  const observations = (observations: Churras['observation']) => {
    return [
      {
        key: '1',
        label: 'Observações',
        children: observations,
      },
    ];
  };

  const participantsList = (users: Churras['users']) => {
    return [
      {
        key: '1',
        label: 'Lista de participantes',
        children: (
          <Styled.ContainerParticipants>
            {users.map((u) => (
              <Styled.ContentParticipants key={u.id}>
                <Styled.NameParticipant>{u.name}</Styled.NameParticipant>
                <Styled.BadgeContribution>
                  {`R$ ${u.contribution}`}{' '}
                </Styled.BadgeContribution>
              </Styled.ContentParticipants>
            ))}
          </Styled.ContainerParticipants>
        ),
      },
    ];
  };

  const items: MenuProps['items'] = [
    {
      key: 'edit',
      label: (
        <Styled.ContainerActionEdit>
          <Styled.IconEdit />
          Editar
        </Styled.ContainerActionEdit>
      ),
    },
    {
      key: 'remove',
      label: (
        <Styled.ContainerActionRemove>
          <Styled.IconRemove />
          Excluir
        </Styled.ContainerActionRemove>
      ),
    },
  ];

  const hasUsers = (users: Churras['users']) => {
    return users && Array.isArray(users) && !!users.length;
  };

  const totalParticipants = (users: Churras['users']) => {
    return hasUsers(users) ? users.length : 0;
  };

  const sumContribution = (users: Churras['users']) => {
    if (!hasUsers(users)) {
      return 0;
    }

    return users.reduce((total, user) => {
      return total + user.contribution;
    }, 0);
  };

  const onClickAction = (key: string, churras: Churras) => {
    switch (key) {
      case 'edit':
        dispatch(selectChurras(churras));
        dispatch(setOpenDrawer(true));
        break;
      case 'remove':
        dispatch(setQuerySearch(''));
        dispatch(searchChurras(''));
        dispatch(removeChurras(churras.id));
        break;
      default:
        break;
    }
  };

  if (status === 'loading') {
    return (
      <Styled.ContainerSkeleton>
        <Styled.SkeletonNode active={true} />
        <Styled.SkeletonNode active={true} />
        <Styled.SkeletonNode active={true} />
        <Styled.SkeletonNode active={true} />
        <Styled.SkeletonNode active={true} />
        <Styled.SkeletonNode active={true} />
        <Styled.SkeletonNode active={true} />
        <Styled.SkeletonNode active={true} />
      </Styled.ContainerSkeleton>
    );
  }

  if (!churras.length && status === 'succeeded') {
    return (
      <Styled.ContainerEmpty>
        <Styled.ContainerInfo>
          <Styled.Sausage src={Sausage} width={150} alt='Sausage' />
          <Styled.TitleError>
            Que pena. Nenhum churras foi encontrado!
          </Styled.TitleError>
        </Styled.ContainerInfo>
      </Styled.ContainerEmpty>
    );
  }

  return (
    <Styled.Container
      breakpointCols={{
        default: 5,
        1450: 4,
        1250: 3,
        950: 2,
        700: 1,
      }}
      className='masonry-grid'
      columnClassName='masonry-grid-column'
    >
      {churras.map((c) => (
        <Styled.Card key={c.id} bgColor={c.color as string}>
          <Styled.ContainerDate>
            <Styled.IconDate />
            <Styled.Date>{c.date}</Styled.Date>
            <Dropdown
              menu={{
                items,
                onClick: ({ key }) => onClickAction(key, c),
              }}
              trigger={['click']}
              placement='bottomRight'
            >
              <Styled.IconActions />
            </Dropdown>
          </Styled.ContainerDate>
          <Styled.Name>{c.name}</Styled.Name>
          {c.description && (
            <Styled.Description>{c.description}</Styled.Description>
          )}
          {c.observation && (
            <Styled.ContainerObservations>
              <Collapse items={observations(c.observation)} bordered={false} />
            </Styled.ContainerObservations>
          )}
          {hasUsers(c.users) && (
            <Styled.ContainerParticipantsList>
              <Collapse items={participantsList(c.users)} bordered={false} />
            </Styled.ContainerParticipantsList>
          )}
          <Styled.Footer>
            <Styled.TotalParticipants>
              <Styled.BadgeTotalParticipants>
                {totalParticipants(c.users)}
              </Styled.BadgeTotalParticipants>{' '}
              participante(s)
            </Styled.TotalParticipants>
            <Styled.TotalContribution>
              Total de{' '}
              <Styled.BadgeTotalContribution>
                R$ {sumContribution(c.users)}
              </Styled.BadgeTotalContribution>
            </Styled.TotalContribution>
          </Styled.Footer>
        </Styled.Card>
      ))}
    </Styled.Container>
  );
};

export default CardList;
