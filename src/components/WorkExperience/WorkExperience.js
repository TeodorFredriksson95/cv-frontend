import { Icon } from '@iconify-icon/react';
import { useEffect, useRef } from 'react';
import createObserver from '../../util/createObserver';

import './WorkExperience.css'

const WorkExperience = () => {
    const para1 = useRef();
    const para2_overflow_1 = useRef();
    const para2_overflow_2 = useRef();
    const para3_overflow_1 = useRef();
    const para3_overflow_2 = useRef();
    const para4_overflow_1 = useRef();
    const para5_overflow_1 = useRef();
    const para5_overflow_2 = useRef();
    const para5_overflow_3 = useRef();
    const para5_overflow_4 = useRef();

    useEffect(() => {
        createObserver(para1, 'activate', 0.3);
        createObserver(para2_overflow_1, 'activate', 1);
        createObserver(para2_overflow_2, 'activate', 1);

        createObserver(para3_overflow_1, 'activate', 1, true);
        createObserver(para3_overflow_2, 'activate', 1, true);

        createObserver(para4_overflow_1, 'activate', .7, true);

        createObserver(para5_overflow_1, 'activate', .8, true);
        createObserver(para5_overflow_2, 'activate', .8, true);
        createObserver(para5_overflow_3, 'activate', .8, true);
        createObserver(para5_overflow_4, 'activate', .8, true);
    }, [])

    return (
        <div>
            <div className="leadership-header">
                <img src="leadershiptest1.png"/>
                <div className="leadershipTitles">
                    <div className='titles-line-height'>
                        <h1 className='section-title-h2'>Problem Solving</h1>
                        <h1 className='section-title-h2'>Reinvention</h1>
                        <h1 className='section-title-h2'>Leadership</h1>
                    </div>
                    <p className='section-title-h4'>The unexpected personal and professional gain from the retail
                industry - and the need for change.</p>
                </div>
            </div>
 
            <div className="graduation-text">
                <p className='narrator-paragraph-text work-experience-para1' ref={para1}>

                As the young man graduated from high school with a degree in 
                vehicles and transportation, he still felt his future career lied elsewhere. 
                Struggling with insecurity and a lack of conviction regarding his future career path, 
                he stumbled upon a temp job at a grocery store. 
                </p>
            </div>
            <div className="response-text">
                <div className='para2-overflow-1'>
                    <div className=' para2-overflow-text-1'ref={para2_overflow_1}>
                        <p className='response-paragraph' >
                            <span className='word-highlight-turq'>-”Perfect”</span> the young man thought to himself.
                        </p>
                    </div>
                    <div className='para2-overflow-text-2'ref={para2_overflow_2}>
                        <p className='response-paragraph'>
                            -”A chance to make some easy money while I figure out what I want to do with my life”.
                        </p>
                    </div>
                </div>
            </div>
            <div className="end-title ">
                <p className='continuations' id='and-so-he-did'>Little did he know, this choice would change him forever..</p>
            </div>
            <div className="flowchart-text-container">
                <div className="flow-chart-image">
                    <img src="flowchartedit1.png"/>
                </div>
                <div className="flowchart-text">
                <div className='para3-overflow-text-1' ref={para3_overflow_1}>
                        <p className='narrator-paragraph-text' >
                            The young man came to realize quickly, that this store was <span className='word-highlight-turq'>revered</span>. 
                            Both by customers and by competitors. The expectations were high.
                        </p>
                    </div>
                    <div className='para3-overflow-text-2' ref={para3_overflow_2}>
                        <p className='narrator-paragraph-text'>
                            First class customer service, a creatively organized stock, beautifully 
                            stocked shelves and a gross profit rivaled by few  - all made possible by daily
                            analysis and a <span className='word-highlight-pink'>breakneck</span> pace.
                        </p>
                    </div>
                </div>

            </div>

            <div className="second-flowchart-container">
                <div className="second-flowchart-text" ref={para4_overflow_1}>
                    <p className='narrator-paragraph-text'>
                    This suited the young man perfectly. He quickly rose 
                    through the ranks, showing promise through initiative and 
                    commitment and even got the chance to attend a <span className='word-highlight-turq'>“Business and Leadership”</span> program. 
                    </p>
                </div>
                <div className="second-flowchart-image">
                    <img src="workflowsecondedit1.png"/>
                </div>
            </div>
            <div className="scorecard-and-text-flex-container">
                <div className="scorecard-container">
                    <h1>Dailies</h1>
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
                            {/* Originially next to last */}
                    <div className='para5-overflow-text-3' ref={para5_overflow_3}>
                        <p className='narrator-paragraph-text '>
                            The young man believed there was <span className='word-highlight-pink'>always</span> valuable life lessons to be found, even in the most mundane tasks.<br/>
                        </p>
                    </div>
                        {/* Originally second */}
                    <div className='para5-overflow-text-2' ref={para5_overflow_2}>
                        <p className='narrator-paragraph-text '>
                            As he grew with his experiences, he wished for nothing more than to <span className='word-highlight-pink'>help</span> others reach their own dreams and goals.<br/>
                        </p>
                    </div>
                    {/* Originally last */}
                    <div className='para5-overflow-text-4' ref={para5_overflow_4}>
                        <p className='narrator-paragraph-text '>
                            He took great pride in his effort to inspire and <span className='word-highlight-pink'>motivate</span> his peers, as someone had previously done for him.<br/>
                        </p>
                    </div>
                    <div className='para5-overflow-text-1' ref={para5_overflow_1}>
                        <p className='narrator-paragraph-text '>
                            {/* Originally first */}
                            For the longest time, he felt great satisfaction in striving for new knowledge and converting this into substantial <span className='word-highlight-pink'>results</span>.<br/>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WorkExperience;