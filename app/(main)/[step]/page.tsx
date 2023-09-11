import Congratulations from '@/app/_components/Congratulations';
import Financing from '@/app/_components/FinancingStep/Financing';
import RentRoll from '@/app/_components/RentRollStep/RentRoll';
import { redirect } from 'next/navigation';

export default function Page({ params }: { params: { step: string } }) {
  const curStep = params.step;
  const isNotCurStep = !['unit-mix', 'financing', 'income-expenses'].includes(
    curStep
  );

  if (isNotCurStep) {
    return redirect('/');
  }

  return (
    <div className="h-full w-full">
      {curStep === 'unit-mix' && <RentRoll />}
      {curStep === 'financing' && <Financing />}
      {curStep === 'income-expenses' && <Congratulations />}
    </div>
  );
}
