declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PORT: string;
    DATABASE_URL?: string;
    REDIS_URL?: string;
    JWT_ACCESS_SECRET: string;
    JWT_REFRESH_SECRET: string;
    API_KEY?: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_NAME: string;
    DB_USER: string;
    DB_PASSWORD: string;
  }
}
