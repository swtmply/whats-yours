import { signin } from "next-auth/client";

const Login = () => {
  return (
    <>
      <form>
        <div className="field">
          <label>username:</label>
          <input type="text" name="username" />
        </div>
        <div className="field">
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
