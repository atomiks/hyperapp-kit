export const isBrowser = typeof window !== 'undefined'

export const cc = (staticClasses, conditionalClasses = staticClasses) => {
  const res = Object.keys(conditionalClasses).reduce(
    (acc, className) =>
      acc + (conditionalClasses[className] ? ` ${className}` : ''),
    ''
  )
  return typeof staticClasses === 'object' ? res : staticClasses + res
}
