// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import { Header, Homepage} from './layouts';
// import footer from './layouts/'
// import { Impact } from './components'
import ErrorBoundary from './components/ErrorBoundary';



const OurFallbackComponent = ({ error, componentStack, resetErrorBoundary }) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

function App() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div>
      <ErrorBoundary
        FallbackComponent={OurFallbackComponent}
        >
          {/* <Impact/> */}
          <Header isMenu={isMenu} setIsMenu={setIsMenu}/>
          <div>
            <Homepage/>
            {/* <Middle/> */}
          </div>
            {/* <Footer/> */}
          {/* <div>
            <div className="mt-32">Signal</div>

          </div> */}
      </ErrorBoundary>
    </div>


  );
}

export default App;
