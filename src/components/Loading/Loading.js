import React, { Component } from 'react'
import injectSheet from 'react-jss'
import Animated from 'animated/lib/targets/react-dom'

class Loading extends Component {
  state = { anim: new Animated.Value(0) }
  componentDidMount = () => {
    this.startAnimation()
  }
  startAnimation = () => {
    this.state.anim.setValue(0)
    Animated.timing(
      this.state.anim,
      {
        toValue: 1,
        duration: 1000
      }
    ).start(() => {
      this.startAnimation()
    })
  }
  interpolate = (from, to) => {
    return this.state.anim.interpolate({
      inputRange: [0, 1],
      outputRange: [from, to]
    })
  }
  render () {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.spinner}>
          <Animated.div
            className={classes.edgeOne}
            style={{
              transform: [
                { rotateX: this.interpolate('35deg', '35deg') },
                { rotateY: this.interpolate('-45deg', '-45deg') },
                { rotateZ: this.interpolate('0deg', '360deg') }
              ]
            }}
          ></Animated.div>
          <Animated.div
            className={classes.edgeTwo}
            style={{
              transform: [
                { rotateX: this.interpolate('50deg', '50deg') },
                { rotateY: this.interpolate('10deg', '10deg') },
                { rotateZ: this.interpolate('-120deg', '240deg') }
              ]
            }}
          ></Animated.div>
          <Animated.div
            className={classes.edgeThree}
            style={{
              transform: [
                { rotateX: this.interpolate('35deg', '35deg') },
                { rotateY: this.interpolate('55deg', '55deg') },
                { rotateZ: this.interpolate('-240deg', '120deg') }
              ]
            }}
          ></Animated.div>
        </div>
      </div>
    )
  }
}

const edge = {
  position: 'absolute',
  left: '0%',
  top: '0%',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  borderBottom: '5px solid #4caed5'
}

export default injectSheet({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 56px)'
  },
  spinner: {
    width: '100px',
    height: '100px',
    position: 'relative',
    perspective: '800px'
  },
  edgeOne: {
    ...edge,
    borderBottomColor: '#4caed5'
  },
  edgeTwo: {
    ...edge,
    borderBottomColor: '#cd408a'
  },
  edgeThree: {
    ...edge,
    borderBottomColor: '#78f669'
  }
})(Loading)
