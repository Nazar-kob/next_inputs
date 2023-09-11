'use client';
import React from 'react';
import { Button, ButtonProps } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import useSteps from '@/app/states';

type Props = {
  name: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  pushTo?: string;
} & ButtonProps;

const CustomButton = ({
  name,
  className,
  onClick,
  type = 'button',
  leftIcon,
  ...props
}: Props) => {
  const { steps, updateStepsStatus } = useSteps();
  const router = useRouter();

  const handleOnClick = () => {
    onClick && onClick();
  };

  return (
    <Button
      {...props}
      className={className}
      type={type}
      onClick={handleOnClick}
    >
      {leftIcon}
      {name}
    </Button>
  );
};

export default CustomButton;
