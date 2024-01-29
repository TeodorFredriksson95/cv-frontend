import './TechStack.css'
import { Icon } from '@iconify-icon/react';
import { useEffect, useState } from 'react';


const TechStack = () => {
    const iconWidth = 100;
    const iconHeight = 100;
    const [containerHeight, setContainerHeight] = useState(0);

    useEffect(() => {
        const container = document.querySelector('.launching-concepts-absolute-container');
        if (container) {
            setContainerHeight(container.offsetHeight);
        }
    }, []);

    return (
        <div className='tech-stack-container' style={{ marginTop: `${containerHeight*1.30}px` }}>
            <div className='tech-container'>
                <Icon width={iconWidth} height={iconHeight} icon="pajamas:api" className='tech-icon'/>
                <div className='text-overflow-container'>
                    <p className='section-title-h3'>He worked on API's</p>
                </div>
            </div>
            <div className='tech-container'>
                <Icon width={iconWidth} height={iconHeight} icon="gala:data" className='tech-icon'/>
                <div className='text-overflow-container'>
                    <p className='section-title-h3'>Databases</p>
                </div>
            </div>
            <div className='tech-container'>
                <Icon width={iconWidth} height={iconHeight} icon="circum:mobile-3" className='tech-icon'/>
                <div className='text-overflow-container'>
                    <p className='section-title-h3'>Mobile Apps</p>
                </div>
            </div>
            <div className='tech-container'>
                <Icon width={iconWidth} height={iconHeight} icon="mdi:application-brackets-outline" className='tech-icon'/>
                <div className='text-overflow-container'>
                    <p className='section-title-h3'>Web Apps</p>
                </div>
            </div>
            <div className='tech-container'>
                <Icon width={iconWidth} height={iconHeight} icon="carbon:platforms" className='tech-icon'/>
                <div className='text-overflow-container'>
                    <p className='section-title-h3'>He even made many of them cross-platform</p>
                </div>
            </div>
            <div className='frameworks-container'>
                <div className='frameworks-row1'>
                    <Icon width={iconWidth} height={iconHeight} icon="skill-icons:vscode-dark" className='tech-icon'/>
                    <Icon width={iconWidth} height={iconHeight} icon="skill-icons:javascript" className='tech-icon'/>
                    <Icon width={iconWidth} height={iconHeight} icon="skill-icons:react-dark" className='tech-icon'/>
                    <Icon width={iconWidth} height={iconHeight} icon="skill-icons:visualstudio-dark" className='tech-icon'/>
                    <Icon width={iconWidth} height={iconHeight} icon="skill-icons:dotnet" className='tech-icon'/>
                    <Icon width={iconWidth} height={iconHeight} icon="iconoir:github" id='github'/>
                </div>
            </div>
            <div className='beginning-of-the-end-container'>
                <p className="response-text-one response-paragraph">
                All of a sudden, the young man had graduated.
                </p>
                <img src='handsinairedit1.png'/>
            </div>
            <div>
            <p className="response-text-one response-paragraph">
            And even though he has yet to find a company to call home, I know he’s still out there..
            </p>
            <p className="response-text-one section-title-h2">
            ..searching
            </p>
            <div className='last-image-container'>
                <div className='looking-for-dev-text-container'>

                <p className='looking-for-dev-text'>
                Are you looking for a developer, hungry to <span id='contribute'>contribute</span> to your <span id='atmosphere'>atmosphere</span> and <span id='atmosphere'>progress</span>?
                </p>
                <p className='looking-for-dev-text last-text'>
                    GET IN TOUCH NOW <Icon width={iconWidth} height={iconHeight} icon="quill:forward" className='tech-icon-last'/>
                </p>
                </div>
                <div className='looking-for-dev-image-container'>
                <img src='beforedawnpng3.png' id='last-img'/>
                </div>
            </div>
            </div>
   

        </div>
    )
}

export default TechStack;