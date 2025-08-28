const features = [
  { title: "Create Quizzes", desc: "Easily make custom quizzes for any topic." },
  { title: "Attempt Quizzes", desc: "Test yourself with interactive and timed quizzes." },
  { title: "Track Scores", desc: "View detailed analytics of your performance." },
];

export default function Features() {
  return (
    <section className="py-16 px-6 bg-[#F1EFEC] text-center">
      <h2 className="text-3xl font-bold mb-12 text-[#37353E]">Why Choose QuizoraX ?</h2>
      <div className="grid md:grid-cols-3 gap-8 ">
        {features.map((f, i) => (
          <div key={i} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all
">
            <h3 className="text-xl font-semibold mb-2 text-[#37353E]">{f.title}</h3>
            <p className="text-[#6a6969]">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
