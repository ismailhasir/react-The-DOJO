import { useState } from "react";

//styles
import "./Signup.css";

export default function Signup() {
  //email,password,displayname,image

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const handleFileChange = ()

  return (
    <form className="auth-form">
      <h2>Sign Up</h2>
      <label>
        <span>E-Mail:</span>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        <span>Password:</span>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <label>
        <span>Display Name:</span>
        <input
          type="text"
          value={displayName}
          required
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>

      <label>
        <span>Profile Thumbnail:</span>
        <input type="file" required />
      </label>
      <button className="btn">Sign Up</button>
    </form>
  );
}
