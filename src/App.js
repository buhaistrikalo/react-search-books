import {Route} from 'react-router-dom';
import './App.css';
import Books from './Books/Books';
import BookDetail from './Books/ListBook/BookCard/BookDetail';
import Header from './Header/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Books /> */}

      <Route path='/' exact component={Books}/>
      {/* <Route path='/books/:id' exact component={BookDetail}/> */}
    </div>
  );
}

export default App;
