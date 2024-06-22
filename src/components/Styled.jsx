import styled from 'styled-components';

export const StyledButton = styled.a`
  position: relative;
  min-width: 200px;
  background: #FFFFFF;
  border: 2px solid #9EC084;
  transform: translate3d(0px, 0%, 0px);
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  transition-delay: 0.6s;
  overflow: hidden;
  padding: 10px 20px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transition: all 0.6s ease;
  }

  &:before {
    background: #9EC084;
    border-radius: 50% 50% 0 0;
    transform: translateY(100%) scaleY(0.5);
  }

  &:after {
    background: #FFFFFF;
    border-radius: 0;
    transform: translateY(0) scaleY(1);
  }

  div {
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 32px;
    text-transform: uppercase;
    overflow: hidden;
  }

  span {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    z-index: 1;
    text-align: center;
    transition: transform 0.5s ease;
  }

  span:first-child {
    color: #FFFFFF;
    transform: translateY(24px);
  }

  span:last-child {
    color: #1E0F21;
    transform: translateY(0);
  }

  &:hover {
    background: #9EC084;
    transition: background 0.2s linear;
    transition-delay: 0.6s;
    color: #FFFFFF;
  }

  &:hover:after {
    border-radius: 0 0 50% 50%;
    transform: translateY(-100%) scaleY(0.5);
    transition-delay: 0;
  }

  &:hover:before {
    border-radius: 0;
    transform: translateY(0) scaleY(1);
    transition-delay: 0;
  }

  &:hover span:first-child {
    transform: translateY(0);
  }

  &:hover span:last-child {
    transform: translateY(-32px);
  }
`;
