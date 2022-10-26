import React from 'react';

class App extends React.Component{ //기능을 물려받은
  state = {
    isLoading:true,
    movies: [],
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading:false});
    }, 3000);
  }


  render(){
    const {isLoading} = this.state;
    return(
      <div>{isLoading ? "Loading..." : "준비 완료" }</div>//3항 연산,
    )
  }
}

export default App;