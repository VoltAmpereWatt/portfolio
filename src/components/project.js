import React from 'react';
import '../styles/styles.css';

function Project(props) {
  return (
    <div className={props.class}>
      <p className={'header1'}>{props.title}</p>
      {props.url ? <div><p className={'header2 text-accent'}>Skills</p><a href={props.url}>Link</a></div> : <div><p className={'header2 text-accent'}>Skills</p></div>}
      {props.skills.slice(0, props.skills.length - 1).map(skill => <span>{skill}, </span>)}
      <span>{props.skills[props.skills.length - 1]}</span>
    </div>
  )
}

function AllProjects(props) {
  return (
    <div id={'projects'} className={'grid-flex'}>
      <Project class={'card project margins paddings'} title={'Photo Viewer'} url={'https://github.com/VoltAmpereWatt/Photo-Viewer'}
        skills={['React', 'CSS', 'JavaScript', 'HTML', 'Node.js', 'MongoDB', 'Express.js', 'AWS S3']} />
      <Project class={'card project margins paddings'} title={'Personal Website'} url={'https://github.com/VoltAmpereWatt/portfolio'}
        skills={['React', 'CSS', 'JavaScript', 'HTML', 'Node.js']} />
      <Project class={'card project margins paddings'} title={'Tracker'} skills={['Django', 'React', 'HTML', 'CSS', 'Javascript', 'MySQL']} />
      <Project class={'card project margins paddings'} title={'Fraud Detector'} url={'https://github.com/VoltAmpereWatt/fraud-detector'}
        skills={['Python', 'Numpy', 'Pandas', 'Seaborn', 'Scikit-Learn', 'Jupyter Notebook', 'Random Forests', 'Support Vector Machines']} />
      <Project class={'card project margins paddings'} title={'Wherebnb'} url={'https://github.com/VoltAmpereWatt/Wherebnb'}
        skills={['R', 'RStudio', 'tidyverse', 'ggplot2', 'Statistics', 'Exploratory Data Analysis', 'Data Visualization']} />
      <Project class={'card project margins paddings'} title={'Spotifynsights'} url={'https://github.com/VoltAmpereWatt/Spotifynsights'}
        skills={['Python', 'Numpy', 'Pandas', 'Seaborn', 'Exploratory Data Analysis', 'Data Visualization', 'Statistics']} />
    </div>
  )
}
export default AllProjects;
