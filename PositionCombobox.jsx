class PositionCombobox extends React.Component {
  constructor(props) {
    super(props);
    let isValid = this.validate(this.props.selected);
    console.log(this.props.selected);
    console.log(isValid);
    this.state = { selected: this.props.selected, values: ['Director', 'Deputy director', 'Project manager', 'Department head', 'Programmer', 'Designer', 'Consultant', 'Employe'], valid: isValid};
    this.onChange = this.onChange.bind(this);
}
validate(val) {
  return val.length > 1 && val !== '------- Choose position -------';
}

onChange(e) {
    let val = e.target.value;    
    console.log(val);
    let isValid = this.validate(val);
    this.setState({ selected: val, valid: isValid });
}  
  render() {
    let displ = this.state.valid === true ? "none" : "block";
    return <p>     
      <label class= "name">Position:</label>
      <select onChange={this.onChange}>
      <option>------- Choose position -------</option>
      <option>{this.state.values[0]}</option>
      <option>{this.state.values[1]}</option>
      <option>{this.state.values[2]}</option>
      <option>{this.state.values[3]}</option>
      <option>{this.state.values[4]}</option>
      <option>{this.state.values[5]}</option>
      <option>{this.state.values[6]}</option>
      <option>{this.state.values[7]}</option>
      </select>       
      <span style={{ display: displ }}>Position not selected</span>
      </p>
  }
}