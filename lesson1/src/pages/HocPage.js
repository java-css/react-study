import React, {Component} from "react";

//HOC: 是个函数，接收一个组件，返回一个新的组件

// function Child(props){
//   return <div>CHild</div>
// }

// Cmp这里是function或者class组件
const foo = Cmp=>props =>{
  return <div className='border'>
    <Cmp {...props}/> 
  </div>

}

const foo2 = Cmp=>props =>{
  return <div className='greenBorder'>
    <Cmp {...props}/> 
  </div>

}

@foo2
@foo
class Child extends Component{
  render(){
    return (
      <div>
          <h1>Hello World!</h1>
      </div>
  )
  }
}


export default class HocPage extends Component{
  render(){
    return(
     <div>
        <Child />
     </div>
    )
  }
}