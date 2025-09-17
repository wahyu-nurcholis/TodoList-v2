import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { FaRegUser } from "react-icons/fa6";
import { SlLock } from "react-icons/sl";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onLogin(username, password);
    setLoading(false);
  };

  return (
    <form onSubmit={submit} className="space-y-4 dark:text-white">
      <div>
        <label className="block text-sm mb-1">Username</label>
        <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="example_123" icon={FaRegUser} />
      </div>
      <div>
        <label className="block text-sm mb-1">Password</label>
        <Input type={show ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*******" icon={SlLock} rightIcon={show ? FaEyeSlash : FaEye} onRightIconClick={() => setShow(!show)} />
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
