import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba'

const AvatarWrapper = styled.canvas`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid ${({borderColor, borderOpacity}) => hexToRgba(borderColor, borderOpacity)};
  transition: border ${({animationTime}) => animationTime};
  ${({readOnly, borderColor}) => !readOnly && `
    &:hover {
      cursor: pointer;
      border: 1.2px solid ${hexToRgba(borderColor, 0.4)};
    }
  `}
  &:focus {
    outline: unset;
`
export {AvatarWrapper}
