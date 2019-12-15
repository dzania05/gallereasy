import React, { Component } from 'react';
import { withApi } from '../api';
import ImageResults from './ImageResults';
import { Wrapper } from './StyledComponent';

class Favourites extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: []
		}
	}

	componentDidMount(){
		this.props.data.favourites().on('value', snapshot => {
			let temp = [];
			console.log(snapshot.val())
			snapshot.forEach(item => {
				temp.push({
					id: item.key,
					images: item.val().images
				})
			})

			this.setState({ data: temp });
			console.log(this.state.data.length)
		})
	}

	render(){
		const data = {
			result : this.state.data,
			action: null,
			favourites : true
		}
		return (
			<Wrapper>
				<ImageResults data={data}/>
			</Wrapper>
		)
	}
}

export default withApi(Favourites);