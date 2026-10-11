import { Children } from 'react';
import { useState } from 'react';
import styles from './ProjectCarousel.module.css'; // Import as an object
import ClickBlockerStyles from '../ClickBlocker/ClickBlocker.module.css'; // Import as an object
import ProjectNode from '../ProjectNode/ProjectNode'
import ProjectGrid from '../ProjectGrid/ProjectGrid'
import ProjectGridButton from '../ProjectGridButton/ProjectGridButton'
import ProjectGridTicker from '../ProjectGridTicker/ProjectGridTicker';
import ProjectGridTick from '../ProjectGridTick/ProjectGridTick';
function ProjectCarousel({children, onOpenProject}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const shiftPercentage = currentIndex * 100;
    const leftButtonVisible = currentIndex > 0;
    const rightButtonVisible = currentIndex < 3 - 1;
    

    const handleLeftClick = () => 
    {
        if (currentIndex != 0)
        {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handleRightClick = () => 
    {
        if (currentIndex < 2)
        {
            setCurrentIndex((prev) => prev + 1);
        }
    }; 


    return (
        <div className={styles.ProjectTickerWrapper}>
        <div className={styles.ProjectCarousel}>
            <div className={styles.ProjectGridListWrapper}style={{ transform: `translateX(-${shiftPercentage}vw)`,  transition: 'transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)',}}>
                <div className={styles.ProjectGridList}>
                    <ProjectGrid info='My Projects!'>
                        <ProjectNode imgSrcPath="src/assets/IcarusFloat.gif" toolTip='The Revenge of Icarus (2025)'  onClick={() => onOpenProject('icarus')}/>
                        <ProjectNode imgSrcPath="src/assets/background.jpg" active={false}/>
                        <ProjectNode imgSrcPath="src/assets/Yale.png" toolTip="My Undergrad: Yale University "onClick={() => onOpenProject('yale')}/>
                        <ProjectNode imgSrcPath="src/assets/background.jpg"/>
                        <ProjectNode imgSrcPath="src/assets/background.jpg" active={false}/>
                        <ProjectNode imgSrcPath="src/assets/background.jpg"/>
                        <ProjectNode imgSrcPath="src/assets/background.jpg"/>
                         <ProjectNode imgSrcPath="src/assets/background.jpg"/>
                    </ProjectGrid>
                    <ProjectGrid info='Interests!'>
                        <ProjectNode imgSrcPath="src/assets/background.jpg"active={false}/>
                        <ProjectNode imgSrcPath="src/assets/background.jpg" active={false}/>
                        <ProjectNode imgSrcPath="src/assets/background.jpg"active={false}/>
                        <ProjectNode imgSrcPath="src/assets/background.jpg"/>
                        <ProjectNode imgSrcPath="src/assets/background.jpg" active={false}/>
                        <ProjectNode imgSrcPath="src/assets/background.jpg"active={false}/>
                        <ProjectNode imgSrcPath="src/assets/background.jpg"active={false}/>
                         <ProjectNode imgSrcPath="src/assets/background.jpg"/>
                    </ProjectGrid>
                    <ProjectGrid info='Work Experience'> 
                        <ProjectNode imgSrcPath="src/assets/background.jpg"/>
                        <ProjectNode imgSrcPath="src/assets/background.jpg"/>
                        <ProjectNode imgSrcPath="src/assets/background.jpg"active={false}/>
                        <ProjectNode imgSrcPath="src/assets/background.jpg"/>
                        <ProjectNode imgSrcPath="src/assets/background.jpg" active={false}/>
                        <ProjectNode imgSrcPath="src/assets/background.jpg"active={false}/>
                        <ProjectNode imgSrcPath="src/assets/background.jpg"active={false}/>
                        <ProjectNode imgSrcPath="src/assets/background.jpg"/>
                    </ProjectGrid>
                </div>
            </div>
            {rightButtonVisible && <ProjectGridButton left={false} onClick={handleRightClick}></ProjectGridButton>}
            {leftButtonVisible &&<ProjectGridButton onClick={handleLeftClick}></ProjectGridButton>}
           
        </div>
        <ProjectGridTicker>
            <ProjectGridTick isActive={currentIndex === 0}></ProjectGridTick>
            <ProjectGridTick isActive={currentIndex === 1}></ProjectGridTick>
            <ProjectGridTick isActive={currentIndex === 2}></ProjectGridTick>
        </ProjectGridTicker>
        </div>
        
    );
}
export default ProjectCarousel;