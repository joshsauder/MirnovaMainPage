import React, { ReactNode } from 'react';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { Card } from './Card';
import { Pricing } from '../types'
import ImageLabel from './ImageLabel';

type PostProps = Pricing;

export const PricingItem = ({ title, text, price, image }: PostProps) => (
    <PostContainer>
        <EllipsisHeading m={3} color="text">
            {title}
        </EllipsisHeading>
        {image && <CoverImage src={image} height="200px" alt={title} />}
        <Text m={3} color="text">
            {text}
        </Text>
        <ImageLabel bg="primary" color="white" position="bottom-right" round>
            { price }
        </ImageLabel>
    </PostContainer>
);


type PostContainerProps = {
    children: ReactNode;
};

const PostContainer = ({ children }: PostContainerProps) => (
    <Card p={0} pb={4}>
        {children}
    </Card>
);

const CoverImage = styled.img`
    width: 100%;
    object-fit: cover;
  `;

const EllipsisHeading = styled(Heading)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-inline-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `;