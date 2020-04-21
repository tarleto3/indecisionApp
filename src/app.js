class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer!";
    const options = ["thing one", "thing two", "thing three"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handlePick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What Should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this); //bind this to the REACT component and 
    //not an event handler
  }

  handleRemoveAll() {
    console.log(this.props.options);
  }

  render() {
    return (
      <div>
        {this.props.options.map((option) => (
          <Option
            key={this.props.options.indexOf(option)}
            optionText={option}
          />
        ))}
        <button onClick={this.handleRemoveAll}>Remove All</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>Option: {this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const newOption = e.target.elements.option.value.trim();
    if (newOption) {
      alert(newOption);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
