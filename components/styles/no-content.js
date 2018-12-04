import React, {Component} from 'react'
import styled from 'styled-components'

export const Nocontent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color:#ddd;
	font-size: 12px;
	padding-top: 122px;
	margin-top: -150px;

	.no-data-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color:#ddd;
		font-size: 12px;
		padding: 160px 0;
	}
	.no-data__text {
		padding: 10px;
	}
	.img{
		width: 51.4%;
		display:block;
	}
	.loading-text {
		padding: 30px;
	}
`
