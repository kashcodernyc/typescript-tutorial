type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props;
    return (
        <div>
            <h2>
            {props.isLoggedIn 
                ? `Hello ${props.name}! you have ${props.messageCount} messages`
                : `welcome guest`
            }
            </h2>
        </div>
    )
}