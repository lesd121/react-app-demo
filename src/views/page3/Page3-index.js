// @flow
import React, { Component } from 'react'
import Page1Index from '../page1/Page1-index'
// eslint-disable-next-line
const $ = window.$



class Page3Index extends Component<void, void> {
  button: ?HTMLButtonElement
  render() {
    let myStyle = {
      padding: '6px 10px'
    }
    return (
      <div>
        <button style={myStyle} ref={button => (this.button = button)}>
          jquery trigger
        </button>
      </div>
    )
  }
  componentDidMount() {
    $(this.button).on('click', function(){
      alert('trigger')
    })
    
    let page1Index = new Page1Index({})
    page1Index.getData().then(data => {
      console.log(data)
    })
  }
}

export default Page3Index
