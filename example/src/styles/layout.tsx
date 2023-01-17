import styled from 'styled-components'

// GENERIC
export const FlexDiv = styled.div<{ $flow?: 'wrap' | 'nowrap'; $width?: string; $gap?: string }>`
  display: flex;
  flex-wrap: ${({ $flow = 'wrap' }) => $flow};
  align-items: center;
  justify-content: center;
  gap: ${({ $gap = '0px' }) => $gap};
  width: ${({ $width = '100%' }) => $width};
`

// CENTERED
export const RowCentered = styled(FlexDiv)`
  flex-direction: row;
`
export const ColumnCentered = styled(FlexDiv)`
  flex-direction: column;
`

// SPACE BETWEEN
export const ColumnSpaceBetween = styled(ColumnCentered)`
  justify-content: space-between;
`
export const RowSpaceBetween = styled(RowCentered)`
  justify-content: space-between;
`

// APP SPECIFIC
export const AppContainer = styled(ColumnSpaceBetween)`
  height: 100%;
`
export const Header = styled(RowSpaceBetween).attrs({ as: 'header' })`
  background: var(--theme-main);
  height: 100px;
  padding: 0.5rem 1rem;
`
export const Nav = styled(ColumnCentered).attrs({ as: 'nav' })`
  background: #000;
`
export const Main = styled(ColumnCentered).attrs({ as: 'main' })`
  background: radial-gradient(#0840465c, #0000004f);
`
export const Footer = styled(RowCentered).attrs({ as: 'footer' })`
  background: var(--theme-main);
  height: 100px;
`
