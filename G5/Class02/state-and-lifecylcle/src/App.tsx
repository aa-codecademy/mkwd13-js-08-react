import './App.css'
import { Counter } from './components/Counter';
import { WelcomeMessage } from './components/WelcomingMessage';
import { ColorPicker } from './components/ColorPicker';
import { useState } from 'react';
import { LifecycleDemo } from './components/LifecycleDemo';

function App() {

  // let color = "#df3030";
  const [color, setColor] = useState("#df3030")


  const handleChangeColor = (hexColor: string) => {
    console.log(`Color recieved in PARENT: ${hexColor}`)
    setColor(hexColor)
  };

  return (
    <main className='app'>
      {/* STATE DEMO */}
      <section className='section'>
        <h2>State management - stateful (useState)</h2>
        <Counter />
      </section>

      {/* STATELESS COMPONENT DEMO */}
      <section className='section'>
        <h2>Stateless</h2>
        <WelcomeMessage userName='JohnDoe'/>
      </section>

      {/* CHILD TO PARENT COMMUNICATION */}
      <section className='section'>
        <h2>Parent to child communication</h2>
        <p>Parent recieved color from child: <span style={{
          color: color
        }}>SELECTED COLOR</span></p>
        <ColorPicker handleChangeColor={handleChangeColor} />
      </section>

      {/* LIFECYCLE (useEffect) */}
       <section className='section'>
        <h2>Lifecycle</h2>
        <LifecycleDemo />
      </section>
    </main>
  )
}

export default App
