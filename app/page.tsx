export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-end">
      <main className="flex flex-col p-4 md:p-8 gap-4">
        <h1 className="text-4xl font-agrandir">
          Garrett <q>Bear</q> Whisten
        </h1>
        <p className="text-xl md:max-w-[60vw]">
          Hybrid designer and front-end developer based in Los Angeles,
          specializing in design systems and crafting efficient, user-friendly
          solutions. Experience includes contributing to the{" "}
          <a
            className="underline decoration-dotted hover:decoration-solid"
            href="https://metamask.github.io/metamask-storybook/index.html?path=/docs/components-componentlibrary-avataraccount--docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            MetaMask Design System
          </a>{" "}
          at ConsenSys and leading{" "}
          <a
            className="underline decoration-dotted hover:decoration-solid"
            href="https://concrete.gumgum.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GumGum&apos;s Design System
          </a>{" "}
          development, streamlining workflows and enhancing team productivity.
        </p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/gwhisten/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🡒 LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/garrettbear"
              target="_blank"
              rel="noopener noreferrer"
            >
              🡒 GitHub
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1pbm5QN35s2_jLzRdG8oelVa3bFrGe89L/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              🡒 Resume
            </a>
          </li>
        </ul>
      </main>
      <footer className="text-xs text-center p-3">
        &copy; {new Date().getFullYear()} GarrettBear
      </footer>
    </div>
  );
}
