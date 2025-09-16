import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onLogin(username, password);
    setLoading(false);
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Username</label>
        <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
      </div>
      <div>
        <label className="block text-sm mb-1">Password</label>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
      </div>
      <div>
        <Button type="submit" className="w-full bg-blue-600 text-white">
          {loading ? "Loading..." : "Login"}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
