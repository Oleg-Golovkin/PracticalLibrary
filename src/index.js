import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter,
      position: ""
    }
  } 
  
  plusCounter = () => { 
    this.setState({      
      counter: this.state.counter + 1
    })
  }

  commitInputChanges = (e) => {
    this.setState({
      position: e.target.value
    })
    
  }
  

  render() {
    const {counter, position} = this.state;
    return (
      <div className="app"> 
          <h1>{counter}</h1>
          <h2>{position}</h2>
          <button 
          onClick={this.plusCounter}>RESET</button>
          <form>
            <span>Введите должность</span>
            <input 
            type="text" 
            onChange = {this.commitInputChanges}/>
          </form>
      </div>
      
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <Add counter = {23}/>        
</React.StrictMode>  
);



// ----------Практика по работе с состояниями
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: this.props.counter
//     }
//   } 
  
//   // Используйте только стрелочную форму методов
//   // Почему? Подробный ответ будет в следующем уроке
//   plusCounter = () => { 
//     this.setState({      
//       counter: this.state.counter + 1
//     })
//   }
//   minuCounter = () => { 
//     this.setState({      
//       counter: this.state.counter - 1
//     })
//   }
//   resetCounter = () => { 
//     this.setState({      
//       counter: 0
//     })
//   }

//   getRandomInRange = () => {
//     this.setState({      
//       counter: +(Math.random() * (50 - -50) + -50).toFixed(0)    
//     })       
//   }

//   i = this.getRandomInRange(1, 50);

//   render() {
//     return (
//       <div className="app">
//         <div className="counter">{this.state.counter}</div>
//         <div className="controls">
//           <button onClick={this.minuCounter}>INC</button>
//           <button onClick={this.plusCounter}>DEC</button>
//           <button onClick={this.getRandomInRange}>RND</button> 
//           <button onClick={this.resetCounter}>RESET</button>
//         </div>
//       </div>
//     )
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       <App counter={0}/>         
//   </React.StrictMode>  
// );
// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов


