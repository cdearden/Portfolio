import React from 'react';
import 'font-awesome-webpack';
import 'normalize.css';
import 'bootstrap-loader';
import './app.scss';
import { Landing, SeparatorBar, MainContent, Footer } from '../components';


const App = () => (
  <section className="container-fluid text-center landing no-padding">
    <Landing />
    <SeparatorBar />
    <MainContent />
    <Footer />
  </section>
);

export default App;
