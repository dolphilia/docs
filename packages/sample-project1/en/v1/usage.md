---
title: Usage
description: How to use Sample Project 1
---

# Usage

<VersionSelector />
<LanguageSwitcher />

## Installation

To install Sample Project 1, run the following command:

```bash
# Using npm
npm install sample-project1

# Using yarn
yarn add sample-project1

# Using pnpm
pnpm add sample-project1
```

## Basic Usage

### Importing the Module

```javascript
// ES Modules
import { sampleFunction } from 'sample-project1';

// CommonJS
const { sampleFunction } = require('sample-project1');
```

### Using Basic Functions

```javascript
// Using the sample function
const result = sampleFunction('Hello');
console.log(result); // 'Hello, world!'
```

## Using Components

### Example with React

```jsx
import { SampleComponent } from 'sample-project1/react';

function App() {
  return (
    <div>
      <SampleComponent text="Hello" />
    </div>
  );
}
```

### Example with Vue

```vue
<template>
  <div>
    <SampleComponent text="Hello" />
  </div>
</template>

<script>
import { SampleComponent } from 'sample-project1/vue';

export default {
  components: {
    SampleComponent
  }
};
</script>
```

## Configuration Options

Sample Project 1 supports the following configuration options:

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `language` | `string` | `'en'` | Language to use |
| `debug` | `boolean` | `false` | Enable debug mode |
| `timeout` | `number` | `1000` | Timeout in milliseconds |

### Configuration Example

```javascript
import { configure } from 'sample-project1';

configure({
  language: 'en',
  debug: true,
  timeout: 2000
});
```

## Advanced Usage

For more advanced usage, please refer to the [Advanced Usage](./advanced.md) page.
