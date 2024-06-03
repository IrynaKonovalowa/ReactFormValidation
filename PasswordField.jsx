class PasswordField extends React.Component {
  constructor(props) {
    super(props);
    let isValid = this.validate(props.value);
    let isValidConfirm = this.validateConfirm(props.value,"");
    this.state = { value: props.value, valueConfirm: '', valid: isValid, validConfirm: isValidConfirm};
    this.onChange = this.onChange.bind(this);
    this.onChangeConfirm = this.onChangeConfirm.bind(this);
}
validate(val) {
    return val.length >= 3 && val.length <= 10;
}
validateConfirm(val, val2) {
    // return val = this.state.value;
    return val == val2;
}
onChange(e) {
    let val = e.target.value;
    let isValid = this.validate(val);    
    this.setState({ value: val, valid: isValid});
}
onChangeConfirm(e) {
    let val = e.target.value;
    let isValidConfirm = this.validateConfirm(this.state.value, val);    
    this.setState({ valueConfirm: val, validConfirm: isValidConfirm});
}

render() {
    let displ = this.state.valid === true ? "none" : "block";
    let displ2 = this.state.validConfirm === true ? "none" : "block";
    return (
    <p>
        <label class= "name">Password:</label><br />
        <input class="inputField" type="password" value={this.state.value} onChange={this.onChange}  />
        <span style={{ display: displ }}>Password must be from 3 to 10 characters</span>
        <br />
        <br /><label class= "name">PasswordConfirm:</label><br />
        <input class="inputField" type="password" value={this.state.valueConfirm} onChange={this.onChangeConfirm} />
        <span style={{ display: displ2 }}>Password mismatch</span>
    </p>
    );
}
}