import React from 'react';
import { Accordion, AccordionItem } from '../lib';
import '../lib/style/index.css';

const App = () => (
  <div>
    <h1>React Accordion</h1>
    <Accordion atomic={true}>
      <AccordionItem title="Title 1">
        <DummyContent />
      </AccordionItem>
      <AccordionItem title="Title 2">
        <DummyContent />
      </AccordionItem>
      <AccordionItem title="Title 3">
        <DummyContent />
      </AccordionItem>
    </Accordion>
  </div>
);

const DummyContent = () => (
  <p style={{ padding: '18px' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
);

export default App;
