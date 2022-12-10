import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { StyledAnchorButton, Text } from './style'

interface Props {
  children?: ReactNode
  theme?: string
  custom?: {
    color?: string
    background?: string
  }
  size?: 'small' | 'regular' | 'large'
  border?: number | boolean
  className?: string
  [x: string]: unknown
}

const Button = ({
  children,
  theme = 'primary',
  size = 'regular',
  border = 0,
  custom,
  className,
  ...reset
}: Props): JSX.Element => (
  <ThemeProvider theme={{ mode: theme, size }}>
    <>
      <StyledAnchorButton
        border={border}
        custom={custom}
        className={className}
        {...reset}
      >
        <Text>{children}</Text>
      </StyledAnchorButton>
    </>
  </ThemeProvider>
)

export default Button
