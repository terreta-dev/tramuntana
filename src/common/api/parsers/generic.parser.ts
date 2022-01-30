const findValueByPath = (inObject: any, path: string): any => {
  const pathParts = path.split(".");
  let subObject = inObject;
  for (let i = 0; i < pathParts.length - 1; i++) {
    const elem = pathParts[i];
    if (!subObject || !subObject.hasOwnProperty(elem)) {
      return undefined;
    }
    subObject = subObject[elem];
  }
  return subObject[pathParts[pathParts.length - 1]];
};

const setValueByPath = (inObject: any, path: string, value: any): any => {
  let subObject = inObject;
  const pathParts = path.split(".");
  for (let i = 0; i < pathParts.length - 1; i++) {
    const elem = pathParts[i];
    if (!subObject.hasOwnProperty(elem)) {
      subObject[elem] = {};
    }
    subObject = subObject[elem];
  }

  subObject[pathParts[pathParts.length - 1]] = value;
};

/**
 * Maybe we should use Map<string,string> for fieldMap, but it requires tweaking the compiler
 * for ES5 compatibility.
 */
export const genericParse = <T = any>(apiJson: any, fieldMap: any): T => {
  return Object.keys(fieldMap).reduce((result: T, key: string) => {
    const apiValue = findValueByPath(apiJson, key);
    if (apiValue) {
      setValueByPath(result, fieldMap[key], apiValue);
    }
    return result;
  }, {} as T);
};
