import './App.css'
import Colors from './components/Colors'
import Page from './components/Page'
import { ColorsProvider } from './contexts/ColorContext'

function App() {

  return (
    <>
    <ColorsProvider>
      <div className='containerPages'>
        <Page/>
        <Page/>
        <Page/>
      </div>
      <Colors/>
    </ColorsProvider>
   
    </>
  )
}

export default App
