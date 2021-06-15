import {ThumbnailGallery} from './components/ThumbnailGallery'


function App() {
  return (
    <div className="App">
      <header style={header}>
        <ThumbnailGallery />
      </header>
    </div>
  );
}
const header = { 
  width: '50%',
  textAlign:'center',
}

export default App
