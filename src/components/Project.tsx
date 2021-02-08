import React from 'react';
import ImageLabel from './ImageLabel';
import { Flex, Image, Text } from 'rebass/styled-components';
import { Project as ProjectType } from '../types';
import { Card } from './Card';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIconDefinition } from '../utils/icon-loader';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import theme from '../theme';


type Props = ProjectType;

const Project = ({
  title,
  description,
  icon,
  caption,
}: Props) => {
  const iconDefinition = getIconDefinition(icon as IconName);
  if (!iconDefinition) {
    console.warn(`The icon "${icon}" was not properly loaded ...`);
    return null;
  }

  return (
    <Card p={0}>
      <Flex style={{ height: CARD_HEIGHT }}>
        <TextContainer>
          <span>
            <Title my={2} pb={1} color="text">
              {title}
            </Title>
          </span>
          <Text width={[1]} style={{ overflow: 'auto' }} color="text">
            {description}
          </Text>
        </TextContainer>
  
        <ImageContainer>
          <ProjectImage>
            <FontAwesomeIcon icon={iconDefinition} title={icon} size="6x" color={theme.colors.secondary}/>
          </ProjectImage>
          <ProjectTag>
            <ImageLabel bg="primary" color="white" position="bottom-right" round>
              {caption}
            </ImageLabel>
          </ProjectTag>
        </ImageContainer>
      </Flex>
    </Card>
  );
}

const CARD_HEIGHT = '200px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${({ theme }) => theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const ProjectImage = styled.div`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT}
  );

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} + (${CARD_HEIGHT} / 4));
  }
`;

export default Project;
