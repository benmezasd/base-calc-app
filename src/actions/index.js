// action types
export const UPDATE_VALUE = 'UPDATE_VALUE'
export const ZERO_VALUE = 'ZERO_VALUE';
export const DELETE_VALUE = 'DELETE_VALUE';
export const UPDATE_BASE = 'UPDATE_BASE';

export const updateValue = (value) => ({
  type: UPDATE_VALUE,
  value
})

export const zeroValue = () => ({
  type: ZERO_VALUE,
  value: 0
})

export const deleteValue = (value) => ({
  type: DELETE_VALUE,
  value
})

export const updateBase = (base,validLabels) => ({
  type: UPDATE_BASE,
  base,
  validLabels
})