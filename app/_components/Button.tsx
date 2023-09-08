'use client';
import classNames from 'classnames';
import React from 'react';

type Props = {
  name: string;
  type: 'button' | 'submit' | 'reset';
  ref?: React.RefObject<HTMLButtonElement>;
  className?: string;
  onClick?: () => void;
};

const Button = ({ name, type, ref, className, onClick }: Props) => {
  const styleBtn = classNames(
    'w-28 h-12 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
    className ?? ''
  );

  return (
    <button className={styleBtn} type={type} ref={ref} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
