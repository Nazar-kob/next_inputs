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
  updateStepsStatus: (curStepIndx: number) => void;
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
  updateStepsStatus: (curStepIndx: number) => {
    set((state) => {
      const updatedSteps = state.steps.map((step, idx) => {
        const nextIndex = curStepIndx + 1;
        if (idx === curStepIndx) {
          return { ...step, status: StepStatus.complete };
        }
        if (idx === nextIndex && nextIndex < state.steps.length) {
          return { ...step, status: StepStatus.current };
        }
        return step;
      });

      return { steps: updatedSteps };
    });
  },
}));

export default useSteps;
