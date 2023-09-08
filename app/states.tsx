import { create } from 'zustand';

export enum StepStatus {
  complete = 'complete',
  current = 'current',
  upcoming = 'upcoming',
}

interface IStep {
  name: string;
  href: string;
  status: StepStatus;
}
interface ISteps {
  steps: IStep[];
  updateStepsStatus: (curStep: IStep) => void;
}

const initSteps = [
  { name: 'Property detail', href: '/', status: StepStatus.current },
  { name: 'Unit Mix', href: '/unit-mix', status: StepStatus.upcoming },
  { name: 'Financing', href: '/financing', status: StepStatus.upcoming },
  {
    name: 'Income & Expenses',
    href: '/income-expenses',
    status: StepStatus.upcoming,
  },
];

const useSteps = create<ISteps>((set) => ({
  steps: initSteps,
  updateStepsStatus: (curStep: IStep) => {},
}));

export default useSteps;
