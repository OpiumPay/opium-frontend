import React, { ReactNode } from 'react';

interface CardStepProps {
  stepNumber: number;
  children: ReactNode;
}

const CardStep: React.FC<CardStepProps> = ({ stepNumber, children }) => {
  return (
    <div className='border-2 rounded border-gray-500 p-2 drop-shadow-md'>
        <h5 className='text-2xl'>
          Step {stepNumber}
        </h5>
        <div>{children}</div>
    </div>
  );
};

export default CardStep;
