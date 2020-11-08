import React from 'react';
import Layout from './src/components/Layout';
import { OrderProvider } from './src/components/orderContext';
import './src/styles/red.css';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
export function wrapRootElement({ element }) {
  return <OrderProvider>{element}</OrderProvider>;
}
