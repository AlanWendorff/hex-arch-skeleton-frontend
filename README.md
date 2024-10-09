# Hexagonal Architecture Skeleton Frontend

**Project structure description:** This project follows an approach of 2 yarn workspaces. Into  ```src``` directory you will find  [```core```](https://github.com/AlanWendorff/extendeal-challenge/tree/develop/src/core) and [```views```](https://github.com/AlanWendorff/extendeal-challenge/tree/develop/src/views) directories.

[```core```](https://github.com/AlanWendorff/extendeal-challenge/tree/develop/src/core) : Holds everything concerned to API Fetching.
<br/>
[```views```](https://github.com/AlanWendorff/extendeal-challenge/tree/develop/src/views): As the name implies, this directory holds everything concerned to Frameworks or Libraries to build user interfaces.

The modularity of the project has the advantage of being able to consume ```src/core``` from any framework or library. This allows to have many frameworks coexisting in the same project.

![folder structure](https://github.com/user-attachments/assets/de3aa958-7f99-4cbf-a0ea-69b7506bc4c4)

## Getting Started

Install dependencies on the root project directory with:<br/>

```bash
npm install
# or
yarn
# or
pnpm install
```
To run the development server:

Positioned into **Framework/library root dir** [```src/views/react-client```](https://github.com/AlanWendorff/extendeal-challenge/tree/develop/src/views/react-client)

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.
