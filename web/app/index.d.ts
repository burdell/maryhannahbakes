type AsyncReturnType<T extends (...args: unknown[]) => unknown> = ReturnType<
  T
> extends Promise<infer U>
  ? U
  : T
