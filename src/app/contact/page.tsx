import Navbar from "./../Navbar";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-4 md:p-24 bg-slate-600">
      <div className="top flex flex-col md:flex-row items-center justify-center md:justify-start">
        <h1 className="text-6xl font-bold text-white mb-2 md:mb-0">Contact</h1>
      </div>
      <div className="bottom">
        <Navbar />
      </div>
    </main>
  );
}
