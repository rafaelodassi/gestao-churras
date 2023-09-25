import { FiClock, FiMoreHorizontal, FiEdit3, FiTrash } from 'react-icons/fi';
import Masonry from 'react-masonry-css';

import { Skeleton } from 'antd';
import Image from 'next/image';
import { getLuminance } from 'polished';
import styled from 'styled-components';

import { MEDIAS_QUERY } from '../../constants';

export const ContainerEmpty = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  text-align: center;
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Sausage = styled(Image)``;

export const TitleError = styled.h2`
  margin: 0;
`;

export const Container = styled(Masonry)`
  &.masonry-grid {
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

export const Card = styled.div<{ bgColor: string }>`
  background: ${({ bgColor = '#fff' }) => bgColor};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 0;
  color: ${({ bgColor = '#fff' }) =>
    getLuminance(bgColor) > 0.6 ? 'inherit' : '#fff'};

  svg,
  span,
  .ant-collapse-content-box {
    color: ${({ bgColor = '#fff' }) =>
      getLuminance(bgColor) > 0.6 ? 'inherit' : '#fff'};
  }

  .ant-collapse-borderless {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const ContainerDate = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 15px 15px 15px;
  color: #9b9b9b;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

export const IconDate = styled(FiClock)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
`;

export const Date = styled.span`
  font-size: 12px;
  flex-grow: 1;
`;

export const IconActions = styled(FiMoreHorizontal)`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #3f3f3f;
  }
`;

export const Name = styled.h3`
  margin: 0;
  padding: 0 15px;
`;

export const Description = styled.span`
  padding: 0 15px;
`;

export const ContainerObservations = styled.div`
  padding: 0 15px;
`;

export const ContainerParticipantsList = styled.div`
  padding: 0 15px;
`;

export const ContainerParticipants = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContentParticipants = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const NameParticipant = styled.span`
  flex-grow: 1;
`;

export const BadgeContribution = styled.div`
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  padding: 2px 10px;
  color: inherit;
  flex-shrink: 0;
`;

export const Footer = styled.div`
  padding: 15px 15px 0 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TotalParticipants = styled.div`
  font-size: 12px;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const TotalContribution = styled.div`
  font-size: 12px;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const BadgeTotalParticipants = styled.div`
  border-radius: 20px;
  padding: 2px 10px;
  background: rgb(250, 173, 20);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const BadgeTotalContribution = styled.div`
  border-radius: 20px;
  padding: 2px 10px;
  background: rgb(82, 196, 26);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const ContainerActionEdit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const IconEdit = styled(FiEdit3)`
  width: 16px;
  height: 16px;
`;

export const ContainerActionRemove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const IconRemove = styled(FiTrash)`
  width: 16px;
  height: 16px;
`;

export const ContainerSkeleton = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  padding-bottom: 30px;

  ${MEDIAS_QUERY.maxMdMin} {
    flex-direction: column;
  }
`;

export const SkeletonNode = styled(Skeleton.Node)`
  &.ant-skeleton.ant-skeleton-element {
    width: 200px;
    height: 230px;

    ${MEDIAS_QUERY.maxMdMin} {
      width: 100%;
    }

    .ant-skeleton-image {
      width: 100%;
      height: 100%;
      border-radius: 8px;

      span {
        display: none;
      }
    }
  }
`;
