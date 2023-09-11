'use client';

import classNames from 'classnames';
import React from 'react';
import { Control, Controller } from 'react-hook-form';

type Props = {
  name: string;
  control: Control<any>;
  errorMessage?: string;
  className?: string;
  label: string;
};

const InputDate = ({
  name,
  control,
  errorMessage,
  className,
  label,
}: Props) => {
  const isError = errorMessage ? true : false;

  const styleLabel = classNames('block  text-sm font-medium  dark:text-white', {
    'text-red-700': isError,
  });

  const styleContent = classNames('flex flex-col gap-1', className ?? '');

  return (
    <div className={styleContent}>
      <label className={styleLabel}>{label}</label>
      <div className="w-full relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <Controller
          render={({ field }) => (
            <input
              onChange={(e) => field.onChange(e.target.value)}
              type="date"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          )}
          name={name}
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Enter date',
            },
          }}
        />
      </div>
      {errorMessage && (
        <span className="mt-2 text-sm text-red-600 dark:text-red-500">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default InputDate;
