type PathParamRecursive<Path extends string> =
  Path extends `${infer L}/${infer R}`
    ? PathParamRecursive<L> | PathParamRecursive<R>
    : Path extends `${string}:${infer Param}`
    ? Param
    : never;

export type PathParam<Path extends string> = Path extends '*'
  ? '*'
  : Path extends `${infer Rest}/*`
  ? '*' | PathParamRecursive<Rest>
  : PathParamRecursive<Path>;
