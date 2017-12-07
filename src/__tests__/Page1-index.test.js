import React from 'react'
import { shallow } from 'enzyme'
import request from 'supertest'
import {Page1Index} from '../views/page1/Page1-index'


describe('<Page1Index />', () => {
  let wrapper
  const myAppState = {
    pageTitle: 'Hello World',
    records: ['a','b','c','d']
  }
  
  beforeEach(() => {
    wrapper = shallow(<Page1Index myAppState={myAppState}/>)
  })
  
  it('renders widthout crashing', () => {
    expect(wrapper.length).toEqual(1)
  })
  
  it('has 4 list item', () => {
    expect(wrapper.find('li.item')).toHaveLength(4)
  })
  
  /*it('fetch data', async () => {
    const response = await request('http://127.0.0.1:3000').get('/api/todo/list')
    //console.log(response)
    expect(response.body.success).toBeFalsy()
  })*/
})