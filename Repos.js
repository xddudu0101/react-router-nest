import React from 'react'
import { Link,RouteHandler,State} from 'react-router'

export default React.createClass({
    //mixins: [State],
    render() {
        //var id = this.getParams().id;
        var cate={
            _id:2,
            name:'你好',
        };
        return(
            <ul>
                <li>
                    <Link to={{pathname:"repoId/"+cate._id}}>
                        第一本图书
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:"repoId/"+cate._id}}>
                        第二本图书
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:"repoId/"+cate._id}}>
                        第三本图书
                    </Link>
                </li>


                {this.props.children}
            </ul>
        )
    }
})
