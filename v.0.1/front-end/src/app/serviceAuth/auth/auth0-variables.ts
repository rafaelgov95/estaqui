interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'A5wOMKRyTTNPbvCiUqdZxcxH8tTzJp_z',
  domain: 'estaqui.auth0.com',
  callbackURL: 'http://localhost:4200/dashboard'
};
