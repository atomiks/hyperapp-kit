export const isBrowser = typeof window !== 'undefined'

export const cc = (staticClasses, conditionalClasses = staticClasses) => {
  const res = Object.keys(conditionalClasses).reduce(
    (acc, className) =>
      acc + (conditionalClasses[className] ? ` ${className}` : ''),
    ''
  )
  return typeof staticClasses === 'object' ? res : staticClasses + res
}

export const bem = block => (element, modifiers = element) => {
  const elementClass =
    typeof element === 'object' ? block : `${block}__${element}`
  const modifierClasses = Object.keys(modifiers).reduce(
    (acc, modifier) =>
      acc +
      (modifiers[modifier]
        ? ` ${typeof element === 'object' ? block : elementClass}--${modifier}`
        : ''),
    ''
  )
  return elementClass + modifierClasses
}
