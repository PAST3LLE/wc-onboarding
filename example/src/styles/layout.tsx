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
