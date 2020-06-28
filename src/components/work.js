import React from 'react'
import '../styles/styles.css';
const responsibilities = {
  fitl:['Developing a web app to manage the 300-student tutoring program of the Undergraduate Academics department using Django, HTML, CSS, and JavaScript',
    'Designing the MySQL database to store student and tutor information and schedules',
  'Reduced storage use of schedules by 96%', 'Deployed a method to match students to tutors for individual and shared sessions'],
  nycdof:['Maintained and developed the SharePoint site of the Tax Audit and Enforcement Division',
    'Resolved a security bug to prevent unauthorized file access from over 500 employees',
    'Eliminated web part redundancy and file redundancy from the site contents by an average of 70%']
}

function Role (props) {
  return (
    <div className={props.class}>
      <div>
        <p className={'header1'}>{props.role_name}</p>
        <p className={'header2 text-accent'}>{props.org} ({props.years})  </p>
      </div>
      <div>
        <ul>
          {props.responsibilites.map(e => <li>{e}</li>)}
        </ul>
      </div>
    </div>
  )
}

class Work extends React.Component {

  render () {
    return (<div id={'work'} className={'grid-flex'}>
      <Role class={'card work'} role_name={'Student Web Developer'} org={'New York University'} 
      years={'Oct 2018 - May 2020'} responsibilites={responsibilities.fitl}/>
      <Role class={'card work'} role_name={'Sharepoint Developer'} org={'New York City Department of Finance'} 
      years={'Jun 2019 - Aug 2019'} responsibilites={responsibilities.nycdof}/>
    </div>
    )
  }
}

export default Work;