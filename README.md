# react-light-accordion
A very lightweight accordion component in React (only has one dependency).

<center>
<img src="https://raw.githubusercontent.com/farbodsalimi/react-light-accordion/master/src/demo/demo.png" width="450"/>

[LIVE DEMO](https://farbodsalimi.github.io/react-light-accordion/demo/)
</center>

## Installation

```bash
yarn add react-light-accordion
```

or

```bash
npm i react-light-accordion
```

## Example

```jsx
import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

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
```

### Properties

|   Component   |  Name  |   Type   |  Default  |  Description  |
|  :---------:  | :----: |  :----:  | :-------: | :----------- |
|   Accordion   | atomic |  `bool`  |  `false`  | False means multiple accordion items can be active at the same time
| AccordionItem |  title | `string` |   TITLE   | Defines the title of accordion items|
