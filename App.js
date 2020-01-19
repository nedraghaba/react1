import React from 'react';
import photo from './Photo.png';
import pic from './pic.png';
import './style.css';
ReactDOM.render(<App />, document.getElementById('root'));

function App() {

 <div>
   <h1 className='titleRed'>
My title
   </h1>
   <br/>
  <img src={photo} />
  <br/>
  <img src={pic}/>
</div>
}

export default App;
