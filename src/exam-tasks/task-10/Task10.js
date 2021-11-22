
const Task10 = () => {
  return (
    <div>
      <h3>Joke:</h3>
      <p>Why couldn't the React component understand the joke?
        Because it didn't get the context.</p>
      <h3>Explanation:</h3>
      <p>One of React's functionalities is called Context
        and it allows (no matter how deeply) nested components
        access data passed to said Context.</p>
      <p>Component couldn't get
        the joke because it wasn't nested in a component that provides required Context.
      </p>
      <details><b>Making it an inside joke 😉.</b></details>
    </div>
  )
}

export default Task10;
/* Task 10
Įsivaizduokite, kad papasakojate žemiau pateiktą JOKE kolegai, kuris nėra dirbęs
su React.js ir jis nesijuokia, nes nesuprata jo. Paaiškinkite žemiau jį jam

JOKE:
Why couldn’t the React component understand the joke? 
Because it didn’t get the context.

Jūsų paaiškinimas:

*/
