import './HeroContent.css'

const HeroContent = () => {
    return (
        <div className="hero-content clearfix">
            {/* Header title */}
            <div className="hero-title">
                <h1>A Junior Developers Journey</h1>
            {/* subtitle */}
                <h4>From zero to wannabe virtual life changing hero</h4>
            </div>

            <div className="logo">
                <img width={"60%"} src="/cvlogoedit4png.png"/>
            </div>
        </div>

    )
};


export default HeroContent;