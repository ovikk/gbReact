import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeIsAuth } from "../Chat/chatSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/compat/app";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const firebaseApp = firebase.apps[0];

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      dispatch(changeIsAuth(true))
      history.push('/playground')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Fill in the form below to register new account.</p>
        <div>
          <input
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            name="password"
            onChange={handlePassChange}
            value={password}
            type="password"
          />
        </div>
        <div>
          {error && <p>{error}</p>}
          <button type="submit">Login</button>
        </div>
        <hr />
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>

      <code>
        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
      </code>
    </div>
  );
};

export default Signup;
