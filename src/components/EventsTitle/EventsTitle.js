import React from 'react'
import injectSheet from 'react-jss'
import Icon from '../Icon'
import titleIcon from '../../icons/vivid-angle-top-left.svg'

const EventsTitle = ({ classes }) => (
  <h3 className={classes.title}>
    <Icon className={classes.titleIcon} symbol={titleIcon} />
    Results
  </h3>
)

export default injectSheet({
  title: {
    paddingLeft: 20,
    position: 'relative'
  },
  titleIcon: {
    position: 'absolute',
    left: 0,
    top: 5
  }
})(EventsTitle)
