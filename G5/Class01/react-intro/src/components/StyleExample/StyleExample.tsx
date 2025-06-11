// METHOD #1 
import './StyleExample.css'; 


// METHOD #2
import styles from "./StyleExample.module.css"


export const StyleExample = () => {

    
    return (
        <div>
            <h3>React styling 🎨</h3>

            {/* METHOD #1 EXAMPLE */}
            <div className="css-styled-box green-border">
                <h3>Example, imported CSS File</h3>
                <p>This box is styled using classes from StyleExample.css</p>
            </div>

            {/* METHOD #2 */}
            <div className={styles.moduleBox}>
                <h3>Example, CSS Modules</h3>
                <p>This box is styled using CSS modukes (scoped styles)</p>
            </div>

            {/* METHOD #3 */}
            <div style={{
                backgroundColor: 'ButtonFace',
                padding: '20px',
                border: '2px solid white'
            }}>
                <h3>Example, Inline Styles</h3>
                <p>This box is styled using INLINE styles.</p>
            </div>
        </div>
    )
};

