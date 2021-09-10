import React from 'react';
import './App.css';

const solarBodies = [
  {'body': 'Earth', 'weightFactor': 1.00, 'comment': "I already knew this..."},
  {'body': 'Sun', 'weightFactor': 27.07, 'comment': "Gee, it's hot here!"},
  {'body': 'Mercury', 'weightFactor': 0.38, 'comment': "Einstein, what's my precession?"},
  {'body': 'Venus', 'weightFactor': 0.91, 'comment': "Oo-la-la"},
  {'body': 'Moon', 'weightFactor': 0.165, 'comment': "Lookin' good"},
  {'body': 'Mars', 'weightFactor': 0.38, 'comment': "Watch out for little green men"},
  {'body': 'Jupiter', 'weightFactor': 2.43, 'comment': "...it's all muscle!"},
  {'body': 'Saturn', 'weightFactor': 1.06, 'comment': "Ooo...pretty rings"},
  {'body': 'Uranus', 'weightFactor': 0.92, 'comment': "...I'm not going there..."},
  {'body': 'Neptune', 'weightFactor': 1.19, 'comment': "Where's Aquaman?"},
  {'body': 'Pluto', 'weightFactor': 0.06, 'comment': "My toes are cold"}
]

function App() {
  //states
  const [units, setUnits] = React.useState('lbs');
  const [weight, setWeight] = React.useState(100);
  const [solarBody, setSolarBody] = React.useState('Earth');
  // const [calculation, setCalculation] = React.useState(null);

  //functions
  const onChangeUnitSelect = (event) => {
    setUnits(event.target.value)
  };
  const onChangeWeightInput = (event) => {
    setWeight(event.target.value)
  };
  const onChangeSolarBodySelect = (event) => {
    setSolarBody(event.target.value)
  };
  const calculate = () => {
    for (let bodyObject of solarBodies) {
      if(solarBody == bodyObject.body) {
        return (bodyObject.weightFactor * weight)
      };
    };
  };
  const comment = () => {
    for (let bodyObject of solarBodies) {
      if(solarBody == bodyObject.body) {
        return (bodyObject.comment)
      };
    };
  }

  return (
    <div className="App">

      <header>Astroweight Calculator</header>
      <p>What would I weigh on a different solar system body?</p>
      <hr />

      <div>
        <span>Select preferred units</span>
        <select
          className='select'
          id='units'
          onChange={(event) => onChangeUnitSelect(event)}
          defaultValue={units}
        >
          <option value='lbs'>lbs</option>
          <option value='kg'>kg</option>
        </select>
      </div>

      {/* Change to update on submit instead of event? */}
      <p>My weight on earth is
        <input 
          className='input'
          id='weight'
          type='text'
          onChange={(event) => onChangeWeightInput(event)}
          defaultValue={weight}
          placeholder='enter weight'
        >
        </input>
        {units}
      </p> 

      <p>
        Select a solar system body
        <select
          className='select'
          id='solarBodies'
          onChange={(event) => onChangeSolarBodySelect(event)}
          defaultValue='austen'
        >
          {solarBodies.map((body, index) => {
            return <option value={body.body} key={index}>{body.body}</option>
          })}
      </select>
      </p>

      <hr />
      <p>On {solarBody}, I weigh {calculate()} {units}</p>
      <p>{comment()}</p>

    <p>*** Pluto <strong>IS</strong> a planet ***</p>
    </div>
    
  );
}

export default App;
