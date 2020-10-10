import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Moon, Sun } from 'react-feather';

import { getThemeFromLocalStorage, storeThemeInLocalStorage } from '@/lib/helpers';

export default function ThemeToggle() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    setIsLightMode(getThemeFromLocalStorage());

    isLightMode
      ? document.body.classList.add('lightMode')
      : document.body.classList.remove('lightMode');
  });

  const handleClick = () => {
    storeThemeInLocalStorage(!isLightMode);
    setIsLightMode(!isLightMode);
  };

  return (
    <StyledThemeToggle onClick={handleClick}>
      {isLightMode ? <Moon /> : <Sun />}
      <p>{isLightMode ? 'Dark' : 'Light'} Mode</p>
    </StyledThemeToggle>
  );
}

const StyledThemeToggle = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 0.875em;

  @media screen and (min-width: 768px) {
    font-size: 1em;
  }

  svg {
    margin-right: 10px;
    width: 20px;
  }
`;
