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

export function currentUserId() {
  return decodeToken().sub;
}

export function deleteToken() {
  localStorage.removeItem('painting-token');
}

export function getHeader(){
  return { headers: { Authorization: `Bearer ${getToken()}` } };
}

export function isAuthenticated() {
  return !!getToken();
}
