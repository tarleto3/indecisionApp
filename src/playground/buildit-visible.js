//This app shows and hides a P tag with content based on details being shown or hidden

const root = document.getElementById("app");

let details;

const showDetails = () => {
  if (details) {
    details = "";
  } else {
    details = "Here are some details about the thing";
  }
  renderApp();
};

const renderApp = () => {
  const appTemplate = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={showDetails}>{details ? 'Hide' : 'Show'} Details</button>
      <p>{details}</p>
    </div>
  );
  ReactDOM.render(appTemplate, root);
};

renderApp();
