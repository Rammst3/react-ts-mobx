import * as React from 'react'
import { Provider } from 'mobx-react'
import store from './store/index'
import Home from './pages/home/index'

function App() {
  return (
    <div>
        <Provider store={store}>
            <Home></Home>
        </Provider>
    </div>
  );
}

export default App;
