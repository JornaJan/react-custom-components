import styled, { css } from 'styled-components'
import theming from 'styled-theming'
import { colors } from '../../config/styled-theme'

interface CustomStyleProps {
  dark: boolean
  href: string
  border: number | boolean
  custom?: {
    color?: string
    background?: string
  }
}

interface TextStyleProps {
  icon?: boolean
}

const backgroundColor = theming('mode', {
  dark: colors.dark,
  primary: colors.primary,
  danger: colors.danger,
  community: colors.community,
  success: colors.success,
  info: colors.info,
  warning: colors.warning
})

const textColor = theming('mode', {
  primary: colors.dark,
  academy: '#fff',
  community: colors.dark,
  dark: '#777'
})

const size = theming('size', {
  small: `
      height: 45px;
      min-width: 118px;
      font-size: 16px;
  `,
  regular: `
      height: 54px;
      min-width: 160px;
      font-size: 18px;
  `,
  large: `
      height: 70px;
      min-width: 245px;
      font-size: 18px;
  `
})

const buttonStyles = css<CustomStyleProps>`
  position: relative;
  text-transform: uppercase;
  padding: 0 30px;
  ${size};
  letter-spacing: 0.08em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  line-height: 0;
  font-weight: 600;
  background-color: ${backgroundColor};
  color: ${textColor};
  border: 0;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0;
    width: 110%;
    height: 102%;
    background-color: ${backgroundColor};
    filter: brightness(1.2);
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
    transition: transform 0.4s ease, opacity 0.4s ease;
    clip-path: polygon(0 0, 100% 0%, calc(100% - 20px) 100%, 0% 100%);
  }

  &:hover {
    &::before {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  ${({ dark }) =>
    !dark &&
    css`
      span {
        color: #fff;
      }
    `}
`

export const StyledAnchorButton = styled.a<CustomStyleProps>`
  ${buttonStyles};
`

export const Text = styled.span<TextStyleProps>`
  position: relative;

  ${({ icon }) =>
    icon &&
    css`
      display: flex;
      align-items: center;
      gap: 10px;
      color: #fff;
    `}
`
