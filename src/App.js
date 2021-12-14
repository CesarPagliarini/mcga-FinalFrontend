import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './Store';
//

// Components - Layout
import Header from './Shared/Header';
import Sidebar from './Shared/Sidebar';
import Footer from './Shared/Footer';
// Components - Clients branch
import Clients from './components/Clients';
import NewClient from './components/Clients/NewClient';
import EditClient from './components/Clients/EditClient';
// Components - Cabañas branch
import Cabanas from './components/Cabanas';
import NewCabana from './components/Cabanas/NewCabana';
import EditCabana from './components/Cabanas/EditCabana';
//

function App() {
  return (
    <Router>
      <Header />
      <Provider store={store}>
        <div className='flex'>
          <Sidebar />
          <div className='mainOptions'>
            <Switch>
              <Route exact path='/clients' component={Clients} />
              <Route exact path='/clients/new' component={NewClient} />
              <Route exact path='/clients/edit/:id' component={EditClient} />
              <Route exact path='/cabanas' component={Cabanas} />
              <Route exact path='/cabanas/new' component={NewCabana} />
              <Route exact path='/cabanas/edit/:id' component={EditCabana} />
            </Switch>
          </div>
        </div>
      </Provider>
      <Footer />
    </Router>
  );
}

export default App;
