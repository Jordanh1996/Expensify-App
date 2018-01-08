class Indecision extends React.Component {

    constructor(props) {
        super(props);
        this.options = ["asdasd", 12];
        this.title = "Indecision"
        this.subtitle = "put your life in the hands of a computer"
        
    }

    render() {

        return (
            <div>
                <Header title={this.title} subtitle={this.subtitle} />
                <Action />
                <Options options={this.options}/>
                <Option />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {

    
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Options extends React.Component {

    
    render() {
        return (
            <div>    
            {
                this.props.options.map((option) => <Option key={option} optionText={option} />)
            }
            </div>
        )
    }
}

class Option extends React.Component {

    
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class Action extends React.Component {

    constructor(props) {
        super(props)
    }
    
    Choose() {
        console.log("asda")
    }

    

    render() {
        return (
            <button onClick={this.Choose}>choose an option</button>
            
        )
    }
}

class AddOption extends React.Component {

    constructor(props) {
        super(props)
        this.AddOption = this.AddOption.bind(this)
    }

    AddOption(e) {
        e.preventDefault()
    }

    
    render() {
        return (
            <div>
                
                    <form onSubmit={this.AddOption}>
                        <input type="text" id="textbox"></input>
                        <button>Click Here to Add an Option</button>
                    </form>
            </div>
        )
    }
}



ReactDOM.render(<Indecision />, document.getElementById("app"))