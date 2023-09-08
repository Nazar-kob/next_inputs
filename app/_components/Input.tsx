'use client';

import classNames from 'classnames';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  register: UseFormRegisterReturn;
  errorMessage?: string;
  labelName: string;
  inputType?: string;
  placeholder?: string;
  className?: string;
};

const Input = ({
  labelName,
  errorMessage,
  register,
  inputType = 'text',
  placeholder = '',
  className,
}: Props) => {
  const isError = errorMessage ? true : false;

  const styleLabel = classNames(
    'block mb-2 text-sm font-bold text-gray-400 dark:text-white',
    { 'text-red-500': isError }
  );

  const styleInput = classNames(
    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
    {
      'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500':
        isError,
    }
  );

  const styleContent = classNames('flex flex-col gap-1', className ?? '');

  return (
    <div className={styleContent}>
      <label className={styleLabel}>{labelName}</label>
      <input
        {...register}
        type={inputType}
        id="author"
        className={styleInput}
        placeholder={placeholder}
      />
      {isError && <span className="bg-red-50">{errorMessage}</span>}
    </div>
  );
};

export { Input };