import './App.css';
import Landing from '../src/components/landing/landing';
import PostInfo from '../src/components/content/postInfo/postInfo';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/postinfo" component={PostInfo} />
      </Switch>
    </div>
  );
}

export default App;
