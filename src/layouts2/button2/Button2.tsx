import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { StyledAnchorButton, Text } from './style'

interface Props {
  children?: ReactNode
  dark?: boolean
  icon?: string
  path?:
    | string
    | {
        page?: string
        subpage?: string
        id?: string
        query?: string | { path: string }
      }
  theme?: string
  size?: 'small' | 'regular' | 'large'
  border?: number | boolean
  custom?: {
    color?: string
    background?: string
  }
  className?: string
  [x: string]: unknown
}

const Button = ({
  children,
  dark = false,
  path,
  icon,
  internal,
  theme = 'primary',
  size = 'regular',
  border = false,
  custom,
  className,
  ...rest
}: Props): JSX.Element => {
  return (
    <ThemeProvider theme={{ mode: theme, size }}>
      <StyledAnchorButton
        href={path as string}
        dark={dark}
        border={border}
        custom={custom}
        className={className}
        {...rest}
      >
        <Text>{children} </Text>
      </StyledAnchorButton>
    </ThemeProvider>
  )
}

export default Button
