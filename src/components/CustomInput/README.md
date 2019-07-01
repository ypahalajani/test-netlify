```jsx
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Initial text'
      }
      this.inputRef = React.createRef();
      this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }
    inputChangeHandler(event) {
      this.setState({
        value: event.target.value
      })
    }
    componentDidMount() {
      // Setting initial state value
      const inputElement = this.inputRef.current;
      inputElement.value = this.state.value;
    }
    render() {
      return <CustomInput name="yash-input"
        inputRef={this.inputRef}
        style={{
          width: '200px',
          height: '20px',
          padding: '2px'
        }}
        onChange={this.inputChangeHandler} />
    }
  }
  <MyComponent />
```