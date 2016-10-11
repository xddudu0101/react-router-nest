import React from 'react'
import { Link,State } from 'react-router'

export default React.createClass({
    mixins: [State],
    render() {
        return (
            <article>
                <h1>终于看到我了啊~~~<br /><br />
                    {this.props.params.id}
                </h1>
            </article>
        )
    }
})