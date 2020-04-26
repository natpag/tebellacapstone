import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { Home } from './pages/Home'
import { Account } from './pages/Account'
import { TeaHistory } from './pages/TeaHistory'
import { AddATeaReview } from './pages/AddATeaReview'
import { SignUp } from './pages/SignUp'
import { LoginPage } from './pages/LoginPage'
import NotFound from './pages/NotFound'
import './custom.scss'
export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/account"
          render={() => {
            if (localStorage.getItem('token')) {
              return <Account />
            } else {
              return <Redirect to="/login" />
            }
          }}
        />
        <Route exact path="/teahistory" component={TeaHistory} />
        <Route exact path="/addTeaReview" component={AddATeaReview} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    )
  }
}
