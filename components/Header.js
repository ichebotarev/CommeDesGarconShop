import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";

const Logo = styled.h1`
	font-size: 3rem;
	margin-left: 2rem;
	transform: scaleY(1.1);

	a {
		padding: 0.5rem 1rem;
		color: black;

		text-decoration: none;
	}
`;

const HeaderStyles = styled.header`
	.bar {
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		align-items: stretch;
	}
	.sub-bar {
		display: grid;
		grid-template-columns: 1fr auto;
		border-bottom: 1px solid var(--black);
	}
`;

const Header = () => (
	<HeaderStyles>
		<div className="bar">
			<Logo>
				<Link href="/">COMME des GARCONS</Link>
			</Logo>
			<Nav />
		</div>
		<div className="sub-bar"></div>
	</HeaderStyles>
);

export default Header;
