'use client';

import React from 'react';
import { Flowbite } from 'flowbite-react';

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return <Flowbite>{children}</Flowbite>;
};

export default Providers;
