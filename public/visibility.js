class ToggleApp extends React.Component {
    constructor(props) {
        super(props)
        this.Toggle = this.Toggle.bind(this)
        this.state = {
            paracontent: "",
            count: "click here to display the content",
            switch: true
        }
        
    };

    Toggle() {
        this.setState(() => {
            if (this.state.switch) {
                return {
                    paracontent: "here is the content",
                    count: "click here to hide the content",
                    switch: false
                }
            } else {
                return {
                    paracontent: "",
                    count: "click here to display the content",
                    switch : true
                }
            }
        })


    }

    render() {
        return (
            <div>
                <button onClick={this.Toggle}>{this.state.count}</button>
                <p>{this.state.paracontent}</p>
            </div>
        )
    }

}

const jsx = (
    <div>
        <ToggleApp />
    </div>
)

ReactDOM.render(jsx, document.getElementById("app"))

