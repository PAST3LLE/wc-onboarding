import * as React from 'react'
import styled from 'styled-components'
import { useWeb3Modal } from '@web3modal/react'
import { useAccount } from 'wagmi'

import * as Layout from '../styles/layout'

const StyledButton = styled.button`
  color: white;
  font-weight: 600;
  padding: 0.5rem;
  height: 40px;
  width: 150px;
  > ${Layout.RowCentered} {
    > img {
      max-width: 23px;
    }
    > span#account-info {
      margin-left: 0.2rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  background: linear-gradient(160deg, var(--purple-bg-light) 35%, var(--purple-bg-dark) 80%);

  &:hover {
    background: linear-gradient(-200deg, var(--purple-bg-dark) 35%, var(--purple-bg-light) 80%);
  }

  transition: background 0.3s ease-in-out;
`

interface Props {
  children?: React.ReactNode
  logoUri?: string | null
}

export default function CustomWeb3ConnectButton({ logoUri }: Props) {
  const { address } = useAccount()
  const { open, isOpen } = useWeb3Modal()

  const handleClick = React.useCallback(async () => {
    open()
  }, [open])

  return (
    <StyledButton disabled={isOpen} onClick={handleClick}>
      <Layout.RowCentered $flow="nowrap">
        {logoUri && <img src={logoUri} />}
        <span id="account-info">{address || 'Connect Wallet'}</span>
      </Layout.RowCentered>
    </StyledButton>
  )
}
