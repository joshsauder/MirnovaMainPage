import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Landing from '../sections/Landing';
import About from '../sections/Projects';
import Projects from '../sections/About';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <Projects />
    <About />
    <Footer />
  </Layout>
);

export default IndexPage;
