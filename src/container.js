import React, { Component } from 'react'

export default class GridContainer extends Component {
  render () {
    const { rowTemplate, columnTemplate, areasTemplate } = this.props

    const style = {
      display: 'grid',
      gridTemplateRows: rowTemplate,
      gridTemplateColumns: columnTemplate,
      gridTemplateAreas: areasTemplate,
      ...this.props.style
    }

    return <div style={style}>{this.props.children}</div>
  }
}

GridContainer.propTypes = {
  rowTemplate: React.PropTypes.string,
  columnTemplate: React.PropTypes.string,
  areasTemplate: React.PropTypes.string,
  children: React.PropTypes.node,
  style: React.PropTypes.object
}
