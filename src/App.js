import {createMuiTheme, FormControl, FormHelperText, Input, InputLabel, ThemeProvider} from '@material-ui/core'

const theme = createMuiTheme({
  props: {
    MuiFormHelperText: {
      // children: '',
      children: '',
      // children: 'default text',
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <form>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" />
        <FormHelperText></FormHelperText>
      </FormControl>
      </form>
    </ThemeProvider>
  );
}

export default App;
