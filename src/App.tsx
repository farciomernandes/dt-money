import React from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './global';

export function App() {
  return (
    <>
     <Header />
     <Dashboard />
     <GlobalStyle />
    </>
  );
}
