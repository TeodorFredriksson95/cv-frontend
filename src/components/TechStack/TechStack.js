import './TechStack.css'
import { Icon } from '@iconify-icon/react';
import { useEffect, useState, useRef } from 'react';

import createObserver from '../../util/createObserver';


const TechStack = () => {
    const [iconSize, setIconSize] = useState({ width: 100, height: 100 });

    let iconWidth = 100;
    let iconHeight = 100;
    const [containerHeight, setContainerHeight] = useState(0);

    const icon_and_para1 = useRef();
    const icon_and_para2 = useRef();
    const icon_and_para3 = useRef();
    const icon_and_para4 = useRef();
    const icon_and_para5 = useRef();

    const tech_stack_para1 = useRef();
    const tech_stack_para2 = useRef();

    const searching = useRef();

    
    useEffect(() => {
        const updateIconSize = () => {
            const newSize = window.innerWidth < 800 ? { width: 50, height: 50 } : { width: 100, height: 100 };
            setIconSize(newSize);
        };
        updateIconSize();
        window.addEventListener('resize', updateIconSize);
        createObserver(icon_and_para1, 'activate', 1, true);
        createObserver(icon_and_para2, 'activate', 1, true);
        createObserver(icon_and_para3, 'activate', 1, true);
        createObserver(icon_and_para4, 'activate', 1, true);
        createObserver(icon_and_para5, 'activate', 1, true);
    
        createObserver(tech_stack_para1, 'activate', .5, true);
        createObserver(tech_stack_para2, 'activate', .8, true);
    
        createObserver(searching, 'activate', .8, true);
        const container = document.querySelector('.launching-concepts-absolute-container');
        if (container) {
            setContainerHeight(container.offsetHeight);
        }
        return () => window.removeEventListener('resize', updateIconSize);

    }, []);

    return (
        <div className='tech-stack-container' style={{ marginTop: `${containerHeight*1.30}px` }}>
            <div className='tech-container tech-1' ref={icon_and_para1}>
                <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="pajamas:api" id='api-icon' className='tech-icon'/>
                <div className='text-overflow-container'>
                    <p className='section-title-h3'>He worked on API's</p>
                </div>
            </div>
            <div className='tech-container tech-2' ref={icon_and_para2}>
                <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="gala:data" id='data-icon' className='tech-icon'/>
                <div className='text-overflow-container'>
                    <p className='section-title-h3'>Databases</p>
                </div>
            </div>
            <div className='tech-container tech-3' ref={icon_and_para3}>
                <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="circum:mobile-3" id='mobile-icon' className='tech-icon'/>
                <div className='text-overflow-container'>
                    <p className='section-title-h3'>Mobile Apps</p>
                </div>
            </div>
            <div className='tech-container tech-4' ref={icon_and_para4}>
                <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="mdi:application-brackets-outline" id='web-icon' className='tech-icon'/>
                <div className='text-overflow-container'>
                    <p className='section-title-h3'>Web Apps</p>
                </div>
            </div>
            <div className='tech-container tech-5' ref={icon_and_para5}>
                <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="carbon:platforms" id='cross-platform-icon' className='tech-icon'/>
                <div className='text-overflow-container'>
                    <p className='section-title-h3'>He even made some of them cross-platform</p>
                </div>
            </div>
            <div className='frameworks-container'>
                <div className='frameworks-row1'>
                    <Icon width={iconWidth} height={iconHeight} icon="skill-icons:vscode-dark" className='tech-icon'/>
                    <Icon width={iconWidth} height={iconHeight} icon="skill-icons:javascript" className='tech-icon'/>
                    <Icon width={iconWidth} height={iconHeight} icon="skill-icons:react-dark" className='tech-icon'/>
                    <Icon width={iconWidth} height={iconHeight} icon="skill-icons:visualstudio-dark" className='tech-icon'/>
                    <Icon width={iconWidth} height={iconHeight} icon="skill-icons:dotnet" className='tech-icon'/>
                </div>
                <div className='frameworks-row1'>
                    <Icon width={iconWidth} height={iconHeight} icon="iconoir:github" id='github'/>
                    <Icon width={iconWidth} height={iconHeight} icon="logos:firebase" className='tech-icon'/>
                    <Icon width={iconWidth} height={iconHeight} icon="skill-icons:godot-dark" className='tech-icon'/>
                    <Icon width={iconWidth} height={iconHeight} icon="skill-icons:prisma" className='tech-icon'/>
                    <Icon width={iconWidth} height={iconHeight} icon="devicon:xamarin" className='tech-icon'/>
                </div>
            </div>
            <div className='beginning-of-the-end-container tech-stack-para1' ref={tech_stack_para1}>
                <p className="response-text-one response-paragraph">
                All of a sudden, the young man had graduated.
                </p>
                <img src='handsinairedit1.png'/>
            </div>
            <div className='searching-container'>
                <div className='tech-stack-para2' ref={tech_stack_para2}>
                    <p className="response-text-one response-paragraph">
                    And even though he has yet to find a company to call home, I know he’s still out there..
                    </p>
                </div>
            <h2 className="response-text-one section-title-h2 searching" ref={searching}>
                <span>.</span>
                <span>.</span>
                <span>.</span>
                <span>s</span>
                <span>e</span>
                <span>a</span>
                <span>r</span>
                <span>c</span>
                <span>h</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
            </h2>
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