import React,{Component} from 'react';
import NewElem from './components/New';

class App extends Component {
  state = {
    myList:[{
      id:1
    }]
  };

addItem=(newList,cb)=>{
newlist.id=this.state.myList.length + 1;
  this.setState({
      myList:[...this.state.myList,newList]
      })
      cb();
}

  render() {
    return(
    <div>
    <p>My List</p>
    <NewElem addList={this.addItem}/>
    </div>
    )
  }
}

export default App;
