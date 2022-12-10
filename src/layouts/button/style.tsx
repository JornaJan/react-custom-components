import styled, { css } from 'styled-components'
import theming from 'styled-theming'
import { colors } from '../../config/styled-theme'

interface ITextStyleProps {
  icon?: boolean
}

interface ICustomStyleProps {
  href?: string
  border?: number | boolean
  custom?: {
    color?: string
    background?: string
  }
}

const backgroundColor = theming('mode', {
  primary: colors.primary,
  dark: colors.dark,
  danger: colors.danger
})

const textColor = theming('mode', {
  primary: colors.primary,
  dark: colors.dark,
  danger: colors.danger
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
    font-size: 54px;
  `
})

const buttonStyles = css<ICustomStyleProps>`
  padding: 0 30px;
  ${size};
  display: inline-flex;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  line-height: 0;
  font-weight: 600;
  background-color: ${backgroundColor};
  border: 0;
  white-space: nowrap;
  cursor: pointer;
  color: ${textColor};
  span {
    color: ${textColor};
  }

  ${({ custom }) =>
    custom &&
    css`
      ${custom};
      span {
        color: ${custom.color};
      }
      &::before {
        background: ${custom.background};
      }
    `}

  ${({ border }) =>
    border &&
    css`
      color: #fff;
    `}
`

export const StyledAnchorButton = styled.a<ICustomStyleProps>`
  ${buttonStyles}
`

export const Text = styled.span<ITextStyleProps>`
  position: relative;
  ${({ icon }) =>
    icon &&
    css`
      display: flex;
      align-items: center;
      gap: 10px;
    `}
`
