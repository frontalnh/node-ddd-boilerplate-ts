export interface Dto {
  validateAndAssign(data: any): Error | null;
}
