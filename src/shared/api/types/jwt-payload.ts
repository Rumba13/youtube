export type JwtPayload = {
  username: string;
  sub: string;
  icon: string;
  [key: string]: unknown;
};
