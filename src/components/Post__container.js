import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Posts__card from "./Post__card";

export default function Post__container(props) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="post__navigation">
        <ul>
          <li>
            <Link to="/">
              <span class="material-icons">view_comfy</span><span>Posts</span>
            </Link>
          </li>
          <li>
            <Link to="/igtv">
              <span class="material-icons">local_offer</span><span>Igtv</span>
            </Link>
          </li>
          <li>
            <Link to="/tagged">
              <span class="material-icons">ondemand_video</span><span>Tagged</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="post__card">
        <Switch>
          <Route exact path="/">
            <Posts__card cards={props.data.posts} />
          </Route>
          <Route path="/igtv">
            <Posts__card cards={props.data.videos} />
          </Route>
          <Route path="/tagged">
            <Posts__card cards={props.data.tags} />
          </Route>{" "}
        </Switch>
      </div>
    </Router>
  );
}
