export const maskFormatter = (value: string | undefined, prefix: string) => {
  if (value) {
    value = String(value);

    const integers = value.split('.')[0];
    const decimals = value.split('.')[1];

    value = `${integers.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}${
      decimals ? `,${decimals}` : ''
    }`;

    return `${prefix ? `${prefix.trim()} ` : ''}${value}`;
  }

  return value;
};

export const maskParser = (
  value: string | undefined,
  precision: number,
  prefix: string
) => {
  let negative = false;
  let maxLength = 16;

  if (value) {
    if (prefix) {
      value = value.replace(prefix, '').trim();
    }

    value = value.replace(/[^-+0-9]+/g, '');

    if (/\+/g.test(value)) {
      value = value.replace(/\+/g, '').replace(/\-/g, '');
    }

    if (/\-/g.test(value)) {
      value = `-${value.replace(/\-/g, '')}`;
      negative = true;
    }

    if (value.replace(/[^0-9]+/g, '').length > maxLength - 1) {
      value = value.substr(0, negative ? maxLength : maxLength - 1);
    }

    if (String(value).replace(/[^0-9]+/g, '').length > precision) {
      value = (Number(value) / Math.pow(10, precision)).toFixed(precision);
    }
  }

  return value;
};
