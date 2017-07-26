import React from 'react';

import NavBar from './NavBar';
import Section from './Section';
import Hero from './Hero';

const App = () => {
  return (
    <div className="container">
      <NavBar navItems={["Home", "About", "Blog", ""]}/>
      <Hero />
      <div className="flex-row">
        <Section header={"Home"} content={"Content for the Home section!"} />
        <Section header={"About"} content={"Content for the About section!"} />
        <Section header={"Blog"} content={"Content for the Blog section!"} />
      </div>
    </div>
  )
}

export default App;
