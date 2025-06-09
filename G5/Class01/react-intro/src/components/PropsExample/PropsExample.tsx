import React from "react";

interface PropsExampleProps {
    title: string
    description: string
    className?: string
}

export const PropsExample = (props: PropsExampleProps) => {
    console.log(props)
    return (
        // Instead of using container element, we can use react fragment so our
        // jsx expression can have 1 parent element.

        // NOTE: On the React Fragment we cannot add class
        // React.Fragment syntax #1
        // <React.Fragment>
        //     <h3>{props.title}</h3>
        //     <p>{props.description}</p>
        // </React.Fragment>
        

        // React.Fragment syntax #2
        // <>
        //     <h3>{props.title}</h3>
        //     <p>{props.description}</p>
        // </>

        // We use div (container element) this time, so we can add a class
        <div className={props.className}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}