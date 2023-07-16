const nav = `
  
`;

export const pages = {
  main: `
    <h1>Welcome to Assignment 1!</h1>

    <form action="/create-user" method="POST">
      <div>
        <label>
          New user
          <input type="text" name="user" />
        </label>
      </div>
      <button type="submit">
        Create
      </button>
    </form>
  `,

  users: `
    <h1>Users</h1>
    
    <ul>
      <li>User 1</li>
      <li>User 2</li>
      <li>User 3</li>
    </ul>
  `,
};
