import React from 'react'
import { shallow } from 'enzyme'
import request from 'supertest'
import Page1Index from '../views/page1/Page1-index'


describe('<Page1Index />', () => {
  it('renders widthout crashing', () => {
    shallow(<Page1Index/>)
  })
  
  it('has 4 list item', () => {
    const wrapper = shallow(<Page1Index/>)
    expect(wrapper.find('li')).toHaveLength(4)
  })
  
  it('fetch data', async () => {
    const response = await request('http://127.0.0.1:3000').get('/api/todo/list')
    //console.log(response)
    expect(response.body.success).toBeFalsy()
  })
})
