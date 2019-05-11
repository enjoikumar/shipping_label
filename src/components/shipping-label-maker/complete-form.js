import React from 'react';
import ToStep from './toStep.js';
import FromStep from './fromStep.js';
import WeightStep from './weightStep.js';
import ShippingStep from './shippingStep.js';
import ConfirmStep from './confirmStep.js';

const steps = [
  <FromStep />,
  <ToStep wizardContext='toStepProp' />,
  <WeightStep />,
  <ShippingStep />,
  <ConfirmStep />
];

export default steps;
