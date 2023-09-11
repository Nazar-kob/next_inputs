'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { BsCurrencyDollar } from 'react-icons/bs';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { AiOutlinePercentage } from 'react-icons/ai';
import Input from '../Custom/Input';
import InputDate from '../Custom/InputDate';
import Button from '../Custom/Button';
import NavBtn from '../Custom/NavBtn';
import useSteps from '@/app/states';
import { useRouter } from 'next/navigation';
import Switcher from '../Custom/Switcher';

type Inputs = {
  lender: string;
  loanAmount: number;
  startDay: string;
  typeofRate: 'fixed' | 'variable';
  interestRate: number;
  interestCapitalization: 'monthly' | 'semi-annually';
  interestPeriod: string;
  term: number;
  amortization: number;
  paymentFrequency: string;
};

type Props = {};

const FinancingForm = (props: Props) => {
  const { updateStepsStatus } = useSteps();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<Inputs>({
    defaultValues: {
      typeofRate: 'fixed',
      interestCapitalization: 'monthly',
    },
  });

  const onSubmit = (data: Inputs) => {
    console.log(data);
    if (!data) return;
    updateStepsStatus(2);
    router.push('/income-expenses');
  };

  return (
    <form
      className="h-full w-full grid grid-row-8 grid-cols-3 gap-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className="row-start-1 col-span-2"
        label="Lender"
        register={register('lender', {
          required: 'Lender is required',
          maxLength: 64,
        })}
        errorMessage={errors.lender?.message}
        placeholder="Type here"
      />
      <Input
        className="row-start-2 col-span-1"
        label="Loan Amount"
        inputType="number"
        register={register('loanAmount', {
          required: 'Loan Amount is required',
          valueAsNumber: true,
        })}
        errorMessage={errors.loanAmount?.message}
        placeholder="0"
      />
      <InputDate
        className="row-start-2 col-span-1"
        control={control}
        name="startDay"
        label="Start Day"
        errorMessage={errors.startDay?.message}
      />
      <div className="row-start-3 col-span-1">
        <Switcher
          leftName="Fixed"
          rightName="Variable"
          leftCallBack={() => setValue('typeofRate', 'fixed')}
          rightCallBack={() => setValue('typeofRate', 'variable')}
        />
      </div>
      <Input
        className="row-start-4 col-span-1"
        rightIcon={AiOutlinePercentage}
        placeholder="0"
        label="Interest Rate"
        register={register('interestRate', {
          required: 'Interest Rate is required',
          valueAsNumber: true,
        })}
        errorMessage={errors.interestRate?.message}
      />
      <div className="row-start-5 col-span-1">
        <Switcher
          leftName="Fixed"
          rightName="Semi-annually"
          leftCallBack={() => setValue('interestCapitalization', 'monthly')}
          rightCallBack={() =>
            setValue('interestCapitalization', 'semi-annually')
          }
        />
      </div>
      <Input
        className="row-start-5 col-span-1"
        label="Interest Period"
        placeholder="0"
        inputType="number"
        rightIcon={MdOutlineCalendarMonth}
        register={register('interestPeriod', {
          required: 'Interest Period is required',
          valueAsNumber: true,
          min: {
            value: 1,
            message: 'Min 1',
          },
          max: {
            value: 12,
            message: 'Max 12',
          },
        })}
        errorMessage={errors.interestPeriod?.message}
      />
      <Input
        className="row-start-6 col-span-1"
        label="Term"
        inputType="number"
        register={register('term', {
          required: 'Term is required',
          valueAsNumber: true,
        })}
        placeholder="25"
        errorMessage={errors.term?.message}
      />
      <Input
        className="row-start-6 col-span-1"
        label="Amortization"
        inputType="number"
        register={register('amortization', {
          required: 'Amortization is required',
          valueAsNumber: true,
        })}
        placeholder="25"
        errorMessage={errors.amortization?.message}
      />
      <Input
        icon={BsCurrencyDollar}
        className="row-start-6 col-span-1"
        label="Frequency"
        inputType="number"
        register={register('paymentFrequency', {
          required: 'Frequency is required',
          valueAsNumber: true,
        })}
        placeholder="0"
        errorMessage={errors.paymentFrequency?.message}
      />
      <div className="row-start-7 row-end-8 col-span-3 flex justify-end gap-4">
        <NavBtn name="back" href="unit-mix" color="light" />
        <Button name="Continue" type="submit" color="dark" />
      </div>
    </form>
  );
};

export default FinancingForm;
