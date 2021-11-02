import Link from "next/link";
import NavStyles from "./styles/NavStyles";
// import { useUser } from './User';

export default function Nav() {
	return (
		<NavStyles>
			<Link href="/products">product</Link>
			<Link href="/sell">sell</Link>
			<Link href="/orders">orders </Link>
			<Link href="/account">account</Link>
		</NavStyles>
	);
}
