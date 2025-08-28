export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-[#37353E] ">
      <h1 className="text-2xl font-bold text-[#D3DAD9]">QuizoraX</h1>
      <ul className="flex gap-9 text-[#D3DAD9]">
        <li className="hover:shadow-xl hover:-translate-y-1 transition-all
"><a href="/">Home</a></li>
        <li className="hover:shadow-xl hover:-translate-y-1 transition-all
"><a href="/dashboard">Quizzes</a></li>
        <li className="hover:shadow-xl hover:-translate-y-1 transition-all
"><a href="/login">Login</a></li>
        <li className="hover:shadow-xl hover:-translate-y-1 transition-all
"><a href="/signup" className="bg-[#715A5A] text-white px-4 py-2 rounded-lg">Sign Up</a></li>
      </ul>
    </nav>
  );
}
