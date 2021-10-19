import UniversityList from './UniversityList';
import UniversityContext from '../contexts/UniversityContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <UniversityContext>
            <Router>
                <br />
                <div className="uk-container">
                    <Switch>
                        <Route path="/">
                            <h4>Universities in Brazil</h4>
                            <UniversityList></UniversityList>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </UniversityContext>
    );
}

export default App;