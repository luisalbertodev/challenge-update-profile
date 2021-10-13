import 'normalize.css';
import { render } from 'react-dom';
import { AuthProvider } from 'src/context/AuthContext';
import { ThemeProvider } from 'src/context/ThemeContext';
import { GlobalProvider } from 'src/context/GlobalContext';
import GlobalStyle from 'src/GlobalStyle';
import { LanguagesProvider } from 'src/context/LanguagesContext';

import App from 'src/App';
import reportWebVitals from './reportWebVitals';

render(
  <AuthProvider>
    <LanguagesProvider>
      <ThemeProvider>
        <GlobalProvider>
          <>
            <GlobalStyle />
            <App />
          </>
        </GlobalProvider>
      </ThemeProvider>
    </LanguagesProvider>
  </AuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals())
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
