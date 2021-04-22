export const validate = (value: string): string => {
  const trimmedValue = value.trim();
  let error = '';

  if (typeof trimmedValue !== 'undefined' && trimmedValue === '') {
    error = 'Field is empty';
  } else if (trimmedValue && trimmedValue.length < 2) {
    error = 'Needs 2 or more chars';
  }

  return error;
};
