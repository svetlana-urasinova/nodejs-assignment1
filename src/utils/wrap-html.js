export const wrapHtml = html =>
  `<html>
    <head><title>My first page</title></head>
    <body>
      <nav>
        <ul>
          <li>
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/users">
              Users
            </a>
          </li>
        </ul>
      </nav>
      ${html}
    </body>
  </html>
  `;
