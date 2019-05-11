import React, {Component} from 'react';
import ToStep from './toStep.js';
import FromStep from './fromStep.js';
import WeightStep from './weightStep.js';
import ShippingStep from './shippingStep.js';
import ConfirmStep from './confirmStep.js';

const CompleteForm = [
  <ToStep />,
  <FromStep />,
  <WeightStep />,
  <ShippingStep />,
  <ConfirmStep />
];

export default CompleteForm;
