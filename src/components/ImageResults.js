import React, { Component } from 'react';
import { Image, ImageContainer, ImageWrapper, Fav } from './StyledComponent';
import like from '../assets/like.svg';

class ImageResults extends Component {
	constructor(props){
		super(props)
	}

	handleFav = (datas) => {
		if(this.props.data.favourites === false){
			this.props.data.action.child(datas.id).set({
				images: datas.images
			})
		} else {
			console.log('Favourites is disabled')
		}
	}

	render(){
		const style = this.props.data.favourites ? 'visible' : '';
		return (
			<ImageContainer>
				{
			        this.props.data.result && this.props.data.result.map((v, k) => (
			        	<ImageWrapper>
			          		<Image 
			          			key={v.id} 
			          			src={v.images['480w_still'].url} 
			          			onMouseOver={e => (e.currentTarget.src = v.images.downsized.url)}
			          			onMouseOut={e => (e.currentTarget.src = v.images['480w_still'].url)}
			          			onClick={() => this.handleFav(v)}
			          		/>
			          		<Fav key={k} src={like} className={style}/>
			          	</ImageWrapper>
			        )) 
			    }
		    </ImageContainer>
		)
	}
}

export default ImageResults;