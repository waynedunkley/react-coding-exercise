import React from 'react'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getEvents, isEventsReady, getEventsError } from '../selectors'
import theme from '../style/theme'
import Event from './Event'
import EventsTitle from './EventsTitle/EventsTitle'
import Loading from './Loading/Loading'
import Error from './Error/Error'

const Events = ({ classes, ready, events, eventsError }) => (
  <div className={classes.container}>
    {eventsError && <Error />}
    {!eventsError &&
      <div>
        <EventsTitle ready={ready} total={events.length} />
        {!ready && <Loading />}
        {ready && (
          <div className={classes.tilesWrapper}>
            <div className={classes.tiles}>
              {events.map(event => <Event key={event.id} className={classes.tile} content={event} />)}
            </div>
          </div>
        )}
      </div>
    }
  </div>
)

const mapStateToProps = (state) => ({
  ready: isEventsReady(state),
  events: getEvents(state),
  eventsError: getEventsError(state)
})

export default compose(
  connect(mapStateToProps),
  injectSheet({
    tilesWrapper: {
      margin: [0, 'auto'],
      maxWidth: theme.maxTileWidth,
      '@media (min-width: 768px)': {
        maxWidth: theme.maxTileWidth * 2 + theme.gutter
      },
      '@media (min-width: 1200px)': {
        maxWidth: theme.maxTileWidth * 3 + theme.gutter * 2
      }
    },
    tiles: {
      '@media (min-width: 768px)': {
        marginLeft: -theme.gutter / 2,
        marginRight: -theme.gutter / 2,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
      }
    },

    tile: {
      margin: [0, 'auto', theme.gutter],
      maxWidth: theme.maxTileWidth,
      '@media (min-width: 768px)': {
        marginLeft: theme.gutter / 2,
        marginRight: theme.gutter / 2,
        width: `calc(50% - ${theme.gutter}px)`
      },
      '@media (min-width: 1200px)': {
        width: `calc(${100 / 3}% - ${theme.gutter}px)`
      }
    }
  })
)(Events)
