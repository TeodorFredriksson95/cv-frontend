import React, { useEffect, useRef } from 'react';
import createObserver from '../../util/createObserver';
import './TimeLineWebDev.css'

const TimeLineWebDev = () => {
    const webDevRef = useRef(); // Ref for the web-dev container
    const h3Ref = useRef();
    const pRef = useRef();
    const imageP = useRef();

    useEffect(() => {
     createObserver(webDevRef, 'animate', 0.1, true)
     createObserver(h3Ref, 'animate', 0.1)
    createObserver(pRef, 'animate', 1)
    createObserver(imageP, 'activate', 0.3);
        

    }, []);

    return (
        <div className="web-dev-container">
            <div className="web-dev-title ">
                <div className='section-title-h2 one'  ref={webDevRef}>
                    <h1>"</h1><h1>W</h1><h1>o</h1><h1>W</h1><h1>!</h1><h1>"</h1>
                </div>
                <h3 id="webdev-h3" className='section-title-h3' ref={h3Ref}>Web development looks so cool!</h3>
                <p id="webdev-p" className='narrator-paragraph-text' ref={pRef}>But will the script tag prove too great a foe?</p>
            </div>
            <div className='svg-container'>
                <img src='keeperedit3.svg'></img>
                <p ref={imageP} id='curtain-text'>As chance would have it, the young boys father would at this time become the founder of a swedish branch of a german football  supporter club. Thus, he tasked the child with creating a website.</p>
            </div>
            <div className='web-dev-continuation'>
                <h1 className='continuations' id='and-so-he-did'>And so he did...</h1>
                <div className='image-container'>
                    <img src='htmlcomputer.png'/>
                    <img src='htmlcomputer.png'/>
                    <img src='htmlcomputer.png'/>
                </div>
            </div>
            <div className='web-dev-magic-paragraph-container'>
            <div className='ominous-thought'>
                    <p className='narrator-paragraph-text'>
                    But while the h1, h2, and even h3 tags seemed fun,
                    and the little invisible boxes that let him place his navigation 
                    bar <span className='word-highlight'>right</span> at the top of the page worked just like magic, he eventually started 
                    to think ominous thoughts..
                    </p>
                </div>
                <div className='happy-thought'>
                    <p className='response-paragraph'>
                        “..Boy, I could spend a whole lifetime just browsing any of these amazing pages!
                        <span className='thought-word-highlight' ><br/>I'm getting pretty good at this!</span>”
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TimeLineWebDev;
