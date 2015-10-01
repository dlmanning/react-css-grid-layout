import cssProperty from 'react/lib/CSSProperty.js'

cssProperty.isUnitlessNumber = {
  ...cssProperty.isUnitlessNumber,
  gridRowStart: true,
  gridRowEnd: true,
  gridColumnStart: true,
  gridColumnEnd: true
}
