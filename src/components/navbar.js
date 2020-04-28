import React from 'react'

class Navbar extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <table id= {this.props.id}>
        <tr>
          {/* eslint-disable-next-line react/prop-types */}
          {this.props.elements.map(el => <td className = {this.props.element_class}>{el}</td>)}
        </tr>
      </table>
    )
  }
}
export default Navbar