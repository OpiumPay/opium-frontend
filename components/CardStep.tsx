import React, { ReactNode } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface CardStepProps {
  stepNumber: number;
  children: ReactNode;
}

const CardStep: React.FC<CardStepProps> = ({ stepNumber, children }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Step {stepNumber}
        </Typography>
        <Typography variant="body2">{children}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardStep;
