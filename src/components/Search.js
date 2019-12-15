import React, { Component } from 'react';
import { Input, Wrapper } from './StyledComponent';
import ImageResults from './ImageResults';
import { withApi } from '../api';

class Search extends Component {
	constructor(props){
		super(props);
		this.timeout =  0;
		this.state = {
			keyword : '',
			data: []
		}
	}

	getApiData = () => {
		this.props.data.getData(this.state.keyword)
		.then(response => response.json())
      	.then(json => {
        	this.setState({data: json.data });
        	console.log(json.data)
      	});
	}

	handleChange = (event) => {
		this.setState({ 
			keyword : event.target.value,
			data : null
		});
		
		if(this.timeout) clearTimeout(this.timeout);
		this.timeout = setTimeout(() => {
      		this.getApiData();
    	}, 300);
	}

	render(){
		const data = {
			result : this.state.data,
			action: this.props.data.favourites(),
			favourites : false
		}

		return (
			<Wrapper>
			   	<Input type="text" value={this.state.keyword} onChange={this.handleChange} placeholder="Start searching for images!"/>
			    <ImageResults data={data}/>
			</Wrapper>
		)
	}
}

export default withApi(Search);