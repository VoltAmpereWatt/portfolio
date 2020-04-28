import React from 'react'
import './styles/styles.css';
import './App.css';
import { SocialMediaIconsReact } from 'social-media-icons-react'
// import Clock from './components/clock.js'
// import Navbar from './components/navbar.js'
import AllSchools from './components/school.js'
import Work from './components/work.js'
import AllProjects from './components/project.js'
import profile from './images/profile.jpg';

class App extends React.Component {
  render() {
    return (<div>
      <div id={'content'}>
        <div id={'social-media'} className={'sticky-header'}>
          <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="github"
            iconColor="rgba(47,79,79,1)" backgroundColor="rgba(0,0,0,0)" iconSize="5"
            roundness="49%" url="https://github.com/voltamperewatt" size="50" />
          <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="linkedin"
            iconColor="rgba(47,79,79,1)" backgroundColor="rgba(0,0,0,0)" iconSize="5"
            roundness="49%" url="https://linkedin.com/in/rahulrmchndrn" size="50" />
          <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="instagram"
            iconColor="rgba(47,79,79,1)" backgroundColor="rgba(0,0,0,0)" iconSize="5"
            roundness="49%" url="https://instagram.com/rahulkacamera" size="50" />
          <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="mail"
            iconColor="rgba(47,79,79,1)" backgroundColor="rgba(0,0,0,0)" iconSize="5"
            roundness="20%" url="mailto:rahul.ramachandran@nyu.edu" size="50" />
        </div>
        <div id={'Intro'}>
          <div id={'header'} className={'title-text margins'}>
            <Intro class={'text-accent'} roles={['graduate student', 'web developer', 'aspiring data scientist']}
              name={'Rahul Ramachandran'} />
          </div>
        </div>
        <Work />
        <AllSchools />
        <AllProjects />
      </div>
    </div>)
  }
}

function Intro(props) {
  return (
    <div id={props.id} className={'title-text grid-flex'}>
      <div>
        <h1>Hello, I'm <span className={props.class}>{props.name}.</span></h1>
        <h1>I am a {props.roles.slice(0, props.roles.length - 1).map(element => <span className={props.class}>{element}, </span>)}
        and <span className={props.class}>{props.roles[props.roles.length - 1]}!</span>
        </h1>
      </div>
      <div>
        <img src={profile} alt="Profile" />
      </div>
    </div>
  )
}

export default App;
