class GenderRadiobutton extends React.Component {
  constructor(props) {
    super(props);    
    this.state = { selected: this.props.selected,  valid: "true" };
    this.onChange = this.onChange.bind(this);
}

onChange(e) {
    let val = e.target.value;    
    console.log(val);
    this.setState({ selected: val });
}
render() {
   
    return (
    <p>
        <label class= "name">Gender:  </label><br />
        <label >
        <input type="radio" name="Male" value="Male" checked = {this.state.selected === 'Male'? true: false} onChange={this.onChange} /> Male
        </label>
        <label >
        <input type="radio" name="Female" value="Female" checked = {this.state.selected === 'Female'? true: false} onChange={this.onChange} /> Female
        </label>
      
    </p>
    );
}
}