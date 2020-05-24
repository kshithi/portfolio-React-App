import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';

class Landingpage extends Component{
    render () {
        return(
            <div style ={{width :'100%', margine: 'auto'}}>
                <Grid className="landing-grid">
                   <Cell col={12}>
                       <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6tA8mj-obtcuKlHL4kYnIFusQlgOUjuV4WhHJDSkOFfEOsD0kHcx0edoq2Q&s"
                        alt = "avatar"
                        className="avatar-img"
                      
                      />
                      
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                        <hr/>  
                        <p>HTML/CSS | Bootsrap | React |React-Native|Express |Mongo DB</p>  
                        <div className="social-links">

                            {/* LinkedIn*/}
                            <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"   aria-hidden="true"/>
                            </a>
                            {/* Github*/}
                            <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"   aria-hidden="true"/>
                            </a>
                            {/* Free code camp*/}
                            <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp"   aria-hidden="true"/>
                            </a>

                            {/* YouTube*/}
                            <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square"   aria-hidden="true"/>
                            </a>
                            
                        </div>

                        </div>
                       </Cell> 
                </Grid>


            </div>
        )
            
        

    }
}
export default Landingpage;