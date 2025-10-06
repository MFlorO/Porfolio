
export type ProjectErrors = {
  title?: string;
  summary?: string;
  stack?: string[],
  repoUrl?: string,
  demoUrl?: string,
  images?: [] | {url:string, alt?:string}[]
};