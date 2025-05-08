---
title: API Overview
description: API overview of Sample Project 1
---

# API Overview

<VersionSelector />
<LanguageSwitcher />

This page provides an overview of the APIs available in Sample Project 1.

## Core API

The core API of Sample Project 1 consists of the following modules:

### Core Module

```javascript
import { core } from 'sample-project1';
```

The core module provides basic functionality.

| Function | Description |
| -------- | ----------- |
| `core.init(options)` | Initializes the library |
| `core.process(data)` | Processes data |
| `core.terminate()` | Terminates the library |

### Utility Module

```javascript
import { utils } from 'sample-project1';
```

The utility module provides helpful utility functions.

| Function | Description |
| -------- | ----------- |
| `utils.format(data, type)` | Formats data to the specified format |
| `utils.validate(data, schema)` | Validates data against a schema |
| `utils.merge(obj1, obj2)` | Merges two objects |

## Component API

Sample Project 1 provides components for various UI frameworks.

### React Components

```javascript
import { Button, Card, Modal } from 'sample-project1/react';
```

| Component | Description |
| --------- | ----------- |
| `<Button>` | Button component |
| `<Card>` | Card component |
| `<Modal>` | Modal component |

### Vue Components

```javascript
import { Button, Card, Modal } from 'sample-project1/vue';
```

| Component | Description |
| --------- | ----------- |
| `<Button>` | Button component |
| `<Card>` | Card component |
| `<Modal>` | Modal component |

## Plugin API

Sample Project 1 provides a plugin system.

```javascript
import { registerPlugin } from 'sample-project1';
```

| Function | Description |
| -------- | ----------- |
| `registerPlugin(plugin, options)` | Registers a plugin |
| `getPlugin(name)` | Gets a plugin by name |
| `removePlugin(name)` | Removes a plugin |

## Hook API

Sample Project 1 provides various lifecycle hooks.

```javascript
import { hooks } from 'sample-project1';
```

| Hook | Description |
| ---- | ----------- |
| `hooks.beforeInit` | Called before initialization |
| `hooks.afterInit` | Called after initialization |
| `hooks.beforeProcess` | Called before processing |
| `hooks.afterProcess` | Called after processing |

## Configuration API

Sample Project 1 provides various configuration options.

```javascript
import { configure } from 'sample-project1';
```

| Function | Description |
| -------- | ----------- |
| `configure(options)` | Configures the library |
| `getConfig()` | Gets the current configuration |
| `resetConfig()` | Resets the configuration to default values |

## Detailed API

For more detailed API reference, please refer to the [Function Reference](./functions.md) page.
