
import '../styles/globals.css'
import Head from "next/head";
import Layout from '../components/Layout';
import { SSRProvider } from 'react-bootstrap';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return <>
  
  
  <SSRProvider>
  <Layout>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous" />
  
  <Component {...pageProps} />
  </Layout>
  </SSRProvider>
 
  </>
}
