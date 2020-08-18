import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Posts__card from "./Post__card";
import Video__card from './Video__card'

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
            <Link to="/video">
              <span class="material-icons">local_offer</span><span>Video</span>
            </Link>
          </li>
          <li>
            <Link to="/reels">
              <span class="material-icons">ondemand_video</span><span>Reels</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="post__card">
        <Switch>
          <Route exact path="/">
            <Posts__card cards={props.data.posts} />
          </Route>
          <Route path="/video">
            <Video__card cards={props.data.videos} />
          </Route>
          <Route path="/reels">
            <Posts__card cards={props.data.tags} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
