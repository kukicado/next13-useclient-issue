This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## Issues to reproduce

1. Start up server and navigate to `localhost:3000`
2. Navigate to `localhost:3000/123`
3. Navigate to `localhost:3000/123/567`
4. Navigate back to `localhost:3000/123`

Error:

```
TypeError: Cannot read properties of undefined (reading 'default')
    at resolveModuleMetaData (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:195:82)
    at serializeModuleReference (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1298:50)
    at resolveModelToJSON (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1660:40)
    at Array.toJSON (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1081:40)
    at stringify (<anonymous>)
    at processModelChunk (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:163:36)
    at retryTask (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1823:50)
    at performWork (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1856:33)
    at AsyncLocalStorage.run (node:async_hooks:330:14)
    at eval (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1934:55)
TypeError: Cannot read properties of undefined (reading 'default')
    at resolveModuleMetaData (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:195:82)
    at serializeModuleReference (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1298:50)
    at resolveModelToJSON (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1660:40)
    at Array.toJSON (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1081:40)
    at stringify (<anonymous>)
    at processModelChunk (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:163:36)
    at retryTask (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1823:50)
    at performWork (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1856:33)
    at AsyncLocalStorage.run (node:async_hooks:330:14)
    at eval (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1934:55)
TypeError: Cannot read properties of undefined (reading 'default')
    at resolveModuleMetaData (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:195:82)
    at serializeModuleReference (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1298:50)
    at resolveModelToJSON (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1660:40)
    at Array.toJSON (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1081:40)
    at stringify (<anonymous>)
    at processModelChunk (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:163:36)
    at retryTask (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1823:50)
    at performWork (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1856:33)
    at AsyncLocalStorage.run (node:async_hooks:330:14)
    at eval (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1934:55) {
  digest: '699076802'
}
```

The error does not happen every single time. Sometimes navigating to
`localhost:3000/123` first and then going back to `localhost:3000` or starting
at `localhost:3000/123` and going back to `localhost:3000/123/456` will display
the same error.

I am running this on a Windows 11 machine with Next.js 13 and Node 16.18.0
