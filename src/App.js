import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Campaign from './components/Campaign/Campaign';
import CampaignList from './components/CampaignList/CampaignList';
import Subscriber from './components/Subscriber/Subscriber';
import SubscriberList from './components/SubscriberList/SubscriberList';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Page Component={Campaign}/>}/>
          <Route exact path="/campaign-list" component={() => <Page Component={CampaignList}/>}/>
          <Route exact path="/add-subscriber" component={() => <Page Component={Subscriber}/>}/>
          <Route exact path="/subscriber-list" component={() => <Page Component={SubscriberList}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
