import { useEffect, useState } from "react"

interface Todo {
    id: number
    title: string
}

export const LifecycleDemo = () => {
    const [message, setMessage] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]); // This way we can set the TYPE of the state variable

    // This effect will execute only once, on the INITIAL RENDER
    // the component is mount
    useEffect(() => {
        // ovaa funkcionalnost
        console.log('Component is mount, the effect is executed only once, on the initial render');

        // simulating API request
        setTimeout(() => {
            const todosReponse = [{id: 1, title: 'Learn React'}, {id: 2, title: 'Walk the dog'}];

            console.log('Results are fetched', todosReponse);

            setTodos(todosReponse)
        }, 1500);
    }, []);


    // This effect will execute on the initial render and on each value change
    // of the values/variables listed in the dependency array.
    useEffect(( ) => {
        console.log('Component DID update/change, the message state prop/variable did change')
        const vowels = ['a', 'e', 'i', 'o', 'u'];

        const isVowelPresent = vowels.some((letter) => message.includes(letter));

        if(isVowelPresent){
            alert('There is vowel in the message!!')
        }


    }, [message])

    // This effect will execute on each re-render of the component
    // NOTE: 
    useEffect(() => {
        console.log('Effect executed on re-render')
    });

    return (
        <div>
            <h3>Demo code</h3>

            <ul>
                {todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
            </ul>

            <input type="text" onChange={(event) => {
                const value = event.target.value;

                setMessage(value)
            }} />

            <p>{message}</p>
        </div>
    )
};