import React, { Component } from 'react'

export default class GridItem extends Component {
  render () {
    const { rowStart, rowEnd, columnStart, columnEnd } = this.props

    const {
      columns = `${columnStart} / ${columnEnd}`,
      rows = `${rowStart} / ${rowEnd}`,
      area
    } = this.props

    const style = {
      gridColumn: columns,
      gridRow: rows,
      gridArea: area,
      ...this.props.style
    }

    return <div style={style}>{this.props.children}</div>
  }
}

GridItem.propTypes = {
  area: React.PropTypes.string,
  rowStart: React.PropTypes.number,
  rowEnd: React.PropTypes.number,
  columnStart: React.PropTypes.number,
  columnEnd: React.PropTypes.number,
  columns: React.PropTypes.string,
  rows: React.PropTypes.string,
  children: React.PropTypes.node,
  style: React.PropTypes.object
}
