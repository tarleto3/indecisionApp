class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowDetail = this.handleShowDetail.bind(this);
    this.state = {
      details: "",
    };
  }

  handleShowDetail() {
    this.setState((prevState) => {
      if (prevState.details) {
        return {
          details: "",
        };
      } else {
        return {
          details: "Here are some details",
        };
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleShowDetail}>{this.state.details ? 'Hide ' : 'Show '}Details</button>
        <p>{this.state.details}</p>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// //This app shows and hides a P tag with content based on details being shown or hidden

// const root = document.getElementById("app");

// let details;

// const showDetails = () => {
//   if (details) {
//     details = "";
//   } else {
//     details = "Here are some details about the thing";
//   }
//   renderApp();
// };

// const renderApp = () => {
//   const appTemplate = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={showDetails}>{details ? 'Hide' : 'Show'} Details</button>
//       <p>{details}</p>
//     </div>
//   );
//   ReactDOM.render(appTemplate, root);
// };

// renderApp();
