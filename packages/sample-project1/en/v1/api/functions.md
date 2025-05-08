---
title: Function Reference
description: Function reference for Sample Project 1
---

# Function Reference

<VersionSelector />
<LanguageSwitcher />

This page provides a detailed reference for the functions available in Sample Project 1.

## Core Module

### core.init(options)

Initializes the library.

**Parameters:**

- `options` (Object): Initialization options
  - `debug` (boolean, optional): Whether to enable debug mode. Default is `false`
  - `timeout` (number, optional): Timeout in milliseconds. Default is `1000`
  - `language` (string, optional): Language to use. Default is `'en'`

**Returns:**

- (Object): Initialized instance

**Example:**

```javascript
import { core } from 'sample-project1';

const instance = core.init({
  debug: true,
  timeout: 2000,
  language: 'en'
});
```

### core.process(data)

Processes data.

**Parameters:**

- `data` (any): Data to process

**Returns:**

- (Promise): Promise containing the processing result

**Example:**

```javascript
import { core } from 'sample-project1';

core.init();
core.process({ name: 'Sample' })
  .then(result => {
    console.log('Processing result:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### core.terminate()

Terminates the library.

**Parameters:** None

**Returns:**

- (boolean): Whether termination was successful

**Example:**

```javascript
import { core } from 'sample-project1';

core.init();
// Some processing
const success = core.terminate();
console.log('Termination successful:', success);
```

## Utility Module

### utils.format(data, type)

Formats data to the specified format.

**Parameters:**

- `data` (any): Data to format
- `type` (string): Format type (one of 'json', 'xml', 'csv', 'yaml')

**Returns:**

- (string): Formatted data

**Example:**

```javascript
import { utils } from 'sample-project1';

const data = { name: 'Sample', value: 123 };
const formatted = utils.format(data, 'json');
console.log(formatted); // '{"name":"Sample","value":123}'
```

### utils.validate(data, schema)

Validates data against a schema.

**Parameters:**

- `data` (any): Data to validate
- `schema` (Object): Validation schema

**Returns:**

- (Object): Validation result
  - `valid` (boolean): Whether validation was successful
  - `errors` (Array): List of errors (if validation failed)

**Example:**

```javascript
import { utils } from 'sample-project1';

const data = { name: 'Sample', age: 30 };
const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number', minimum: 0 }
  },
  required: ['name', 'age']
};

const result = utils.validate(data, schema);
console.log('Validation successful:', result.valid); // true
```

### utils.merge(obj1, obj2)

Merges two objects.

**Parameters:**

- `obj1` (Object): Base object
- `obj2` (Object): Object to merge

**Returns:**

- (Object): Merged object

**Example:**

```javascript
import { utils } from 'sample-project1';

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = utils.merge(obj1, obj2);
console.log(merged); // { a: 1, b: 3, c: 4 }
```

## Plugin API

### registerPlugin(plugin, options)

Registers a plugin.

**Parameters:**

- `plugin` (Object): Plugin object
  - `name` (string): Plugin name
  - `install` (Function): Installation function
- `options` (Object, optional): Plugin options

**Returns:**

- (boolean): Whether registration was successful

**Example:**

```javascript
import { registerPlugin } from 'sample-project1';

const myPlugin = {
  name: 'my-plugin',
  install(app, options) {
    // Plugin initialization code
  }
};

const success = registerPlugin(myPlugin, { debug: true });
console.log('Plugin registration successful:', success);
```

### getPlugin(name)

Gets a plugin by name.

**Parameters:**

- `name` (string): Plugin name

**Returns:**

- (Object|null): Plugin object, or `null` if not found

**Example:**

```javascript
import { getPlugin } from 'sample-project1';

const plugin = getPlugin('my-plugin');
if (plugin) {
  console.log('Plugin:', plugin.name);
}
```

### removePlugin(name)

Removes a plugin.

**Parameters:**

- `name` (string): Plugin name

**Returns:**

- (boolean): Whether removal was successful

**Example:**

```javascript
import { removePlugin } from 'sample-project1';

const success = removePlugin('my-plugin');
console.log('Plugin removal successful:', success);
```

## Configuration API

### configure(options)

Configures the library.

**Parameters:**

- `options` (Object): Configuration options
  - `debug` (boolean, optional): Whether to enable debug mode
  - `timeout` (number, optional): Timeout in milliseconds
  - `language` (string, optional): Language to use
  - `cache` (Object, optional): Cache configuration
    - `enabled` (boolean): Whether to enable caching
    - `directory` (string): Cache directory
    - `ttl` (number): Cache TTL in seconds
  - `loaders` (Array, optional): Custom loader configuration

**Returns:**

- (Object): Current configuration

**Example:**

```javascript
import { configure } from 'sample-project1';

const config = configure({
  debug: true,
  timeout: 2000,
  language: 'en',
  cache: {
    enabled: true,
    directory: '.cache',
    ttl: 3600
  }
});

console.log('Current configuration:', config);
```

### getConfig()

Gets the current configuration.

**Parameters:** None

**Returns:**

- (Object): Current configuration

**Example:**

```javascript
import { getConfig } from 'sample-project1';

const config = getConfig();
console.log('Current configuration:', config);
```

### resetConfig()

Resets the configuration to default values.

**Parameters:** None

**Returns:**

- (Object): Reset configuration

**Example:**

```javascript
import { resetConfig } from 'sample-project1';

const config = resetConfig();
console.log('Reset configuration:', config);
