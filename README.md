# react-inline-svg-icon
`react-inline-svg-icon` is a simple react component that renders inline svg.

# Features
- Inline SVG

# Installation

```
npm install react-inline-svg-icon --save  # or
yarn add react-inline-svg-icon --save
```

# Usage

```
import { Icon } from 'react-inline-svg-icon';


...

render () {
  return (
    <div>
      <Icon icon="menu" color="#1abc9c" />
    </div>
  )
}

...

```

## props:


| name        | default | description               |
| ----------- | ------- | ------------------------- |
| size        | 25      | This specifies the size of the icon i.e width (the height is set to auto | 
| color       | #000    | This specifies the fill color of the shape |


# How to add new icons
 1. Visit https://goo.gl/wL4FWi
 2. Import svg icon of choice. (For Angry Artichoke Project, visit https://goo.gl/zyPzL1 ... request access if you can't get in)
 3. Customize svg as needed. Refer to this article if you need to understand
 svgs better -> https://goo.gl/jrZiHr
 4. Copy path code from 'Code' tab after you're done customizing (from above)
 4. Add new case (in lowercase i.e 'clock' ) within the switch statement below
 Sort cases in alphabetical order
 5. Paste svg path code in case return statement like so `return ( <g>[PASTE YOUR SVG PATH CODE HERE]</g>)`
 6. You can now use your svg icon like so `<Icon icon='clock' size={25} />`
 anywhere after you import this file
 7. Add a test case in the 'Icons.test.js'

# To Do
- Convert svg files to inline and auto add to react component with single command
- Gulp tooling with [gulp-svgo](https://github.com/corneliusio/gulp-svgo)

# Acknowledgement
- [Code reuse](https://goo.gl/q8TvuL)
- [CSS Tricks](https://goo.gl/gbx4bD)
- [Building a React Component Library](https://hackernoon.com/building-a-react-component-library-part-1-d8a1e248fe6c)
