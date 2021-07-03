/**
 * mock request data
 *
 * @export
 * @template T
 * @param {T} data
 * @returns
 */
export function mockRequestData<T>(data: T) {
  return new Promise<T>((res, _) => {
    setTimeout(() => {
      res(data);
    }, 1000);
  });
}
