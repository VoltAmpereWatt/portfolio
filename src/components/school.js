import React from 'react';

class School extends React.Component{
  constructor(props) {
    super(props)
  }
  
  render(){
    return(
      <div id={this.props.id} className={this.props.class}>
        <p className={'title-text header1'}>{this.props.uni_name}</p>
        <p className={'header2 text-accent'}><span>{this.props.degree}</span> - <span>{this.props.major}</span></p>
        <p>{this.props.location} - {this.props.years}</p>
      </div>
    )
  }
}

function AllSchools(props){
  return(
    <div id={'schools'} className={'card-2 grid-flex'}>
      <School id={'grad_school'} class={'card academics margins paddings'} uni_name={'New York University'} years={'May 2020'}
        major={'Computer Engineering'} degree={'Master of Science'} location={'Brooklyn, NY'}/>
      <School id={'undergrad_school'} class={'card academics margins paddings'} uni_name={'KJ Somaiya College of Engineering'}
        years={'Jun 2018'} major={'Electronics and Telecommunications Engineering'}
        degree={'Bachelor of Technology'} location={'Mumbai, India'}/>  
  </div>
  )
}

export default AllSchools;