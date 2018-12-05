import { HttpErrMsg } from '../../utils/HttpErrMsg';
import { decodeJwt } from '../../utils';

const extractUserAndTokenFromRequest = (req, userService) => {
  return new Promise((resolve, reject) => {
    var jwtToken = '';

    if (Object.keys(req.cookies).length == 0 && req.cookies.jwtToken) {
      reject('No token');
    }

    if (Object.keys(req.cookies).length != 0) {
      jwtToken = req.cookies.jwtToken;
    }

    if (jwtToken) {
      const decoded = decodeJwt(jwtToken);

      if (decoded) {
        userService.findById(decoded.id).then(
          user => {
            if (!user) return reject(new Error(HttpErrMsg.AUTH.NO_USER));
            req.user = user;
            req.token = jwtToken;
            console.log('request user:', req.user._id);
            resolve();
          },
          err => {
            reject(new Error(HttpErrMsg.AUTH.NOT_AUTHORIZED));
          }
        );
      } else {
        reject(new Error(HttpErrMsg.AUTH.NOT_AUTHORIZED));
      }
      req.headers['authorization'] = `Bearer ${jwtToken}`;
    } else {
      reject(new Error(HttpErrMsg.AUTH.NOT_AUTHORIZED));
    }
  });
};

function setProtectList() {
  return [
    {
      path: '/payments',
      method: ['GET']
    },
    {
      path: '/businesses',
      method: ['POST', 'PUT', 'DELETE']
    },
    {
      path: '/users/me',
      method: ['GET']
    },
    {
      path: '/users',
      method: ['PUT']
    },
    {
      path: '/users/fcmToken',
      method: ['PUT']
    },
    {
      path: '/users/temp-password',
      method: ['POST']
    },
    {
      path: '/users/push-settings',
      method: ['GET']
    },
    {
      path: '/stripe',
      method: ['POST']
    },
    {
      path: '/staffs/phone',
      method: ['GET']
    }
  ];
}

function checkProtedList(req, next) {
  return new Promise((resolve, reject) => {
    const list = setProtectList();

    for (let item of list) {
      if (req.path.includes(item.path)) {
        for (let method of item.method) {
          if (req.method == method) {
            resolve();
          }
        }
      }
    }
    reject();
  });
}

export default function(userService) {
  return (req, res, next) => {
    console.log('middleware!', req.url);
    checkProtedList(req, next).then(
      result => {
        extractUserAndTokenFromRequest(req, userService).then(
          result => {
            next();
            return;
          },
          errMsg => new Error(errMsg)
        );
      },
      err => {
        console.log('not protected!');
        next();
      }
    );
  };
}
