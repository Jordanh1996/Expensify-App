import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>this is a title</h1>
        <p>this is a paragraph with a property: {props.property} </p>
    </div>
)

const HigherComponent = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isTrue && <p>here is more information from the higher component</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const HigherInfo = HigherComponent(Info)

ReactDOM.render(<HigherInfo isTrue ={true} property= "some information" />, document.getElementById('app'))