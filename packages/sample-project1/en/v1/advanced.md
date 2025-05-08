---
title: Advanced Usage
description: Advanced usage of Sample Project 1
---

# Advanced Usage

<VersionSelector />
<LanguageSwitcher />

## Plugin System

Sample Project 1 provides a plugin system. You can extend functionality by using plugins.

### Creating Plugins

Plugins are objects with the following structure:

```javascript
const myPlugin = {
  name: 'my-plugin',
  install(app, options) {
    // Plugin initialization code
    app.registerFunction('myFunction', (arg) => {
      return `Plugin function: ${arg}`;
    });
  }
};
```

### Registering Plugins

```javascript
import { registerPlugin } from 'sample-project1';
import myPlugin from './my-plugin';

registerPlugin(myPlugin, {
  // Plugin options
  debug: true
});
```

## Hooks

Sample Project 1 provides various lifecycle hooks.

### Available Hooks

| Hook Name | Description |
| --------- | ----------- |
| `beforeInit` | Called before initialization |
| `afterInit` | Called after initialization |
| `beforeProcess` | Called before processing |
| `afterProcess` | Called after processing |

### Hook Usage Example

```javascript
import { hooks } from 'sample-project1';

hooks.beforeInit.tap('MyPlugin', (context) => {
  console.log('Before init hook', context);
});

hooks.afterProcess.tap('MyPlugin', (result, context) => {
  console.log('After process hook', result, context);
  return result;
});
```

## Advanced Configuration

### Custom Loaders

```javascript
import { configure } from 'sample-project1';

configure({
  loaders: [
    {
      test: /\.custom$/,
      use: 'custom-loader'
    }
  ]
});
```

### Cache Configuration

```javascript
import { configure } from 'sample-project1';

configure({
  cache: {
    enabled: true,
    directory: '.cache',
    ttl: 3600 // 1 hour
  }
});
```

## Performance Optimization

### Lazy Loading

```javascript
// Load modules only when needed
const { heavyFunction } = await import('sample-project1/heavy');
const result = heavyFunction();
```

### Worker Threads

```javascript
import { createWorker } from 'sample-project1';

const worker = createWorker();
worker.postMessage({ type: 'process', data: largeData });
worker.onmessage = (event) => {
  console.log('Processing result:', event.data);
};
```

## Debugging and Troubleshooting

### Debug Mode

```javascript
import { configure, debug } from 'sample-project1';

configure({ debug: true });

// Output debug information
debug.log('Debug info');
debug.warn('Warning');
debug.error('Error');
```

### Performance Profiling

```javascript
import { profiler } from 'sample-project1';

profiler.start('Process A');
// Some processing
profiler.end('Process A');

// Output profiling results
console.log(profiler.getResults());
```

## API

For more detailed API reference, please refer to the [API Overview](./api/index.md) page.
