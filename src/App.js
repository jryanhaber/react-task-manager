import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
// import faker from 'faker'
import CommentDetail from './components/CommentDetail'

function App() {
  const buttonText = {text: 'click me'};
const labelText = "enter name";

  const name = "Jonathan"
  const x = false
  return (
    <div className="container">
      <CommentDetail/>
      <CommentDetail/>
      <CommentDetail/>
      <CommentDetail/>
      <CommentDetail/>
    </div>)
}

export default App;
