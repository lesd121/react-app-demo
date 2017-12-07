// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './page1-style.css'
import axios from 'axios'

const PropTypes = require('prop-types')

type Props = {
  myAppState: any,
  history: any
}

type ListItem = {
  name: string,
  money: number
}

type State = {
  list: ListItem[]
}

export class Page1Index extends Component<Props, State> {
  static contextTypes = {
    store:PropTypes.object
  }
  state = {
    list: []
  }
  myDiv: ?HTMLDivElement
  constructor(props: Props) {
    super(props)
    this.state = {
      list: [
        {
          name: 'L',
          money: 100
        },
        {
          name: 'CK',
          money: 2000
        },
        {
          name: 'YY',
          money: 3000
        },
        {
          name: 'BB',
          money: 6888
        }
      ]
    }
    this.goToPage4 = this.goToPage4.bind(this)
  }
  goToPage4 = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.props.history.push('/page4')
  }
  render() {
    let list = this.state.list || []
    let { pageTitle, records = [] } = this.props.myAppState
    return (
      <div>
        {
          pageTitle && <h1>{pageTitle}</h1>
        }
        <h2>This is Page1 Index</h2>
        <div>
          <ul>
            {list.map((item, index) => {
              return <li className="item" key={index}>{item.name + '  ' + item.money}</li>
            })}
          </ul>
          {
            records.length > 0 &&
            <ul>
              {records.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
          }
        </div>
        <div ref={myDiv => (this.myDiv = myDiv)}></div>
        <button onClick={this.goToPage4}>go to page4</button>
      </div>
    )
  }
  componentDidMount() {
    this.sayHelloWorld('666')
    console.log(process.env.REACT_APP_WEBSITE_NAME)

    /*fetch('http://investapitest.qianduan.com/api/Account/GetInvestList', {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json, text/plain, *!/!*"
      },
      body: "requestStr=eyJCb2R5Ijp7IlN0YXRlIjoxfSwiSGVhZGVyIjp7IlRva2VuIjoiNjRCODI5QzdFQTczNEUwNTg2MzhBREY2NUU3QjY0MzAiLCJWZXJzaW9uIjoiMS4yLjMiLCJUaW1lc3RhbXAiOjE1MDExMjI0Nzc4MTMsIkluc3RpdHV0aW9uTm8iOjJ9fQ=="
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
      })*/
    /*let myDivEl = this.myDiv
    
    this.getData().then(response => {
      //console.log(response)
      if(myDivEl){
        myDivEl.innerHTML = JSON.stringify(response.data)
      }
    }).catch(e => {
      console.log(e)
    })*/
  }

  sayHelloWorld(word: string) {
    console.log(word)
  }
  
  getData() {
    /*return fetch('/api/todo/list', {
      method: 'GET'
    })*/
    
    return axios.get('/api/todo/list')
  }
}

const mapStateToProps = (state) => {
  return{
    myAppState: state.myAppState
  }
}

export default connect(mapStateToProps)(Page1Index)
