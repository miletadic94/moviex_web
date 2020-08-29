import React, { Fragment } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { history } from "./store";

import Navigation from "./components/Navigation/index.js";

import Login from "./screens/auth/Login";
import Regiser from "./screens/auth/Register";

import Home from "./screens/Home";
import SingleMovie from "./screens/SingleMovie";
import UserProfile from "./screens/UserProfile";

import UserManagement from "./screens/admin/UserManagement";
import CreateUser from "./screens/admin/UserManagement/CreateUser";
import EditUser from "./screens/admin/UserManagement/EditUser";

import MovieManagement from "./screens/admin/MovieManagement";
import CreateMovie from "./screens/admin/MovieManagement/CreateMovie";
import EditMovie from "./screens/admin/MovieManagement/EditMovie";
import MovieAddProduct from "./screens/admin/MovieManagement/MovieAddProduct";

import GenreManagement from "./screens/admin/GenreManagement";
import CreateGenre from "./screens/admin/GenreManagement/CreateGenre";
import EditGenre from "./screens/admin/GenreManagement/EditGenre";

import ActorManagement from "./screens/admin/ActorManagement";
import CreateActor from "./screens/admin/ActorManagement/CreateActor";
import EditActor from "./screens/admin/ActorManagement/EditActor";
import { getUserToken } from "./services/localStorage.service";
import ReceiptsManagement from "./screens/admin/ReceiptsManagement";
import UserReceipts from "./screens/UserReceipts";
import ForgotPassword from "./screens/auth/ForgotPassword";
import ResetPassword from "./screens/auth/ResetPassword";

const AuthRoute = ({ path, component, exact }) => {
  const token = getUserToken();
  if (token || path === "/") {
    return (
      <Fragment>
        <Route path={path} component={component} exact={exact} />
      </Fragment>
    );
  }
  return <Redirect to="/login" />;
};

const App = () => {
  return (
    <Router history={history}>
      <Navigation />
      <div className="container mt-4">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Regiser} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-password/:tokenId" component={ResetPassword} />
          <Route path="/" component={Home} exact />
          <Route path="/single-movie/:id" component={SingleMovie} exact />
          <AuthRoute path="/user-profile" component={UserProfile} />
          <AuthRoute path="/user-receipts" component={UserReceipts} />
          <AuthRoute path="/admin/users" component={UserManagement} exact />
          <AuthRoute path="/admin/users/create" component={CreateUser} />
          <AuthRoute path="/admin/users/edit/:id" component={EditUser} />
          <AuthRoute path="/admin/movies" component={MovieManagement} exact />
          <AuthRoute path="/admin/movies/create" component={CreateMovie} />
          <AuthRoute path="/admin/movies/edit/:id" component={EditMovie} />
          <AuthRoute
            path="/admin/movies/add-product/:id"
            component={MovieAddProduct}
          />
          <AuthRoute path="/admin/genres" component={GenreManagement} exact />
          <AuthRoute path="/admin/genres/create" component={CreateGenre} />
          <AuthRoute path="/admin/genres/edit/:id" component={EditGenre} />
          <AuthRoute path="/admin/actors" component={ActorManagement} exact />
          <AuthRoute path="/admin/actors/create" component={CreateActor} />
          <AuthRoute path="/admin/actors/edit/:id" component={EditActor} />
          <AuthRoute path="/admin/receipts" component={ReceiptsManagement} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
