import './ShiftingDirections.css'
import createObserver from '../../util/createObserver';

import { useEffect, useRef } from 'react';

const ShiftingDirections = () => {
    const image_overflow = useRef();
    const title_overflow = useRef();
    const cannon1 = useRef();

    const para6_overflow_container_1 = useRef();
    const para6_overflow_container_2 = useRef();
    const para6_overflow_container_3 = useRef();
    const para6_overflow_container_4 = useRef();

    const para7_overflow_container_1 = useRef();
    const para7_overflow_container_2 = useRef();
    const para7_overflow_container_3 = useRef();
    const para7_overflow_container_4 = useRef();
    const para7_overflow_container_5 = useRef();
    const para7_overflow_container_6 = useRef();
    const para7_overflow_container_7 = useRef();
    const para7_overflow_container_8 = useRef();

    const mobileCannon1 = useRef();
    const mobileCannon2 = useRef();
    const mobileCannon3 = useRef();
    const mobileCannon4 = useRef();
    const mobileCannon5 = useRef();
    const mobileCannon6 = useRef();


    useEffect(() => {
        createObserver(image_overflow, 'activate', 0.3, true);
        createObserver(title_overflow, 'activate', 0.3, true);

        createObserver(para6_overflow_container_1, 'activate', 0.3, true);
        createObserver(para6_overflow_container_2, 'activate', 0.3, true);
        createObserver(para6_overflow_container_3, 'activate', 0.3, true);
        createObserver(para6_overflow_container_4, 'activate', 1, true);

        createObserver(para7_overflow_container_1, 'activate', 1, true);
        createObserver(para7_overflow_container_2, 'activate', 1, true);
        createObserver(para7_overflow_container_3, 'activate', 1, true);
        createObserver(para7_overflow_container_4, 'activate', 1, true);
        createObserver(para7_overflow_container_5, 'activate', 1, true);
        createObserver(para7_overflow_container_6, 'activate', 1, true);
        createObserver(para7_overflow_container_7, 'activate', 1, true);
        createObserver(para7_overflow_container_8, 'activate', 1, true);

        createObserver(mobileCannon1, 'activate', .6, true);
        createObserver(mobileCannon2, 'activate', .6, true);
        createObserver(mobileCannon3, 'activate', .6, true);
        createObserver(mobileCannon4, 'activate', .6, true);
        createObserver(mobileCannon5, 'activate', .6, true);
        createObserver(mobileCannon6, 'activate', .6, true);

        createObserver(cannon1, 'activate', .5, true);

    },[])
    return (
        <div className="parent-container-shifting-directions">
            <div className="header-image-container">
                <div className='we-image-overflow-container' ref={image_overflow}>
                    <img src="shiftingdirectionsedit1.png"/>
                </div>
                <div className='we-title-overflow-container' ref={title_overflow}>
                    <h1 className='section-title-h1'>Shifting<br/>Directions</h1>
                </div>
            </div>
            <div className="changing-paths-container-one">
                <div className='para6-overflow-container-1' ref={para6_overflow_container_1}>
                    <p className='narrator-paragraph-text '>
                    After six years, the job which was once meant to be temporary, had turned into something else entirely. It had served as the young mans proving grounds, demanding him to explore his strengths and weaknesses and he had loved it. But it was about to come to and <span className='word-highlight-pink'>end</span>.
                    </p>
                </div>
                <div className='para6-overflow-container-2' ref={para6_overflow_container_2}>
                    <p className='narrator-paragraph-text'>
                    The young man felt his current path forced him into a static sense of forward. He wanted more than that, or at least something different. Somewhere, or something, that could feed his thirst for learning <span className='word-highlight-turq'>new</span> things while still being able to put his creativity to use and see tangible results. And once again test the mettle of his skill.
                    </p>
                </div>
                <div className='para6-overflow-container-3' ref={para6_overflow_container_3}>
                    <p className='narrator-paragraph-text'>
                    And so the young man reflected upon what he truly wanted in life. Eventually he boiled it down to the <span className='word-highlight-pink'>following</span>;
                    </p>
                </div>
                <div className='para6-overflow-container-4' ref={para6_overflow_container_4}>
                    <p className="response-text-one response-paragraph">
                    “No matter where I go, I want to be able to do and live by my work. Free from local economy, free from geographical confines and free to pursue life as it happens.”
                    </p>
                </div>
            </div>
            <div className="changing-paths-container-two">
                <div className='para7-overflow-container-1' ref={para7_overflow_container_1}>
                        <p className='narrator-paragraph-text'>
                        The young man scratched his head.
                        </p>
                    </div>
                <div className='para7-overflow-container-2' ref={para7_overflow_container_2}>
                    <p className="response-text-two response-paragraph">
                    “How, oh how will I ever be able to live and work as I desire?”
                    </p>
                </div>
                <div className='para7-overflow-container-3' ref={para7_overflow_container_3}>
                    <p className='narrator-paragraph-text'>
                    And so it happened, that a dear friend of his had recently started working as an IT-recruiter.
                    </p>
                </div>
                <div className='para7-overflow-container-4' ref={para7_overflow_container_4}>
                    <p className="response-text-three response-paragraph">
                    -“Oh boy, you should totally check out <span className='word-highlight-pink'>.NET!</span> They all seem wanting for <span className='word-highlight-turq'>nothing</span>.”
                    </p>
                </div>
                <div className='para7-overflow-container-5' ref={para7_overflow_container_5}>
                    <p className="dot-what-text narrator-paragraph-text">
                        At first the young man shrugged at this. <span className='word-highlight-pink'>Dot-who-the-what-now? </span>
                        But time is a funny thing and in quiet contemplation he started to reminisce about the days when he tried to make a website for his fathers football supporter club.
                    </p>
                </div>  
                <div className='para7-overflow-container-6' ref={para7_overflow_container_6}>
                    <p className="dot-what-text narrator-paragraph-text">
                    As if fate waved its magic wand the man was filled with a sudden glee he hadn’t felt since he was a child. He remembered the script tags and laughed to himself.
                    </p>
                </div>
                <div className='para7-overflow-container-7' ref={para7_overflow_container_7}>
                    <p className="response-text-four response-paragraph">
                    “I’m wiser now. Better. Stronger. <span className='word-highlight-turq'>FASTER!</span> I can do anything. And this might just be perfect!”
                    </p>
                </div>
                <div className='para7-overflow-container-8' ref={para7_overflow_container_8}>
                    <p className="dot-what-text narrator-paragraph-text last">
                    It wasn’t long before he found himself in a classroom with a teacher at the helm of the metaphorical cannon of knowledge, firing concept after concept.
                    </p>
                </div>
            </div>
            <div className="launching-concepts-absolute-container cannon-container" ref={cannon1}>
                <h2  className='concept1' id="concept1">"Variables!"</h2>
                <h2 id="concept2">"Data types!"</h2>
                <h2 id="concept3">"Arrays!"</h2>
                <h2 id="concept5">"The four pillars!"</h2>
                <h2 id="concept6">"MVC!"</h2>
                <h1 id="concept4">"The red wiggle is your<br/> <span className="wiggle">FRIEND!</span>"</h1>
            </div>
            <div className="launching-concepts-absolute-container-mobile">
                <div className='launching-concept1' ref={mobileCannon1}>
                    <h2>"Variables!"</h2>
                </div>
                <div className='launching-concept2' ref={mobileCannon2}>
                    <h2>"Data types!"</h2>
                </div>
                <div className='launching-concept3' ref={mobileCannon3}>
                    <h2>"Arrays!"</h2>
                </div>
                <div className='launching-concept4' ref={mobileCannon4}>
                    <h2>"The four pillars!"</h2>
                </div>
                <div className='launching-concept5' ref={mobileCannon5}>
                    <h2>"MVC!"</h2>
                </div>
                <div className='launching-concept6' ref={mobileCannon6}>
                    <h2>"The red wiggle </h2>
                    <h2>is your</h2>
                    <h2><span className="wiggle">FRIEND!</span>"</h2>
                </div>
            </div>
        </div>
    )
}

export default ShiftingDirections;