import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
//styles
import "./Signup.css";

export default function Signup() {
  //email,password,displayname,image

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { signup, error, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }

    if (!selected.type.includes("image")) {
      setThumbnailError("Please select an image file");
      return;
    }

    if (selected.size > 100000) {
      setThumbnailError("Please select a file less than 100kb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    console.log("thumbnail updated");
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
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
        <input type="file" required onChange={handleFileChange} />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      {!isPending && <button className="btn">Sign Up</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading...
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
