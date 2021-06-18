// Main appp

import HeaderBar from './components/headerComp/headerComponent';
import HeaderBottomSection from './components/frontPage/sections/hdrBottomsec'

const App = () => {
  return (
    <div className="App hidden lg:block">
      <HeaderBar />
      <HeaderBottomSection />
    </div>
  );
}

export default App;
