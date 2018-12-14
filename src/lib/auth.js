export function saveToken(token) {
  localStorage.setItem('painting-token', token);
}

export function getToken() {
  return localStorage.getItem('painting-token');
}

export function decodeToken() {
  const token = getToken();
  if (!token) return {};
  const decoded = JSON.parse(atob(token.split('.')[1]));
  return decoded;
}

export function tokenUsername() {
  return decodeToken().username;
}

export function tokenUserId() {
  return decodeToken().sub;
}

export function tokenUserName() {
  return decodeToken().name;
}

export function deleteToken() {
  localStorage.removeItem('painting-token');
}

export function isAuthenticated() {
  return !!getToken();
}


export function authorizationHeader() {
  return {
    headers: { Authorization: 'Bearer ' + getToken() }
  };
}
