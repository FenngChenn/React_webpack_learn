import {Route, IndexRoute} from 'react-router'

import IndexContainer from './containers/IndexContainer.js'
import BookListContainer from './containers/BookListContainer.js'
import BookInfoContainer from './containers/BookInfoContainer.js'

export default (
  <Route path="/">
    <IndexRoute component={IndexContainer}/>
    <Route path="bookList" component={BookListContainer}/>
    <Route path="bookInfo" component={BookInfoContainer}/>
  </Route>
)
