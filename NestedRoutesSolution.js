```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const location = useLocation();
  console.log('Home location changed:', location);
  return (
    <div>
      <h1>Home</h1>
      <NestedRoute1 location={location}/>
    </div>
  );
}

function NestedRoute1({ location }) {
  console.log('NestedRoute1 location:', location);
  return (
    <div>
      <h2>Nested Route 1</h2>
    </div>
  );
}

function About(){
  const location = useLocation();
  console.log('About location changed:', location);
  return (
    <div>
      <h1>About</h1>
      <NestedRoute2 location={location}/>
    </div>
  );
}

function NestedRoute2({ location }) {
  console.log('NestedRoute2 location:', location);
  return (
    <div>
      <h2>Nested Route 2</h2>
    </div>
  );
}

function NotFound(){
  return(
    <div>Not Found</div>
  );
}
export default App;
```