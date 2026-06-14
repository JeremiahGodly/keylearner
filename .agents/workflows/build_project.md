# Build Project Workflow

This workflow describes how to set up the Node.js environment, install npm dependencies, and compile the Next.js application.

## Prerequisites

- **Node.js (>= 20)**: Sourced via `nvm`. If Node.js is not present in the PATH, run:
  ```bash
  source ~/.nvm/nvm.sh && nvm use 20
  ```
  (If Node 20 is not installed, install it first: `nvm install 20`).

## Steps

1. **Install Dependencies**:
   Install all package dependencies defined in `package.json`:
   ```bash
   npm install
   ```

2. **Build the Project**:
   Create an optimized production build of the Next.js application:
   ```bash
   npm run build
   ```
