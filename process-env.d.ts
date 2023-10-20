declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT: string;
      HOST: string;
      DB_URL: string;
    }
  }
}
