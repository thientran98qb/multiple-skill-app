export interface ListResponse<T> {
  results: T[];
  total_pages: number;
  total_result: number;
}
