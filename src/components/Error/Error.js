import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import injectSheet from 'react-jss'
import { fetchEventsActionCreator } from '../../actions'
import { eventTypeIdFilterSelector, getEventsApiUrl } from '../../selectors'
import { fetchEvents } from '../../middlewares/events'
import theme from '../../style/theme'

const Error = ({ classes, apiUrl, eventTypeId, reFetchEvents }) => (
  <div className={classes.container}>
    <div>
      <h3>Oh no, somethings gone wrong!!</h3>
      <p>Don't worry its not your fault.</p>
      <button onClick={() => reFetchEvents(apiUrl, eventTypeId)} className={classes.button}>Try reloading content</button>
      <p>If all else fails, go back to <a href='http://localhost:3000' className={classes.link}>event listings</a> and try something new until we can fix it.</p>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  apiUrl: getEventsApiUrl(state),
  eventTypeId: eventTypeIdFilterSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
  reFetchEvents: (apiUrl, eventTypeId) => dispatch(fetchEventsActionCreator(fetchEvents(apiUrl, eventTypeId)))
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectSheet({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'calc(100vh - 56px)'
    },
    button: {
      marginBottom: '10px'
    },
    link: {
      color: theme.colors.primary
    }
  })
)(Error)
