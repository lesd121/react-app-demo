// @flow
import React, { Component } from 'react'
const querystring = require('querystring')

type Props = {
  location:{
    search: string
  }
}

type State = {
  isActive: boolean
}

class Page2Index extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isActive: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    let queryObject = querystring.parse(this.props.location.search ? this.props.location.search.substr(1) : '')
    let queryList = []
    for(let item in queryObject) {
      queryList.push(item + ': '+queryObject[item])
    }
    let isActive = this.state.isActive
    return (
      <div>
        <h1>This is Page2 Index</h1>
        <div>
          {isActive ? <p>Item is active!</p> : <p>Item is not active!</p>}
        </div>
        <button onClick={this.handleClick}>change</button>
        <br/>
        <ul>
          {queryList.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Page2Index
