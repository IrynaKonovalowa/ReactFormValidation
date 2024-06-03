class Result extends React.Component {
    render() {
        console.log(this.props.info[0]);
        return <table>
         <tr><td class= "title"  colspan="2">Your personal data:</td></tr>   
        <tr><td>Name: </td><td>{this.props.info[0]}</td></tr>
        <tr><td>Login:  </td><td>{this.props.info[1]}</td></tr>
        <tr><td>Password:  </td><td>{this.props.info[2]}</td></tr>
        <tr><td>Position:  </td><td>{this.props.info[3]}</td></tr>
        <tr><td>Specialization:  </td><td>{this.props.info[4]}</td></tr>
        <tr><td>Gender:  </td><td>{this.props.info[5]}</td></tr>
        </table>        
    }
}