import React, { Component } from 'react'
import { render } from 'react-dom'
import { GridContainer, GridItem } from '../src'

const lorem =
`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
 nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
 fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
 culpa qui officia deserunt mollit anim id est laborum.`

class Test extends Component {
  constructor (props) {
    super(props)

    this.state = {
      width: 450
    }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({ width: toggle(this.state.width) })
    }, 1000)
  }

  render () {
    const columnTemplate = `${this.state.width}px 25px 300px`

    return (
      <GridContainer rowTemplate='100px 1fr 1fr'
                     columnTemplate={columnTemplate}
                     style={{ height: '100%' }}>
        <GridItem rows='2 / 3'
                  columns='3 / 4'>
          <p>{lorem}</p>
        </GridItem>
        <GridItem style={{ overflowY: 'scroll' }}
                  rows='1 / 4'
                  columns='1 / 2'>
          <h1>{lorem}</h1>
        </GridItem>
      </GridContainer>
    )
  }
}

render(<Test />, document.getElementById('root'))

function toggle (value) {
  return value === 450 ? 50 : 450
}
