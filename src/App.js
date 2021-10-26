import Header from './partials/Header'
import NewsFeed from './partials/NewsFeed'
import './partials/CSS/style.css'
import { BrowserRouter as Router, useParams, Route, Switch, Redirect, Link } from 'react-router-dom'
const Feed = () => {
    let { category } = useParams() 
    return <NewsFeed category={category} />
}
function App() {

    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/:category'>
                    <Feed />
                </Route>
                <Redirect to='/all' />

            </Switch>

        </Router>
    )
}

export default App;