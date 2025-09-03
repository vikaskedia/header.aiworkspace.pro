# URL-Based Workspace Selection

## 🎯 **Feature Overview**

The header component now automatically selects workspaces based on URL parameters when the page loads or reloads. This ensures that users always see the correct workspace context based on their current URL.

## 🔗 **Supported URL Formats**

### 1. **Path-Based URLs (Recommended)**
```
https://single-ws-dashboard.aiworkspace.pro/single-workspace/3/dashboard
                                                      ↑
                                                Workspace ID: 3
```

### 2. **Query Parameter URLs**
```
https://single-ws-dashboard.aiworkspace.pro/dashboard?workspace_id=3
                                                      ↑
                                                Workspace ID: 3
```

### 3. **Hash-Based URLs**
```
https://single-ws-dashboard.aiworkspace.pro/dashboard#workspace_id=3
                                                      ↑
                                                Workspace ID: 3
```

## ⚡ **How It Works**

### **Automatic Detection**
1. **Page Load**: Component checks URL for workspace ID
2. **Workspace Loading**: Waits for workspaces to be loaded
3. **Auto-Selection**: Automatically selects the workspace from URL
4. **State Update**: Updates Pinia store and emits events

### **Real-Time Updates**
- **URL Changes**: Watches for URL changes and updates workspace
- **Navigation**: Works with browser back/forward buttons
- **Direct Links**: Supports direct links to specific workspaces

## 🚀 **Implementation Details**

### **URL Parsing Priority**
1. **Path Pattern**: `/single-workspace/{id}/...`
2. **Query Param**: `?workspace_id={id}`
3. **Hash Param**: `#workspace_id={id}`

### **Workspace Selection Logic**
```typescript
// 1. Extract workspace ID from URL
const urlWorkspaceId = getWorkspaceIdFromUrl()

// 2. Find workspace in available workspaces
const workspace = flattenedWorkspaces.find(w => w.id.toString() === urlWorkspaceId)

// 3. Set as current workspace
workspaceStore.setCurrentWorkspace(workspace)

// 4. Emit change event
emit('workspaceChange', workspace)
```

## 📱 **Usage Examples**

### **Basic Implementation**
```vue
<template>
  <AIWorkspaceHeader @workspace-change="handleWorkspaceChange" />
</template>

<script setup>
import { AIWorkspaceHeader } from '@aiworkspace/shared-header'

const handleWorkspaceChange = (workspace) => {
  console.log('Workspace changed to:', workspace.title)
  // Update your app's state based on the selected workspace
}
</script>
```

### **With Custom Workspace ID**
```vue
<template>
  <AIWorkspaceHeader 
    :current-workspace-id="currentWorkspaceId"
    @workspace-change="handleWorkspaceChange" 
  />
</template>

<script setup>
import { ref, computed } from 'vue'
import { AIWorkspaceHeader } from '@aiworkspace/shared-header'

// Get workspace ID from current route
const route = useRoute()
const currentWorkspaceId = computed(() => route.params.workspaceId)

const handleWorkspaceChange = (workspace) => {
  // Handle workspace change
}
</script>
```

## 🔄 **Event Handling**

### **Workspace Change Event**
```typescript
// Event emitted when workspace is auto-selected from URL
@workspace-change="(workspace: Workspace) => void"
```

### **Event Data**
```typescript
interface Workspace {
  id: number
  title: string
  description: string
  parent_workspace_id?: number
  created_by: string
  archived: boolean
  created_at: string
  latest_activity: string
  hasAccess: boolean
  accessType?: string
  children?: Workspace[]
  level?: number
}
```

## 🎨 **URL Pattern Examples**

### **Dashboard URLs**
```
/single-workspace/1/dashboard          → Workspace ID: 1
/single-workspace/42/goals            → Workspace ID: 42
/single-workspace/123/tasks           → Workspace ID: 123
```

### **With Query Parameters**
```
/dashboard?workspace_id=1             → Workspace ID: 1
/goals?workspace_id=42               → Workspace ID: 42
/tasks?workspace_id=123              → Workspace ID: 123
```

### **With Hash Parameters**
```
/dashboard#workspace_id=1             → Workspace ID: 1
/goals#workspace_id=42               → Workspace ID: 42
/tasks#workspace_id=123              → Workspace ID: 123
```

## ⚠️ **Important Notes**

### **Dependencies**
- **Pinia Store**: Must be initialized before component
- **Authentication**: User must be authenticated
- **Workspaces**: Must be loaded from backend

### **Fallback Behavior**
- **No URL Match**: No workspace auto-selection
- **Invalid ID**: Warning logged, no selection
- **Missing Workspace**: Warning logged, no selection

### **Performance**
- **URL Watching**: Minimal performance impact
- **Auto-Selection**: Only runs when necessary
- **Caching**: Workspace data cached in Pinia store

## 🐛 **Troubleshooting**

### **Workspace Not Auto-Selected**
1. **Check URL Format**: Ensure workspace ID is in correct format
2. **Verify Authentication**: User must be logged in
3. **Check Console**: Look for warning/error messages
4. **Verify Workspaces**: Ensure workspaces are loaded

### **Console Messages**
```
[AIWorkspaceHeader] Auto-selected workspace from URL: My Workspace (ID: 3)
[AIWorkspaceHeader] Workspace with ID 999 not found in available workspaces
[AIWorkspaceHeader] Error auto-selecting workspace from URL: [error details]
```

## 🔗 **Related Documentation**

- [Installation Guide](./INSTALLATION_GUIDE.md)
- [CommonJS Installation](./COMMONJS_INSTALLATION.md)
- [Troubleshooting Guide](./TROUBLESHOOTING.md)
- [API Reference](./README.md#api-reference)
