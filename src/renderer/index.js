// Initial landing page
document.write(`
  <h1>Hello world!</h1>
  <script>
  function foo() {
    alert("Hi")
  }
  </script>
  <button onclick="foo()">Click me</button>  
  <p>
    You are using Node.js ${process.versions.node},
    Chromium ${process.versions.chrome},
    Electron ${process.versions.electron},
    and <code>electron-webpack</code> ${require('electron-webpack/package.json').version}.
  </p>
`)
