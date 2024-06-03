class RegForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { data: [], valid: false};
        this.handleSubmit = this.handleSubmit.bind(this);        
        console.log(this.state.valid);
        this.nameRef = React.createRef();
        this.loginRef = React.createRef();
        this.passwordRef = React.createRef();        
        this.positionRef = React.createRef();
        this.specializationRef = React.createRef();
        this.genderRef = React.createRef();        
    }
    
    handleSubmit(e) {
        e.preventDefault();
        let name = this.nameRef.current.state.value;
        let login = this.loginRef.current.state.value;
        let password = this.passwordRef.current.state.value;        
        let position = this.positionRef.current.state.selected;
        let specialization = this.specializationRef.current.state.values.join(', ');
        let gender = this.genderRef.current.state.selected;
        let arr = [name, login, password, position, specialization, gender];
        console.log(arr);       

         if (this.nameRef.current.state.valid &&
            this.loginRef.current.state.valid &&
            this.passwordRef.current.state.valid &&         
            this.positionRef.current.state.valid &&
            this.specializationRef.current.state.valid &&
            this.genderRef.current.state.valid)
                this.setState({ data: arr, valid: true });
           
    }
    
    render() {
        let displ = this.state.valid === true ? "block" : "none";        
        return (<div>
            <form onSubmit={this.handleSubmit}>
            <label class= "title">Registration form:</label>
                <NameField value="" ref={this.nameRef} />
                <LoginField value="" ref={this.loginRef} />
                <PasswordField value="" ref={this.passwordRef} />                                 
                <GenderRadiobutton selected="Male" ref={this.genderRef} />
                <SpecializationCheckbox values= {[]} ref={this.specializationRef} />                
                <PositionCombobox  selected="" ref={this.positionRef}/>
                <input class= "send" type="submit" value="Send" />
            </form>                       
             <div style={{ display: displ }}> 
                 <Result  info = {this.state.data} />
            </div> 
         </div>);
    }
}