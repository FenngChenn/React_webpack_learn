// require('./module');
import React from 'react'
import { browserHistory, Router} from 'react-router'

import routes from './routes.js'

render(
  <Router history={browserHistory} routes={routes} />,
  document.body
)
