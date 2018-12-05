export function bodyValidator(classInstance: any) {
  return function(req, res, next) {
    Object.keys(classInstance).forEach(key => {
      // 기본 자료형 확인
      if (
        classInstance[key].constructor.name != req.body[key].constructor.name
      ) {
      }
    });
    return next();
  };
}

export const queryValidator = typeObj => (req, res, next) => {};
