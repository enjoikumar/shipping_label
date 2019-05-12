import React from 'react';
import ToStep from './toStep.js';
import FromStep from './fromStep.js';
import WeightStep from './weightStep.js';
import ShippingStep from './shippingStep.js';
import ConfirmStep from './confirmStep.js';

const steps = [
  <FromStep wizardContext={'from'}  onAction={'handleNested'} />,
  <ToStep wizardContext={'to'} onAction={'handleNested'} />,
  <WeightStep wizardContext={'weight'} onAction={'handleState'} />,
  <ShippingStep wizardContext={'shippingOption'} onAction={'handleState'} />,
  <ConfirmStep wizardContext={'wizardContext'} onAction={'confirm'} />
];

export default steps;

//an array of the entire forms
