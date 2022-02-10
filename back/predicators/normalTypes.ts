const isUndefined = (value: any): value is undefined => {
  if (value === undefined || value === null) {
    return true;
  }
  return false;
};

const isString = (value: any): value is string => {
  if (typeof value === "string" || value instanceof String) {
    return true;
  }
  return false;
};

export { isUndefined, isString };
