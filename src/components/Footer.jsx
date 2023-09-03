import gitHubLogo from "../assets/logo-github.svg";

export default function Footer() {
  // eslint-disable-next-line
  return (
    <footer>
      <div className="creator-info flex items-center justify-center gap-1.5">
        <h6>
          <strong>Made by </strong>
        </h6>
        <a
          href="https://github.com/RaulUrdanetaG"
          rel="noreferrer"
          target="_blank"
        >
          <img src={gitHubLogo} alt="Github logo" className="w-8" />
        </a>
        <h6>
          <a
            href="https://github.com/RaulUrdanetaG"
            rel="norefrerer"
            target="_blank"
          >
            <b>Raul Urdaneta</b>
          </a>
        </h6>
      </div>
    </footer>
  );
}
