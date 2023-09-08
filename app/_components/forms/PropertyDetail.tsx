'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../Input';

type Props = {};

type Inputs = {
  name: string;
  address: string;
  city: string;
  country: string;
  zip: string;
  closeDate: string;
};

const PropertyDetail = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    if (!data) return;
  };

  return (
    <form className="grid grid-cols-3 gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        className="col-span-3"
        register={register('name', {
          required: 'Name is required',
          maxLength: 64,
        })}
        errorMessage={errors.name?.message}
        labelName="Property name"
        placeholder="Enter property name"
      />
      <Input
        className="col-span-3"
        register={register('address', {
          required: 'Address is required',
          maxLength: 64,
        })}
        errorMessage={errors.address?.message}
        labelName="Address line"
        placeholder="Enter address line"
      />
      <Input
        register={register('country', {
          required: 'Country is required',
          maxLength: 64,
        })}
        errorMessage={errors.country?.message}
        labelName="Country"
        placeholder="Enter country"
      />
      <Input
        register={register('city', {
          required: 'City is required',
          maxLength: 64,
        })}
        errorMessage={errors.city?.message}
        labelName="City"
        placeholder="Enter city"
      />
      <Input
        register={register('zip', {
          required: 'ZIP/Postal code is required',
          maxLength: 64,
        })}
        errorMessage={errors.zip?.message}
        labelName="ZIP/Postal code"
        placeholder="Enter ZIP/Postal code"
      />
      <div className="relative max-w-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </div>
        <input  type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
        </div>
    </form>
  );
};

export default PropertyDetail;
