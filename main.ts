export interface Query {
  sort: string | undefined
}

function hasVisualizationParams(view: string | undefined, query?: Query) {
  return Boolean(query?.['sort'] || view);
}

hasVisualizationParams('foo', { sort: 'bar' });
