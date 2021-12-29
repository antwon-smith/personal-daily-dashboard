import './App.css';


function App() {
  var myCurrentDate = new Date();
  var date = (myCurrentDate.getMonth()+1) + '-' + myCurrentDate.getDate() + '-' + myCurrentDate.getFullYear();
  const newCurrentDate = "Today's Date is "+date;

  return (
    <div className="App">
      <div className='hello'>
        <h3 className="Welcome-message">Hello, Antwon.</h3>
      </div>
      <div>
        <h4 className='date'>{newCurrentDate} and it's a wonderful day!</h4>
      </div>
      
    </div>
  );
}

export default App;
