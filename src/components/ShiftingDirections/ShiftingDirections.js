import './ShiftingDirections.css'
import createObserver from '../../util/createObserver';

import { useEffect, useRef } from 'react';

const ShiftingDirections = () => {
    const image_overflow = useRef();
    const title_overflow = useRef();
    useEffect(() => {
        createObserver(image_overflow, 'activate', 0.3, true);
        createObserver(title_overflow, 'activate', 0.3, true);

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
                <p className='narrator-paragraph-text'>
                After six years, the job which was once meant to be temporary, had turned into something else entirely. It had served as the young mans proving grounds, demanding him to explore his strengths and weaknesses and he had loved it. But it was about to come to and end.
                </p>
                <p className='narrator-paragraph-text'>
                The young man felt his current path forced him into a static sense of forward. He wanted more than that, or at least something different. Somewhere, or something, that could feed his thirst for learning new things while still being able to put his creativity to use and see tangible res. And once again test the mettle of his skill.
                </p>
                <p className='narrator-paragraph-text'>
                And so the young man reflected upon what he truly wanted in life. Eventually he boiled it down to the following;
                </p>
                <p className="response-text-one response-paragraph">
                “No matter where I go, I want to be able to do and live by my work. Free from local economy, free from geographical confines and free to pursue life as it happens.”
                </p>
            </div>
            <div className="changing-paths-container-two">
            <p className='narrator-paragraph-text'>
            The young man scratched his head.
            </p>
            <p className="response-text-two response-paragraph">
            “How, oh how will I ever be able to live and work as I desire?”
            </p>
            <p className='narrator-paragraph-text'>
            And so it happened, that a dear friend of his had recently started working as an IT-recruiter.
            </p>
            <p className="response-text-three response-paragraph">
            -“Oh boy, you should totally check out <span className='word-highlight'>.NET!</span> They all seem wanting for <span className='word-highlight'>nothing</span>.”
            </p>
            <p className="dot-what-text narrator-paragraph-text">
                At first the young man shrugged at this. Dot-who-the-what-now?
                But time is a funny thing and in quiet contemplation he started to reminisce about the days when he tried to make a website for his fathers football supporter club.
            </p>
            <p className="dot-what-text narrator-paragraph-text">
            As if fate waved its magic wand the man was filled with a sudden glee he hadn’t felt since he was a child. He remembered the script tags and laughed to himself.
            </p>
            <p className="response-text-four response-paragraph">
            “I’m wiser now. Better. Stronger. <span className='word-highlight'>FASTER!</span> I can do anything. And this might just be perfect!”
            </p>
            <p className="dot-what-text narrator-paragraph-text last">
            It wasn’t long before he found himself in a classroom with a teacher at the helm of the metaphorical cannon of knowledge, firing concept after concept.
            </p>
            </div>
            <div className="launching-concepts-absolute-container">
                <h2 id="concept1">"Variables!"</h2>
                <h2 id="concept2">"Data types!"</h2>
                <h2 id="concept3">"Arrays!"</h2>
                <h1 id="concept4">"The red wiggle of death is your <span className="wiggle">FRIEND</span>!"</h1>
                <h2 id="concept5">"The four pillars!"</h2>
                <h2 id="concept6">"MVC!"</h2>
            </div>
        </div>
    )
}

export default ShiftingDirections;