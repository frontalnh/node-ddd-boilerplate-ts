export const calcAverage = (list: number[]) => {
  let sum = list.reduce((s, x) => (s += x), 0);
  return sum / list.length;
};

export const classValidator = (that, tobe): Error | null => {
  // 키의 목록이 올바른지 검사
  let properKeyList = Object.keys(tobe);
  for (let key in that) {
    if (!hasValue(key, properKeyList))
      return Error(`Invalid Key Field: ${key}`);
  }

  for (let key in tobe) {
    if (that[key]) {
      if (tobe[key].constructor.name != that[key].constructor.name) {
        console.log('not same!');

        if (that[key].constructor.name == 'Object') {
          let err = classValidator(that[key], tobe[key]);
          if (err) return err;

          return null;
        } else {
          return new Error(
            `Invalid type ${key} in ${
              tobe.constructor.name
            }. Field name ${key} must be type ${
              tobe[key].constructor.name
            }. Current Type: ${that[key].constructor.name}`
          );
        }
      }
    } else {
    }
  }

  return null;
};

export const hasValue = (item, array: Array<String>) => {
  for (let i of array) {
    if (item == i) return true;
  }
  return false;
};

export const removeNullEntity = (obj: any) => {
  for (let key in obj) {
    console.log('key::', key);
    console.log('type::', typeof obj[key]);

    switch (typeof obj[key]) {
      case 'string':
        if (obj[key].length == 0) {
          delete obj[key];
        }
        continue;

      case 'object':
        console.log('object key:', key);
        if (Object.keys(obj[key]).length == 0) delete obj[key];
        continue;

      case 'undefined':
        delete obj[key];
        continue;
      default:
        continue;
    }
  }

  console.log('result obj', obj);

  return obj;
};
