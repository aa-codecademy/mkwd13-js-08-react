import './App.css'
import WelcomingMessage from './components/WelcomingMessage/WelcomingMessage';
import { StyleExample } from './components/StyleExample/StyleExample';
import { PropsExample } from './components/PropsExample/PropsExample';
import { Students } from './components/Students/Students';

// 1. Functinal component
function App() {
  const title = "Hello from first react app.";

  const studentName = "John Doe";
  const studentAge = 17; // change to 18 or above so you can see the conditional rendered code
  const isEnrolled = false;

  const displayTodayDate = () => {
    const dateString = new Date().toDateString();

    return dateString
  }

  // 2. JSX expression must have 1 CONTAINER(PARENT) element
  return (
    <div>
      <h1>
        {title}
      </h1>
      <p>
        Today we learn react.
      </p>

      <hr />
      <h2>JSX</h2>
      <p>Student fullname: {studentName}</p>
      <p>Student age: {studentAge}</p>
      <p>Today is: {displayTodayDate()} </p>


      {/* Conditional rendering */}
      {isEnrolled ? <p>Yes student is enrolled</p> : <p>No, Student is not enrolled</p> }

      {studentAge >= 18 && (
        <p>Student is adult.</p>
      )}

      <hr />
      <h2>Components</h2>
      {/* HTML => Self closing tag
       This is the way to RENDER the component
      */}
      <WelcomingMessage />
      <hr />
      <h2>Styles Example</h2>
      <StyleExample />

      <hr />
      <h2>Props demo</h2>

      {/* Props KEY=VALUE */}
      {/* 1st time */}
      <PropsExample title={'Props Example'} description={'Some description'} className='propsClassOne'/>

      {/* 2nd time */}
      <PropsExample title="New title" description='some other description' className='propsClassTwo'/>

      <hr />
      <h2>Mapping example</h2>
      <Students />
    </div>
  )

  
}

export default App
