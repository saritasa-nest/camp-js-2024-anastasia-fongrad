// eslint-disable-next-line spaced-comment
/// <reference types="vite/client" />

interface ImportMetaEnv {

  /** Api base url. */
  readonly APP_API_BASE_URL: string;
}

interface ImportMeta {

  /** Contains application environment data. */
  readonly env: ImportMetaEnv;
}
