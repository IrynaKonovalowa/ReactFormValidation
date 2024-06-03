class LoginField extends React.Component {
    constructor(props) {
        super(props);
        let isValid = this.validate(props.value);
        this.state = { value: props.value, valid: isValid };
        this.onChange = this.onChange.bind(this);
    }
    validate(val) {
        return val.length > 2;
    }

    onChange(e) {
        let val = e.target.value;
        let isValid = this.validate(val);
        this.setState({ value: val, valid: isValid });
    }
    render() {
        let displ = this.state.valid === true ? "none" : "block";
        return (
        <p>
            <label class="name">Login:</label><br />
            <input class="inputField" type="text" value={this.state.value} onChange={this.onChange}  />
            <span style={{ display: displ }}>Login not specified</span>
        </p>
        );
    }
}
