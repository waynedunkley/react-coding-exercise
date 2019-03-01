import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Icon from '../Icon'
import titleIcon from '../../icons/vivid-angle-top-left.svg'

const EventsTitle = ({ classes, ready, total }) => (
  <h3 className={classes.title}>
    <Icon className={classes.titleIcon} symbol={titleIcon} />
    Results{ready && `: ${total} events found`}
  </h3>
)

EventsTitle.propTypes = {
  ready: PropTypes.bool,
  total: PropTypes.number
}

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
