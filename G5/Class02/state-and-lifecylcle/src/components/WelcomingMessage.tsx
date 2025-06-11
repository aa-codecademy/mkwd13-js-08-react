interface WelcomeMessageProps {
    userName: string
}

// STATELESS COMPONENT (DUMB COMPONENT)
export const WelcomeMessage = (props: WelcomeMessageProps) => {
    return (
        <div>
            <h3>Hello, {props.userName}</h3>
        </div>
    )
}