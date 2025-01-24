export function buildResolvers(src) {
  return {
    modules: [src, 'node_modules'],
    extensions: ['.js', '.jsx']
  }
}