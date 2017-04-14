import React from 'react';
import 'font-awesome-webpack';
import 'normalize.css';
// import 'bootstrap-loader';
import './base.scss';
import './layout.scss';
import './theme.scss';
import NavigationBar from '../NavigationBar/navigationBar';
import { Landing, SeparatorBar, MainContent, Footer } from '../components';


const App = () => (
  <section className="layout-container text-center">
    <NavigationBar />
    <Landing />
    <SeparatorBar />
    <MainContent />
    <Footer />
  </section>
);

export default App;
