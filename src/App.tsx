import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PostsContextProvier } from "./contexts/PostsContext";
import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PostsContextProvier>
          <Router />
        </PostsContextProvier>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
