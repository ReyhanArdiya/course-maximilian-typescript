import "typescript";

// TODO make snippet
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        MAP_API_KEY: string;
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
      }
    }
  }