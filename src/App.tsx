function App() {
  return (
    <section className="min-h-full h-full w-full flex flex-col relative pb-[54px]">
      <main className="w-[375px] p-[12px] m-auto h-full">
        <h1 className="font-semibold text-lg">Welcome to react template</h1>
        <p className="text-[12px]">
          This template is based on vite and typescript, and it is recommended
          to use it as a starting point for your own projects.
        </p>
        <p>
          <div className="mt-4">
            <h2 className="font-semibold mb-2">Project Features:</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Built with Vite for excellent development experience</li>
              <li>TypeScript for type safety</li>
              <li>Integrated Tailwind CSS for rapid styling</li>
              <li>Mobile-first design with 375px default width</li>
              <li>Built-in VConsole for mobile debugging</li>
              <li>ESLint + Prettier for code standardization</li>
              <li>Git Hooks to ensure code quality</li>
            </ul>
          </div>
        </p>
      </main>
      <footer className="absolute h-[54px] right-0 left-0 bottom-0 text-[8px] bg-slate-100 shadow-xl shadow-black">
        <div className="p-[10px] flex w-[375px] m-auto">
          <a
            className="w-[12px] h-[12px] text-[14px] shrink-0 mr-1"
            target="_blank"
            href="https://github.com/syang-dev/react-template-H5"
          >
            <img src="/github.svg" alt="Github" />
          </a>
          <p>
            We welcome everyone to submit issues on our{" "}
            <a
              target="_blank"
              className="font-blod"
              href="https://github.com/syang-dev/react-template-H5"
            >
              GitHub
            </a>{" "}
            repository. Your feedback and suggestions are essential in improving
            our products and services. Please feel free to open an issue or
            submit a pull request .
          </p>
        </div>
      </footer>
    </section>
  );
}
export default App;
