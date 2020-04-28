import React from 'react'

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString()
    }
  }

  tick () {
    this.setState({
      time: new Date().toLocaleTimeString()
    })
  }

  // What is happening here?
  // https://www.w3schools.com/jsref/met_win_setinterval.asp
  // The tick function is executed for 1000 ms or 1 second.
  // The setInterval function returns a number which is stored in 
  // a variable called intervalID.  Use this value with the 
  // clearInterval() method to cancel the timer. 
  // The clearInterval() method clears a timer set with the setInterval() method.

  componentDidMount () {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.intervalID)
  }

  render () {
    return (
      <div>
        <span className={this.props.date_class}><h1>{this.state.date}</h1></span>
        <span className={this.props.time_class}><h1>{this.state.time}</h1></span>
      </div>
    )
  }
}

export default Clock
