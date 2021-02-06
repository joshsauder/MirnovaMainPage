import React from 'react';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import { useScrollSection } from 'react-scroll-section';
import MouseIcon from '../components/ScrollIcon';
import Triangle from '../components/Triangle';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => {
  const aboutSection = useScrollSection('about');

  return (
    <Section.Container id="home" Background={Background}>
      <Heading
        textAlign="center"
        as="h1"
        color="primary"
        fontSize={[6, 7]}
        mb={[3, 4, 5]}
      >
        Mirnova
      </Heading>

      <Heading
        as="h2"
        color="primary"
        fontSize={[5, 6]}
        mb={[3, 5]}
        textAlign="center"
        style={centerHorizontally}
      >
      </Heading>

      <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
          <Box mx={3} fontSize={[5, 6, 6]} key="email">
            <SocialLink url="mailto:intheclearapp@gmail.com" name="email" icon={'envelope'} />
          </Box>
          <Box mx={3} fontSize={[5, 6, 6]} key="email">
            <SocialLink url="https://github.com/joshsauder" name="github" icon={'github'} />
          </Box>
      </Flex>

      <MouseIcon onClick={aboutSection.onClick} />
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      position="top-right"
    />

    <Triangle
      color="muted"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </>
);

export default LandingPage;
