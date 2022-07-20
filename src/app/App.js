import './App.css';
import Layout from '../components/Layout/Layout';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Contact from '../components/Contact/Contact';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Blog from '../components/Blog/Blog';
import ThemeContext from '../contexts/ThemeContext';
import { useState } from 'react';
import ThemeConfig from '../configs/Theme';
import Cookies from 'js-cookie';
// import EmojiSearch from '../components/EmojiSearch/EmojiSearch';
import SinglePost from '../components/SinglePost/SinglePost';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activeTheme,setActiveTheme] = useState(Cookies.get('theme') || 'light');
  return (
    <ThemeContext.Provider
      value={{
        theme: ThemeConfig[activeTheme],
        setActiveTheme
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/contact-us">
                <Contact/>
              </Route>
              <Route exact path="/about-us">
                <About/>
              </Route>
              <Route exact path="/blog">
                <Blog/> 
              </Route>
              {/* <Route exact path="/emoji">
                <EmojiSearch/>
              </Route> */}
              <Route exact path="/post/:id">
                <SinglePost/>
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
