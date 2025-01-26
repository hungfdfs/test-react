// class component
// function component


import React from 'react';

class MyComponent extends React.Component {
      
    state = {
        name: 'hiep',
        address: 'Hung Yen',
        age: 20
    }
    
    
    //jsx
    render() {
        return (
            <div>
                my name is {this.state.name} and I live in {this.state.address}
            </div>
        )
    }
}

export default MyComponent