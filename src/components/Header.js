import React, { Component } from 'react';
import { Nav, HTitle, Container, HTitleB, MLink } from './StyledComponent';
import { withApi } from '../api';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount(){
    this.props.data.favourites().on('value', snapshot => {
      this.setState({ count: snapshot.numChildren() });
    })
  }

  render(){
  	return (
       <Nav>
          <Container>
            <HTitle>
              Galler<HTitleB>easy</HTitleB>
            </HTitle>
            <MLink href="/">Search</MLink>
            <MLink href="/favourites">Favourites ({this.state.count})</MLink>
          </Container>
       </Nav>
    )
  }
}

export default withApi(Header);