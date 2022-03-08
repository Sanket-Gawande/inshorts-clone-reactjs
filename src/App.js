import Header from './partials/Header'
import NewsFeed from './partials/NewsFeed'
import './partials/CSS/style.css'
import { BrowserRouter as Router,  Route, Switch, Redirect } from 'react-router-dom'

function App() {

    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/:category'>
                    <NewsFeed />
                </Route>
                <Redirect to='/all' />

            </Switch>

        </Router>
    )
}

export default App;