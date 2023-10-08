import { formContextStateType, formStateType } from '../@types';

// default form State
export const defaultFormState: formStateType = {
  isPreFillingForm: false,
  isSubmittingForm: false,
  submitionError: false,
  hasError: true,
  error: null,
};

// current state of the form
export const fromContextInitialState: Record<string, formContextStateType> = {};

// initial state of every form
export const singleFormInitialState: formContextStateType = {
  state: defaultFormState,
  values: {},
  errors: {},
  touchedErrors: {},
};
