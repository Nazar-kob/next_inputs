'use client';

import React from 'react';
import { Button as FBtn } from 'flowbite-react';
import Button from './Button';
import { useFormContext } from 'react-hook-form';

type Props = {
  leftName: string;
  rightName: string;
  leftCallBack: () => void;
  rightCallBack: () => void;
};

const Switcher = ({
  leftName,
  rightName,
  leftCallBack,
  rightCallBack,
}: Props) => {
  const [isDark, setIsDark] = React.useState(true);

  const handelLeftClick = () => {
    setIsDark(true);
    leftCallBack;
  };
  const handelRightClick = () => {
    setIsDark(false);
    rightCallBack;
  };

  return (
    <FBtn.Group className="w-full">
      <Button
        name={leftName}
        color={isDark ? 'dark' : 'light'}
        onClick={handelLeftClick}
      />
      <Button
        name={rightName}
        color={!isDark ? 'dark' : 'light'}
        onClick={handelRightClick}
      />
    </FBtn.Group>
  );
};

export default Switcher;
