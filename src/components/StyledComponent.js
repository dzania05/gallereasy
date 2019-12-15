import React from 'react';
import styled from 'styled-components';

const css = {
	grey: '#bfbfbf',
	sblack: '#5d5c5c'
}

const Section = styled.section`
	background: #fff;
	font-style: normal;
	padding: 0;
	margin: 0;
	color: ${css.grey};
`;

const Container = styled.div`
  	display: flex;
  	justify-content: flex-start;
	width: 100%;
	max-width: 1140px;
	margin: auto;
`;

const Nav = styled.nav`
	@media (max-width: 425px){
		padding: 20px;
	}

	position: relative;
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	background: #fff;
	padding: 20px 0;
	border-bottom: 1px solid ${css.grey};
	margin-bottom: 50px;
}
`;

const HTitle = styled.h1`
	@media (max-width: 425px){
		font-size: 20px;
	}

	color: ${css.grey};
	margin: 0;
	font-weight: 300;
	font-size: 24px;

	&:after {
	    content: '';
	    border-right: 1px solid;
	    padding-left: 20px;
	}
`;

const HTitleB = styled.span`
	color: ${css.sblack};
	font-weight: 500;
`;

const MLink = styled.a`
	@media (max-width: 425px){
		font-size: 20px;
	}

	color: ${css.grey};
	text-decoration: none;
	font-size: 24px;
	font-weight: 300;
	padding-left: 20px;

	&:hover {
		color: ${css.sblack};
	}
`;

const Input = styled.input`
	@media (max-width: 425px){
		font-size: 25px;
	}

	border: none;
    border-bottom: 1px solid #bfbfbf;
    padding: 10px 0;
    font-size: 30px;
    color: ${css.sblack};
    width: 85%;
    display: flex;
    align-self: center;
    margin-bottom: 30px;

    &:focus {
    	outline: none;
    }
`;

const Image = styled.img`
	width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ImageContainer = styled.div`
	width: 100%;
	display:flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	margin-bottom: 50px;
`;

const Wrapper = styled.div`
	width: 100%;
	display:flex;
	flex-flow: column;
	justify-content: flex-start;
`;

const Fav = styled.img`
	width: 30px;
    height: 30px;
    position: absolute;
    right: 20px;
    bottom: 20px;
    opacity: 0;
`;

const ImageWrapper = styled.div`
	@media (max-width: 425px){
		width: calc(100% - 20px);
		height: auto;
	}

	width: calc(25% - 20px);
    height: 200px;
    padding: 10px;
    cursor: pointer;
    position: relative;

    &:hover ${Fav} {
    	opacity: 0.5;
    }
`;

export {
	Section,
	Nav,
	HTitle,
	Container,
	HTitleB,
	MLink,
	Input,
	Image,
	ImageContainer,
	ImageWrapper,
	Wrapper,
	Fav
}
