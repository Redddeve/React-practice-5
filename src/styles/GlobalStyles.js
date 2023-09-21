import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e7ecf2;
  font-size: 18px;
  line-height: 1.5;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
}

`;
