# react-inline-svg-icon
`react-inline-svg-icon` is a simple react component that renders inline svg.

[View demo](https://react-inline-svg-icon.now.sh)

# Features
- Inline SVG

# Installation

```
npm i react-inline-svg-icon --save  # or yarn add react-inline-svg-icon --save
```

# Usage

```
import { Icon } from 'react-inline-svg-icon';


...

render () {
  return (
    <div>
      <Icon name="menu" color="#1abc9c" />
    </div>
  )
}

...

```

## props:


| name        | default | description               |
| ----------- | ------- | ------------------------- |
| className   | -       | This specifies a css class for an icon |
| color       | #000    | This specifies the fill color of the shape |
| name        |         | This specifies the name of the icon to render |
| size        | 25      | This specifies the size of the icon i.e width (the height is set to auto | 
| title       | 'icon'  | This specifies the `<title/>` tag for the svg |


# Demo using react-storybook

```
git clone git@github.com:pauldariye/react-inline-svg-icon.git
cd react-inline-svg-icon
npm install # or yarn
npm run storybook
```
Goto [localhost:6060](http://localhost:6006/)

# How to add new icons
 1. Visit https://goo.gl/wL4FWi
 2. Import svg icon of choice. (For Angry Artichoke Project, visit https://goo.gl/zyPzL1 ... request access if you can't get in)
 3. Customize svg as needed. Refer to this article if you need to understand
 svgs better -> https://goo.gl/jrZiHr
 4. Copy path code from 'Code' tab after you're done customizing (from above)
 4. Add new case (in lowercase i.e 'clock' ) within the switch statement below
 Sort cases in alphabetical order
 5. Paste svg path code in case return statement like so `return ( <g>[PASTE YOUR SVG PATH CODE HERE]</g>)`
 6. You can now use your svg icon like so `<Icon name='clock' size={25} />`
 anywhere after you import this file
 7. Add a test case in the 'Icons.test.js'

# To Do
- Convert svg files to inline and auto add to react component with single command
- Gulp tooling with [gulp-svgo](https://github.com/corneliusio/gulp-svgo)

# Acknowledgement
- [Code reuse](https://goo.gl/q8TvuL)
- [CSS Tricks](https://goo.gl/gbx4bD)
- [Building a React Component Library](https://hackernoon.com/building-a-react-component-library-part-1-d8a1e248fe6c)

# Icon Credits
- [BudIcons](https://budicon.co/) (Not FREE. I'm using a few that I purchased
    out of the icon pack)
- KΛPKLΛM from the [Noun Project](https://thenounproject.com)
- mikicon from the [Noun Project](https://thenounproject.com)
- Nirbhay from the [Noun Project](https://thenounproject.com)
- Martina Krasnayová from the [Noun Project](https://thenounproject.com)
