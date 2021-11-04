import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'radnika_next';
  src: url('/static/radnikanext-medium-webfont.woff2')
  format('woff2');
  font-weight: normal;
}
html{
  --red: #ff000f;
  --black: #393939;
  --gray: #3a3a3a;
  --gray: var(--grey);
  --lightGray: #e1e1e1;
  --lightGray: var(---lightGray);
  --offWhite: #ededed;
  --maxWidth: 1000px;
  box-sizing: border-box;
  font-size: 62.5%;

}
*, *:before, *:after{
  box-sizing: inherit;
}


body{
  font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2;
}

a {
  text-decoration: none;
  color: var(--black);

  :hover{
    text-decoration: underline;
  }
}

//setting font family to body doesnt apply to buttons
button{
  font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
