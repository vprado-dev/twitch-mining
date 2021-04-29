import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  padding-top: 0.5rem;
  box-sizing: border-box;
  font-family: sans-serif;

  & > a {
    position: relative;
    display: inline-block;
    padding: 10px 30px;
    text-decoration: none;
    text-transform: uppercase;
    color: #ffff;
    background: #a970ff;
    font-size: 16px;
    margin: 10px;
    letter-spacing: 2px;

    span {
      position: absolute;
      display: block;
      background: #ffff;
    }
  }

  & > a:hover {
    background: #ffff;
    color: #a970ff;
    transition: 0.5s;
    transition-delay: 1s;
    cursor: pointer;
  }

  & > a > span:nth-child(1) {
    left: 0;
    bottom: 0;
    width: 1px;
    height: 100%;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.25s;
  }

  & > a:hover > span:nth-child(1) {
    transform: scaleY(1);
    transform-origin: bottom;
    transition: transform 0.25s;
  }

  & > a > span:nth-child(2) {
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.25s;
    transition-delay: 0.25s;
  }

  & > a:hover > span:nth-child(2) {
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 0.25s;
    transition-delay: 0.25s;
  }

  & > a > span:nth-child(3) {
    right: 0;
    bottom: 0;
    width: 1px;
    height: 100%;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.25s;
    transition-delay: 0.5s;
  }

  & > a:hover > span:nth-child(3) {
    transform: scaleY(1);
    transform-origin: top;
    transition: transform 0.25s;
    transition-delay: 0.5s;
  }

  & > a > span:nth-child(4) {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s;
    transition-delay: 0.75s;
  }

  & > a:hover > span:nth-child(4) {
    transform: scaleX(1);
    transform-origin: right;
    transition: transform 0.25s;
    transition-delay: 0.75s;
  }
`;
