export const Students = () => {
    const students = [
        {id: 1, fullName: 'Alice Johnson', age: 18},
        {id: 2, fullName: 'John Doe', age: 24},
        {id: 3, fullName: 'Bob Bobski', age: 22}
    ]

    return (
        <>
            <h3>Students mapping example</h3>

            {/* <ul>   
                <li>{students[0].fullName}</li>
                <li>{students[1].fullName}</li>
                <li>{students[2].fullName}</li>
            </ul> */}

            <ul>
                {students.map((student) => {
                    // Every dinamyc RENDERED JSX MUST HAVE UNIQUE KEY VALUE
                    return <li key={student.id}>{student.fullName}</li>
                })}
            </ul>
        </>
    )
}