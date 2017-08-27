export const parseAuthorizationHeader = (req) => {
    const header = req.headers.authorization;
  
    if (typeof header === 'undefined' || header === 'null') {
      return null;
    }
  
    const [, scheme, token] = (/(\w+) ([\w.-]+)/g).exec(header);
  
    return token;
  };
  
  export const orderByArgIdsOrder = ids => ("array_position(string_to_array(?, ',')::integer[], id)", ids.join(','));
  
  export const verifyToken = token => new Promise((resolve, reject) => {
    if (token !== 'authorized') {
      const error = new Error('UNAUTHORIZED');
      error.code = 401;
      reject(error);
    }
    resolve();
  });