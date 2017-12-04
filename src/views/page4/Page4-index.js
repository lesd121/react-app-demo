// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './page4-style.css'
import { pageTitle, record } from '../../store/action'

type PageTitleAction = { type: 'PAGE_TITLE', str:string }
type RecordAction = { type: 'RECORD', str:string }

type Action =
  | PageTitleAction
  | RecordAction
type Dispatch = (action:Action | Promise<Action>) => any


type Props = {
  dispatch: Dispatch,
  myAppState: any,
  history: any
}

type State = {
  title: string,
  recordContent: string,
  list: Array<string>
}


class Page4Index extends Component<Props, State> {
  state = {
    title: '',
    recordContent: '',
    list: []
  }
  titleInput:HTMLInputElement
  constructor(props: Props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.add = this.add.bind(this)
    this.handleTitleBlur = this.handleTitleBlur.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
  }
  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = event.currentTarget
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  
    this.setState({
      [name]: value
    });
  }
  
  add = (event: SyntheticEvent<HTMLButtonElement>) => {
    let list = this.state.list
    list.push(this.state.recordContent)
    
    this.setState({
      list: list
    })
    
    const dispatch: Dispatch = this.props.dispatch
    dispatch(record(this.state.recordContent))
  }
  
  goToIndex = (event: SyntheticEvent<HTMLButtonElement>) => {
    // let value:string = this.titleInput.value
    // alert(value)
    this.props.history.push('/')
  }
  
  handleTitleBlur = (event: SyntheticEvent<HTMLInputElement>) => {
    const target = event.currentTarget
    //alert(target.value)
    const dispatch: Dispatch = this.props.dispatch
    dispatch(pageTitle(target.value))
    
  }
  render() {
    const list = this.state.list
    let { pageTitle, records } = this.props.myAppState
    return (
      <div>
        <label>Page Title</label>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} onBlur={this.handleTitleBlur} ref={(input) => {if(input) return this.titleInput = input}}/>
        <p>result: {pageTitle}</p>
        <br/>
        <label>Add Records</label>
        <input type="text" name="recordContent" value={this.state.recordContent} onChange={this.handleChange}/>
        <button onClick={this.add}>确认</button>
        <br/>
        {
          list.length > 0 && <ul>
            {
              list.map((item, index) => {
                return <li key={index}>{item}</li>
              })
            }
          </ul>
        }
        <br/>
        <button onClick={this.goToIndex}>go to index</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myAppState: state.myAppState
  }
};

export default connect(mapStateToProps)(Page4Index)