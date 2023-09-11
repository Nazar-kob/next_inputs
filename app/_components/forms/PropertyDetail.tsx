'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import useSteps from '@/app/states';

import Button from '../Custom/Button';
import InputDate from '../Custom/InputDate';
import Input from '../Custom/Input';

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
  const { updateStepsStatus } = useSteps();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    if (!data) return;
    updateStepsStatus(0);
    router.push('/unit-mix');
  };

  return (
    <form
      className="grid grid-cols-3 grid-rows-6 gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className="col-span-3"
        register={register('name', {
          required: 'Name is required',
          maxLength: 64,
        })}
        errorMessage={errors.name?.message}
        label="Property name"
        placeholder="Enter property name"
      />
      <Input
        className="col-span-3"
        register={register('address', {
          required: 'Address is required',
          maxLength: 64,
        })}
        errorMessage={errors.address?.message}
        label="Address line"
        placeholder="Enter address line"
      />
      <Input
        register={register('country', {
          required: 'Country is required',
          maxLength: 64,
        })}
        errorMessage={errors.country?.message}
        label="Country"
        placeholder="Enter country"
      />
      <Input
        register={register('city', {
          required: 'City is required',
          maxLength: 64,
        })}
        errorMessage={errors.city?.message}
        label="City"
        placeholder="Enter city"
      />
      <Input
        register={register('zip', {
          required: 'ZIP/Postal code is required',
          maxLength: 10,
        })}
        errorMessage={errors.zip?.message}
        label="ZIP/Postal code"
        placeholder="Enter ZIP/Postal code"
      />
      <InputDate
        className="col-span-3"
        name="closeDate"
        control={control}
        errorMessage={errors.closeDate?.message}
        label="Close date"
      />

      <div className="col-start-3 row-start-6 flex justify-end items-center">
        <Button name="Continue" type="submit" color="dark" />
      </div>
    </form>
  );
};

export default PropertyDetail;
