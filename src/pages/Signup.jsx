import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter all fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQul5umSQJ5fAH2X2iI3AJK90-KST_ilF5v_w&s')] bg-cover bg-center flex items-center justify-center">
       <svg className="w-12 h-12 text-gray-400 " fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
        </svg>
      <form
        onSubmit={handleSignup}
        className="bg-gray p-6 rounded-2xl shadow-lg w-80 border-black-50"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Hey! Welcome</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      <button className="w-full hover:shadow-xl hover:-translate-y-1 transition-all bg-[#37353E] text-[#D3DAD9] p-2 rounded">
       Register 
        </button>
        <h1 className="text-[#d5dedc] underline m-0 text-center text-sm hover:text-blue-200 transition-all "><a   href="/login">Already On QuizoraX </a></h1>
        <h1 className="text-[#7c8382] m-0 text-center text-sm hover:shadow-xl hover:-translate-y-1 transition-all "><a   href="/"><svg fill="#ffffff" height="15px"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 206.108 206.108" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M152.774,69.886H30.728l24.97-24.97c3.515-3.515,3.515-9.213,0-12.728c-3.516-3.516-9.213-3.515-12.729,0L2.636,72.523 c-3.515,3.515-3.515,9.213,0,12.728l40.333,40.333c1.758,1.758,4.061,2.636,6.364,2.636c2.303,0,4.606-0.879,6.364-2.636 c3.515-3.515,3.515-9.213,0-12.728l-24.97-24.97h122.046c19.483,0,35.334,15.851,35.334,35.334s-15.851,35.334-35.334,35.334H78.531 c-4.971,0-9,4.029-9,9s4.029,9,9,9h74.242c29.408,0,53.334-23.926,53.334-53.334S182.182,69.886,152.774,69.886z"></path> </g></svg></a></h1>
  
      </form>
    </div>
  );
}
