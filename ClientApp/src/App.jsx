import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Home } from './pages/Home'
import { Account } from './pages/Account'
import { TeaHistory } from './pages/TeaHistory'
import { TeaLog } from './pages/TeaLog'
import NotFound from './pages/NotFound'
import './custom.scss'
export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/teahistory" component={TeaHistory} />
        <Route exact path="/tealog" component={TeaLog} />

        <Route exact path="*" component={NotFound} />
      </Switch>
    )
  }
}
