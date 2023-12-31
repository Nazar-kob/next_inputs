import React from 'react';
import FinancingForm from '../forms/FinancingForm';

type Props = {};

const FinancingStep = (props: Props) => {
  return (
    <div>
      <div className="text-4xl font-medium">Financing</div>
      <FinancingForm />
    </div>
  );
};

export default FinancingStep;
