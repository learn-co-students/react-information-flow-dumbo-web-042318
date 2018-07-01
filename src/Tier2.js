import React, { Component } from 'react'
import { getReducedColor, getRandomColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.color !== this.props.color) {
      this.setState({
        childColor: getReducedColor(this.props.color)
      })
    }
  }
  
  handleGrandchildClick = (e) => {
    console.log('granchild clicked');
    e.stopPropagation()
    this.setState({
      childColor: getRandomColor()
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier2" onClick={this.props.handleChildClick} style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={this.handleGrandchildClick} />
        <Tier3 color={this.state.childColor} handleChildClick={this.handleGrandchildClick} />
      </div>
    )
  }
}
