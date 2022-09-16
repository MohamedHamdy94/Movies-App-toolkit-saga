import styled from 'styled-components';

export const Box = styled.div`
background: black;
padding-top: 2rem;

`;
export const Container = styled.div`
display: flex;
justify-content:  space-around;

`
export const Row = styled.div`
width: 50%;

display: flex;
justify-content:  space-around;
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
`;


export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;
