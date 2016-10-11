import React from 'react'
import { Link,RouteHandler } from 'react-router'

export default React.createClass({
    render() {
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li><Link to="/about">电影</Link></li>
                    <li><Link to="/repo">图书</Link></li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>

        )
    }
})