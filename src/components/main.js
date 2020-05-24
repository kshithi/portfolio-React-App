import React from 'react';
import Landingpage from './landingpage';
import Aboutme from './aboutme';
import Resume from './resume';
import Project from './project';
import content from './content';
import { Switch ,Route } from 'react-router-dom';
import { Content } from 'react-mdl';

const Main =()=> (
    <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/resume" component={Resume} />
        <Route path="/project" component={Project} />
        <Route path="/content" component={Content} />

    </Switch>
)

export default Main;