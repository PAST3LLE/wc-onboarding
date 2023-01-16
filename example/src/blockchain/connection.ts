// WC STUFF
import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

// CONNECTION INFO
const WALLETCONNECT_PROJECT_KEY = '9aeefe630b790b1c7386e2ec3ed1dadb'
const AVAILABLE_CHAINS = [arbitrum, mainnet, polygon]
const { provider } = configureChains(AVAILABLE_CHAINS, [
  walletConnectProvider({ projectId: WALLETCONNECT_PROJECT_KEY }),
])
// Wagmi client
const WAGMI_CLIENT = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: 'web3Modal', chains: AVAILABLE_CHAINS }),
  provider,
})
// Web3Modal Ethereum Client
const ETHEREUM_CLIENT = new EthereumClient(WAGMI_CLIENT, AVAILABLE_CHAINS)
export { WagmiConfig, ETHEREUM_CLIENT, WAGMI_CLIENT, WALLETCONNECT_PROJECT_KEY }
