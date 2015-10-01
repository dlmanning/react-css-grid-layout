# WARNING: Don't use this unless you know your environment supports CSS Grid Layout!

## react-css-grid-layout

React components for wrapping your other react components in [CSS Grid Layout](http://www.w3.org/TR/css-grid-1/) inline.

### Installation

`npm install react-css-grid-layout`

### Quick Start

Maybe do something like this:

```javascript
import React from 'react'
import { GridContainer, GridItem } from '../src'

export default function Layout () {
  return (
    <GridContainer rowTemplate='100px 1fr 1fr'
                   columnTemplate=`300px 25px 300px`
                   style={{ height: '100%' }}>
      <GridItem rows='2 / 3' columns='3 / 4'>
        <p>Content</p>
      </GridItem>
      <GridItem rows='1 / 4' columns='1 / 2' style={{ overflowY: 'scroll' }}>
        <h1>Sidebar</h1>
      </GridItem>
    </GridContainer>
  )
}
```

### API

#### `<GridContainer />`

#### props (all optional)

Most of the properties are just one-to-one mappings onto the CSS properties. See [Resources](#resources) for more information on using the spec.

|Component Property | CSS property|
|-------------------|-------------|
|`rowTemplate`: *string* | grid-template-rows|
|`columnTemplate`: *string* | grid-template-columns|
|`areasTemplate`: *string* | grid-area-templates|


`style`: *object*

Will be added to the inline styles of the `<div>` that surrounds your children. Any property you pass will override those set by `react-css-grid-layout`.

#### `<GridItem />`

#### props (all optional)

Most of the properties are just one-to-one mappings onto the CSS properties.

|Component Property | CSS property|
|-------------------|-------------|
|`area`: *string* | grid-area   |
|`rowStart`: *number* | grid-row-start |
|`rowEnd`: *number* | grid-row-end |
|`rows`: *string* | grid-row |
|`columnStart`: *number* | grid-column-start |
|`columnEnd`: *number* | grid-column-end |
|`columns`: *string* | grid-column |

`style`: *object*

Will be added to the inline styles of the `<div>` that surrounds your children. Any property you pass will override those set by `react-css-grid-layout`.

### <a name="resources">Resources</a> for information about CSS Grid Layout

* [The Specification](http://www.w3.org/TR/css-grid-1/)
* [The future of layout with CSS: Grid Layouts](https://hacks.mozilla.org/2015/09/the-future-of-layout-with-css-grid-layouts/)
* [Grid by Example: simple usage examples for the CSS3 Grid Layout Module](http://gridbyexample.com/)
