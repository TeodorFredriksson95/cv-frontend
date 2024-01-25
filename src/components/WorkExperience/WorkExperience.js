import { Icon } from '@iconify-icon/react';

import './WorkExperience.css'

const WorkExperience = () => {


    return (
        <div>
            <div className="leadership-header">
                <img src="leadershiptest1.png"/>
                <div className="leadershipTitles">
                    <h1>Problem Solving</h1>
                    <h1>Reinvention</h1>
                    <h1>Leadership</h1>
                    <p>The unexpected personal and professional gain from the retail
                industry - and the need for change.</p>
                </div>
            </div>
 
            <div className="graduation-text">
                As the young man graduated from high school with a degree in 
                vehicles and transportation, he still felt his future career lied elsewhere. 
                Struggling with insecurity and a lack of conviction regarding his future career path, 
                he stumbled upon a temp job at a grocery store. 
            </div>
            <div className="response-text">
                <strong>-”Perfect”</strong> the young man thought to himself.<br></br>
                -”A chance to make some easy money while I figure out what I want to do with my life”.
            </div>
            <div className="end-title">
                <p>Little did he know, this choice would change him forever..</p>
            </div>
            <div className="flowchart-text-container">
                <div className="flow-chart-image">
                    <img src="flowchartedit1.png"/>
                </div>
                <div className="flowchart-text">
                    <p>
                    The young man came to realize quickly, that this store was revered. 
                    Both by customers and by competitors. The expectations were high. 
                    First class customer service, a creatively organized stock, beautifully 
                    stocked shelves and a gross profit rivaled by few  - all made possible by daily
                     analysis and a breakneck pace.
                    </p>
                </div>

            </div>

            <div className="second-flowchart-container">
                <div className="second-flowchart-text">
                    <p>
                    This suited the young man perfectly. He quickly rose 
                    through the ranks, showing promise through initiative and 
                    commitment and even got the chance to attend a “Business and Leadership” program. 
                    </p>
                </div>
                <div className="second-flowchart-image">
                    <img src="workflowsecondedit1.png"/>
                </div>
            </div>
            <div className="scorecard-and-text-flex-container">
                <div className="scorecard-container">
                    <h1>Score Card</h1>
                    <div className="scorecard-item">
                        <span className="scorecard-text">Increase sales in every department</span>
                        <Icon width={25} height={25} icon="foundation:checkbox" className="scorecard-checkbox"/> 
                    </div>
                    <div className="scorecard-item">
                        <span className="scorecard-text">Increase employee motivation</span>
                        <Icon width={25} height={25} icon="foundation:checkbox" className="scorecard-checkbox"/> 
                    </div>
                    <div className="scorecard-item">
                        <span className="scorecard-text">Reduce time required for static tasks</span>
                        <Icon width={25} height={25} icon="foundation:checkbox" className="scorecard-checkbox"/> 
                    </div>
                    <div className="scorecard-item">
                        <span className="scorecard-text">Reduce costs through digitalization</span>
                        <Icon width={25} height={25} icon="foundation:checkbox" className="scorecard-checkbox"/> 
                    </div>
                    <div className="scorecard-item">
                        <span className="scorecard-text">Competitors and market analysis</span>
                        <Icon width={25} height={25} icon="foundation:checkbox" className="scorecard-checkbox"/> 
                    </div>
                        <div className='scorecard-lines'></div>
                        <div className='scorecard-lines'></div>
                        <div className='scorecard-lines'></div>
                        <div className='scorecard-lines'></div>
                </div>
                <div className="scorecard-paragraph-container">
                    <p>
                        For a long time, he felt great satisfaction in striving for new knowledge and converting this into substantial results.<br/>
                    </p>
                    <p>
                        As he grew with his experiences, he wished for nothing more than to help others reach their own dreams and goals.<br/>
                    </p>
                    <p>
                        The young man believed there was always valuable life lessons to be found, even in the most mundane tasks.<br/>
                    </p>
                    <p>
                        He took great pride in his effort to inspire and motivate his peers, as someone had previously done for him.<br/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience;