import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <h1 className="text-5xl font-bold">
            Mohamad Ruzni.
          </h1>
        </section>
      </main>
    </>
  );
}

export default App;
