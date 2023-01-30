import mazeCreator from './mazeCreator';

function App() {

  const maze = mazeCreator(15);

  let cells = maze.map((row, i) => {
    return row.map((cell, j) => {
      return cell === 0 ? <div key={`${i}${j}`} className='wall'
      style={{position: "absolute", top: `${5*j}px`, left: `${5*i}px`}}></div> : 
      <div key={`${i}${j}`} style={{position: "absolute", top: `${5*j}px`, left: `${5*i}px`}}></div>;
    });
  })


  return (
    <div className="App">
      {cells}
    </div>
  );
}

export default App;
