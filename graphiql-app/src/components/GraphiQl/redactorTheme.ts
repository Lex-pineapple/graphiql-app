import { createTheme } from '@uiw/codemirror-themes';

const redactorTheme = createTheme({
  theme: 'light',
  settings: {
    background: '#ffffff',
    foreground: '#5c5c5c',
    caret: '#5d00ff',
    selection: '#43c69a',
    selectionMatch: '#d9d9d9',
    lineHighlight: '#36a8a820',
    gutterBackground: '#fff',
    gutterForeground: '#36a8a8',
  },
  styles: [],
});

export default redactorTheme;
