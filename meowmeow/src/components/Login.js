import React from 'react'

export default function Login() {
  return (
    <div>
       <div class="login-container">
        <h1>Login</h1>
        <form id="login-form" action="process-login.php" method="post">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" requiredn />

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Login</button>
        </form>
    </div>
    </div>
  )
}
