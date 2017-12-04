import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

/*import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory({
  basename: '',             // The base URL of the app (see below)
  hashType: 'slash'
})*/

import Page1Index from './views/page1/Page1-index'
import Page2Index from './views/page2/Page2-index'
import Page3Index from './views/page3/Page3-index'
import Page4Index from './views/page4/Page4-index'

const RouterConfig = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Page1Index} />
        <Route path="/page2/:id" component={Page2Index} />
        <Route path="/page3" component={Page3Index} />
        <Route path="/page4" component={Page4Index} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

const NoMatch = ({ location }) => (
  <div>
    <h2>No match for {location.pathname}</h2>
  </div>
)

export default RouterConfig
