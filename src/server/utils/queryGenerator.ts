class Where<MT> {}

export class Filter {
  where?;
  fields?;
  order?: string[];
  limit?: number;
  skip?: number;
  offset?: number;
  include?: [];
}

export const queryGenerator = () => {};
