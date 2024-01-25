
import './ScriptVsDev.css'

const ScriptVsDev = () => {
    return (
        <div>

        <div className="versus-div-container">

            {/* make three divs */}

            {/* div 1 - script combatant - 3 lines of text in one column */}
            <div className="script-combatant-container">
                <h3>&lt;Script&gt;</h3>
                <p>//Your script here..</p>
                <h3>&lt;/Script&gt;</h3>
            </div>
            {/* div 2 - vs image - positioned higher on y axis */}
            <div className="versus-image">
                <img src="Versusedit3.png"/>
            </div>
            {/* div 3 - text tag and img */}
            <div className="versus-image-and-title">
                <h3>Lil' Dev</h3>
                <img src="youngdevedit1.png"/>
            </div>
        
            
            </div>
            <div className="versus-script-tag-paragraph colorPara">
                <p>
                The time had come for a storefront to be implemented. 
                The boy was somewhat restrained as he looked upon this new <span>&lt;script&gt;</span> tag.
                     But he knew all things must end - even his own trepidation.
                      And so he decided to charge the problem head on like never before. 
                      <br/><br/>Some would’ve called him a natural, the way he handled the copy paste mechanics. 
                </p>
            </div>
            <div className="versus-script-ending colorPara">
                <p>
                Alas, the errors of unknown that washed over the 
                young developer proved too much for his mind to handle and he <span><br></br>quit...</span>
                </p>
            </div>
            <div className="versus-script-cliffhanger colorPara">
                <p>
                ...for a time.
                </p>
            </div>
        </div>
    )
}

export default ScriptVsDev;