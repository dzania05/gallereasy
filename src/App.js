import React from 'react';
import { Section, Container } from './components/StyledComponent';
import Header from './components/Header';
import Search from './components/Search';
import Favourites from './components/Favourites';
import { BrowserRouter as Router,  Route } from 'react-router-dom';


const App = () => {
  return (
  	<Router>
	    <Section>
	      <Header />
	      <Container>
	        <Route exact path="/" component={Search} />
	        <Route path="/favourites" component={Favourites} />
	      </Container>
	    </Section>
    </Router>
  );
}

export default App;
