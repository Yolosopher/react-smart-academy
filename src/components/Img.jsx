import React from 'react'
import styled from 'styled-components'

export default function Img(props) {
	return (
		<>
			<Image src={props.src} alt={props.alt} />
		</>
	)
}

const Image = styled.img`
	width: 55px;
	height: 55px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 20px;
`
