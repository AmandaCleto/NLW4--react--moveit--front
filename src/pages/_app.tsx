//estrutura por volta de toda aplicacao, fixos em todas as paginas, repete em todas as paginas.

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
