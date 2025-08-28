export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20   bg-[url('https://images.unsplash.com/photo-1569462993407-932bbcaee12a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVwfGVufDB8fDB8fHww')] bg-cover bg-center flex items-center justify-center">
      <h1 className=" text-[#F1EFEC] text-5xl font-bold mb-4">Test Your Knowledge Anytime, Anywhere</h1>
      <p className="max-w-2xl text-lg mb-6 text-[#F1EFEC] ">
        Create quizzes, challenge friends, and track your progress with our interactive quiz platform.
      </p>
      <a href="/signup" className="bg-[#F1EFEC] text-[#715A5A] px-6 py-3 rounded-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all">
        Get Started
      </a>
    </section>
  );
}
