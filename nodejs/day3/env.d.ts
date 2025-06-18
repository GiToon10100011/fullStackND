declare namespace NodeJS {
  interface ProcessEnv {
    // MySQL Connection Configuration
    DB_HOST: string;
    DB_PORT: string;
    DB_NAME: string;
    DB_USER: string;
    DB_PASSWORD: string;
  }
}