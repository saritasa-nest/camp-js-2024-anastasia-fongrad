// eslint-disable-next-line spaced-comment
/// <reference types="vite/client" />

interface ImportMetaEnv {

  /** Api base url. */
  readonly VITE_APP_API_BASE_URL: string;

	/** 1. */
	readonly VITE_APP_API_KEY: string;
}

interface ImportMeta {

  /** Contains application environment data. */
  readonly env: ImportMetaEnv;
}
