let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const resetCount = () => {
  count = 0;
  renderCounterApp();
};

const root = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}> + 1</button>
      <button onClick={minusOne}> - 1</button>
      <button onClick={resetCount}> reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, root); //first arg is the JSX, the second is the DOM element you want to render into
};

renderCounterApp();
