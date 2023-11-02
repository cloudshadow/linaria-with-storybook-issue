import * as React from 'react';
import { styled } from '@linaria/react';
import { IButtonProps } from './type';

const buttonThemeStyles: {
  [key: string]: { backgroundColor: string; color: string; border: string };
} = {
  primary: {
    backgroundColor: '#0099ff',
    color: '#fff',
    border: '1px solid transparent',
  },
  secondary: {
    backgroundColor: '#fff',
    color: '#333',
    border: '1px solid #ccc',
  },
  danger: {
    backgroundColor: '#d32f2f',
    color: '#fff',
    border: '1px solid transparent',
  },
  orange: {
    backgroundColor: '#f38a00',
    color: '#fff',
    border: '1px solid transparent',
  },
};
const ButtonContainer = styled.button<{
  disabled: boolean;
  theme: string;
  size: string;
  fullWidth: boolean;
}>`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) =>
    props.disabled ? '#ccc' : buttonThemeStyles[props.theme].backgroundColor};
  color: ${(props) =>
    props.disabled ? '#fff' : buttonThemeStyles[props.theme].color};
  border: ${(props) =>
    props.disabled
      ? '1px solid transparent'
      : buttonThemeStyles[props.theme].border};
  border-radius: ${(props) =>
    props.size === 'large' ? '8px' : props.size === 'medium' ? '6px' : '4px'};
  padding: ${(props) =>
    props.size === 'large'
      ? '8px 16px'
      : props.size === 'medium'
      ? '6px 12px'
      : '4px 8px'};
  line-height: ${(props) =>
    props.size === 'large'
      ? '22px'
      : props.size === 'medium'
      ? '18px'
      : '14px'};
  font-size: ${(props) =>
    props.size === 'large'
      ? '20px'
      : props.size === 'medium'
      ? '16px'
      : '12px'};
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
`;

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  disabled = false,
  fullWidth = false,
  onClick,
  id,
  name,
  size = 'medium',
  theme = 'primary', // primary secondary danger
}: IButtonProps) => (
  <ButtonContainer
    type="button"
    disabled={disabled}
    onClick={onClick}
    id={id}
    name={name}
    theme={theme}
    fullWidth={fullWidth}
    size={size}
  >
    {children}
  </ButtonContainer>
);

export { Button };
