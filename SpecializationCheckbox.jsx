class SpecializationCheckbox extends React.Component {
    constructor(props) {
        super(props);
        let isValid = this.validate(this.props.values);    
        this.state = {values: this.props.values, valid: isValid};
        this.onChange = this.onChange.bind(this);
    }

    validate(val) {
        return val.length > 0;
    }
    onChange(e) {
        let val = e.target.value;    
        console.log(val);
        console.log(this.state.values);        
        let res =[];
        if(this.state.values.indexOf(val) === -1){          
            res = [...this.state.values, val];            
            console.log(res);
        }
        else{           
            res =this.state.values.filter((item) =>item !== val);
            console.log(res);
        };
        let isValid = this.validate(res);
        this.setState({ values: res, valid: isValid});
    }
    render() {
        let displ = this.state.valid === true ? "none" : "block";       
        return (
            <p>        
            <label class = "name">Specialization:</label><br />
            <input type="checkbox" onChange={this.onChange} value ="Design" />
            <label>Design</label>
            <input type="checkbox" onChange={this.onChange} value ="Programming"  />
            <label>Programming</label>
            <input type="checkbox" onChange={this.onChange} value ="Administration"  />
            <label>Administration</label>            
            <span style={{ display: displ }}>Specialization not selected</span>
      </p>
        );
    }
}