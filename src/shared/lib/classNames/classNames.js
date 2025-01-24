export function classNames(cls, mods, additional) {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods).filter(([_, value]) => Boolean(value)).map(([className]) => className)]
    .join(' ');
}

// Example
// Use classNames:
// <div className={classNames('app', {hovered: true, selected: true}, [theme])}>
// Get string:
// 'app dark hovered selected'
