console.log("App.js is running");

const root = document.getElementById("app");

const numbers = [55, 101, 1000, 64654];

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
};
//The browser does not understand JSX. You need to use a compiler (babel) to compile the code down to createElement calls with REACT

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value; //get the target that the event was triggered on get
  //the elements, get the element named option and the value submitted

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
  }
};

const removeOptions = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const selectedOption = app.options[randomNum];
    alert(selectedOption);
};

const renderApp = () => {
  const appTemplate = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options && app.options.length > 0
          ? "Here are your options "
          : "No options"}
      </p>
      <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeOptions}>Remove All</button>
      <ol>
        {app.options.map((option) => {
          return <li key={app.options.indexOf(option)}>Option: {option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(appTemplate, root);
};

renderApp();
