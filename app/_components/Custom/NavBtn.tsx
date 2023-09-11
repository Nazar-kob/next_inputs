'use client';

import Link from 'next/link';
import React from 'react';
import { Button, ButtonProps } from 'flowbite-react';

type Props = {
  name: string;
  href: string;
} & ButtonProps;

const NavBtn = ({ name, href, ...props }: Props) => {
  return (
    <Link href={href}>
      <Button {...props}>{name}</Button>
    </Link>
  );
};

export default NavBtn;
