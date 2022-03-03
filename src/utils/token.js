import { TOKEN } from './constants';

export function setToken(token){
  localStorage.setItem(TOKEN, token);
};

export function getToken() {
  localStorage.getItem(TOKEN)
};
