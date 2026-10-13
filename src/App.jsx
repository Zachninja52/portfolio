import { Children, useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import MyButton from './MyButton'
import ProjectCarousel from './components/ProjectCarousel/ProjectCarousel'
import IconTray from './components/IconTray/IconTray'
import ClickBlocker from './components/ClickBlocker/ClickBlocker'
import ClickBlockerStyles from './components/ClickBlocker/ClickBlocker.module.css'
import ProjectWindow from './components/ProjectWindow/ProjectWindow'
import ProjectWindowX from './components/ProjectWindowX/ProjectWindowX'

import RevengeOfIcarus from './components/ProjectPages/RevengeOfIcarus/RevengeOfIcarus'
import VCS from './components/ProjectPages/VCS/VCS'

import Yale from './components/ProjectPages/Yale/Yale'
const projectComponents = {
  icarus: RevengeOfIcarus,
  yale: Yale,
  vcs: VCS
};

function ChangingText({ children, interval = 1800 }) {
  const phrases = Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (phrases.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % phrases.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [phrases.length, interval]);

  return (
    <span
      className="ChangingText"
      style={{ '--interval': `${interval}ms` }}
    >
      {phrases.map((phrase, index) => (
        <span key={index} className={index === activeIndex ? 'ChangingTextActive' : ''}>{phrase}</span>
      ))}
    </span>
  );
}

//npm run dev
function App() {
  //need grid
  const [blockerActive, setBlockerActive] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const DoOpenProject = (id) =>
  {
    setSelectedId(id);
    setBlockerActive(true);
  }
  const DoCloseProject = () =>
  {
    setBlockerActive(false);
  }

  const SelectedProject = projectComponents[selectedId];

  return (
    <div className='App'>

      <div className="Intro">Hey, I'm Zach, a <ChangingText><span>Game Designer</span><span>Yalie</span><span>Performer</span><span>Godot User</span><span>Full Stack Dev</span><span>Cat Lover</span></ChangingText></div>
      <ClickBlocker clickStyle={blockerActive ? ClickBlockerStyles.ClickBlockerActive : ClickBlockerStyles.ClickBlocker}>
        <ProjectWindow>
          <ProjectWindowX onClick={DoCloseProject}></ProjectWindowX>
          {SelectedProject && <SelectedProject />}
        </ProjectWindow>
      </ClickBlocker>

      <ProjectCarousel onOpenProject={DoOpenProject} />
      <IconTray/>
      
    </div>
  )
}
export default App

 /*<ClickBlocker>
        <ProjectWindow>
          <ProjectWindowX></ProjectWindowX>
        </ProjectWindow>
      </ClickBlocker> */
