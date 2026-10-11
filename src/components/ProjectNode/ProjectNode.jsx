// src/components/ProjectNode/ProjectNode.jsx
import { Children } from 'react';
import styles from './ProjectNode.module.css'; // Import as an object

var imgSrcPath = "src/assets/background.jpg";


function ProjectNode({imgSrcPath,active = true, toolTip="",onClick}) {

  if (active)
  {
    return (
    <div className={styles.ProjectNode} onClick={onClick}>
      {toolTip ? <div className={styles.ToolTip}>{toolTip}</div> : null}
      <div className={styles.ProjectNodeBorder}>
        <img src={imgSrcPath} className={styles.ProjectNodeImage} draggable="false">
          {Children.Children}
        </img>
      </div>
    </div>
    );
  }
  else
  {
    return (
    <div className={styles.ProjectNodeInactiveBorder}>
      <div className={styles.ProjectNodeInactiveBubble}></div>
    </div>
    )
  }
  
}
export default ProjectNode;