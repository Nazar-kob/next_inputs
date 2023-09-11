'use client';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Datepicker, Label, TextInput, TextInputProps } from 'flowbite-react';

type Props = {
  register: UseFormRegisterReturn;
  errorMessage?: string;
  label: string;
  inputType?: string;
  placeholder?: string;
  className?: string;
  isRequired?: boolean;
  isDatePk?: boolean;
} & TextInputProps;

const Input = ({
  label,
  errorMessage,
  register,
  inputType = 'text',
  placeholder = '',
  className,
  isRequired = false,
  ...props
}: Props) => {
  const isError = errorMessage ? true : false;

  const inputColor = isError ? 'failure' : '';

  return (
    <div className={className}>
      <Label value={label} color={inputColor} className="dark:text-white" />
      <TextInput
        {...props}
        color={inputColor}
        {...register}
        type={inputType}
        placeholder={placeholder}
        helperText={isError && errorMessage}
        required={isRequired}
      />
    </div>
  );
};

export default Input;
