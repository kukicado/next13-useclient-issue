export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Hello</title>
      </head>
      <body>
        <h1>Hello World (from Layout.js)</h1>
        {children}
      </body>
    </html>
  );
}
