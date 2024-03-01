export type StepperProps = {
    steps: ReadonlyArray<string>;
    currentIndex: number;
};

export interface CircleStepperProps {
    totalSteps: number;
    currentStep: number;
  }
  