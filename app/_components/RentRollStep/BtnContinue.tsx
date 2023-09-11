'use client';

import React from 'react';
import Button from '../Custom/Button';
import useSteps from '@/app/states';
import { useRouter } from 'next/navigation';

type Props = {};

const BtnContinue = (props: Props) => {
  const { updateStepsStatus } = useSteps();
  const router = useRouter();

  const onClick = () => {
    updateStepsStatus(1);
    router.push('/financing');
  };

  return <Button name="Continue" color="dark" onClick={onClick} />;
};

export default BtnContinue;
