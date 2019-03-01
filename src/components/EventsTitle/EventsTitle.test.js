import React from 'react'
import EventsTitle from './EventsTitle'
import { shallow } from 'enzyme'

describe('EventsTitle component', () => {
  it('renders without totals', () => {
    const wrapper = shallow(<EventsTitle ready={false} total={30} />)
    expect(wrapper).toMatchSnapshot('EventsTitle without values')
  })

  it('renders with totals', () => {
    const wrapper = shallow(<EventsTitle ready={true} total={30} />)
    expect(wrapper).toMatchSnapshot('EventsTitle with values')
  })
})