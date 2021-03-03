//estrutura por volta de toda aplicacao, fixos em todas as paginas, repete em todas as paginas.

import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
  <ChallengesProvider>
    <Component {...pageProps} />
  </ChallengesProvider>
  )
}

export default MyApp
