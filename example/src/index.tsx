import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOMClient from 'react-dom/client'

import GlobalStyles from './styles/global'
import * as Layout from './styles/layout'

// CONNECTION COMPONENTS
import { Web3Modal, Web3Button, Web3NetworkSwitch } from '@web3modal/react'
import {
  ETHEREUM_CLIENT,
  WagmiConfig as WagmiProvider,
  WAGMI_CLIENT,
  WALLETCONNECT_PROJECT_KEY,
} from './blockchain/connection'
import CustomWeb3ConnectButton from './components/CustomWeb3ConnectButton'

// WAGMI
import { useAccount } from 'wagmi'
import { getConnectorLogo } from './utils'

const App = () => {
  const { connector } = useAccount()

  return (
    <>
      <Layout.Header>
        {/* LOGO */}
        <div>COMPANY</div>
        {/* NAVIGATION */}
        <div>NAVIGATION STEPS AND WHAT NOT</div>
        {/* WALLET CONNECTION */}
        <Layout.RowCentered $width="auto" $gap="0.5rem">
          <Web3Button />
          <CustomWeb3ConnectButton logoUri={getConnectorLogo(connector?.name)} />
          <Web3NetworkSwitch />
        </Layout.RowCentered>
      </Layout.Header>
      <Layout.Nav />
      <Layout.Main>
        <h1>EXAMPLE APP</h1>
        <p>CODE HERE</p>
      </Layout.Main>
      <Layout.Footer>FOOTER</Layout.Footer>
    </>
  )
}

const container = document.getElementById('root') as HTMLElement
const root = ReactDOMClient.createRoot(container)
root.render(
  <>
    <GlobalStyles />

    <WagmiProvider client={WAGMI_CLIENT}>
      <App />
    </WagmiProvider>
    <Web3Modal projectId={WALLETCONNECT_PROJECT_KEY} ethereumClient={ETHEREUM_CLIENT} enableNetworkView />
  </>
)
