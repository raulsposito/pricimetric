import { Route } from 'react-router'
import { Layout } from './layouts/Layout'
import Dashboard from './pages/Dashboard'
import Browse from './pages/Browse'
import Performance from './pages/Performance'
import Pricing from './pages/Pricing'
import Config from './pages/Config'
import { } from 'chart.js';

import './App.css';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Layout>
				<Route exact path='/' component={Dashboard} />
				<Route exact path='/browse' component={Browse} />
				<Route exact path='/pricing' component={Pricing} />
				<Route exact path='/performance' component={Performance} />
				<Route exact path='/config' component={Config} />
		  </Layout>
      <Footer/>
    </div>
  );
}

export default App;
