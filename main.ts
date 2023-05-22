export interface Perspective {
  sort?: string;
  view?: string;
}
export interface Query extends Perspective {
  coverage?: number;
  duplications?: number;
  //gate?: Level;
  languages?: string[];
  maintainability?: number;
  new_coverage?: number;
  new_duplications?: number;
  new_lines?: number;
  new_maintainability?: number;
  new_reliability?: number;
  new_security?: number;
  new_security_review_rating?: number;
  reliability?: number;
  search?: string;
  security?: number;
  security_review_rating?: number;
  size?: number;
  tags?: string[];
}

export function hasVisualizationParams(query?: Query) {
  return Boolean(query?.['sort'] || getView(query?.['view']));
}

hasVisualizationParams({ sort: 'bar' });

export function getView(value: any): string | undefined {
  return typeof value !== 'string' || value === 'overall' || value === 'visualizations'
    ? undefined
    : value;
}
