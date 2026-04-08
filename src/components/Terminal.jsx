import React, { useState, useRef, useEffect } from "react";
import "./Terminal.css";

const COMMANDS = {
  help: () =>
    "Commands: help · about · skills · contact · projects · experience · clear",
  about: () =>
    "Full-stack developer & freelancer. Building web apps with React, Node, and Python since 2022.",
  skills: () =>
    "React · JavaScript · Node.js · Java · Python · Django · MySQL",
  contact: () =>
    "Email: babaafrid7@gmail.com | GitHub: github.com/babaafrid",
  projects: () =>
    "Key projects: ISKCON website · HashInclude · FOCUS · Movie Library · Sorting Visualizer · and more.",
  experience: () =>
    "Freelancer (Mr Developer) · Student Peer Mentor (KL Univ) · Web Master (HashInclude) · FOCUS IRP Director",
};

function Terminal() {
  const [history, setHistory] = useState([
    "Welcome! I'm Baba Afrid S — Freelance Web Developer | Student Peer Mentor",
    "Pursuing BTech CSE(Hons) at KL University",
    "Type 'help' to see available commands.",
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  // Auto-scroll to bottom whenever history changes
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    if (cmd.toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      setCmdHistory((h) => [cmd, ...h]);
      setHistoryIdx(-1);
      return;
    }

    const handler = COMMANDS[cmd.toLowerCase()];
    const output = handler
      ? handler()
      : `Command not found: "${cmd}". Type 'help'`;

    setHistory((h) => [...h, `$ ${cmd}`, output]);
    setCmdHistory((h) => [cmd, ...h]);
    setHistoryIdx(-1);
    setInput("");
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIdx + 1, cmdHistory.length - 1);
      setHistoryIdx(next);
      setInput(cmdHistory[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(historyIdx - 1, -1);
      setHistoryIdx(next);
      setInput(next === -1 ? "" : cmdHistory[next]);
    }
  };

  return (
    <div className="terminal-container">
      <div className="terminal_toolbar">
        <div className="butt" aria-hidden="true">
          <span className="btn btn-color"></span>
          <span className="btn"></span>
          <span className="btn"></span>
        </div>
        <p className="user">babaafrid7@admin: ~</p>
        <div className="add_tab" aria-hidden="true">+</div>
      </div>
      <div className="terminal_body">
        <div className="terminal_prompt">
          <span className="terminal_user">babaafrid7@admin:</span>
          <span className="terminal_location">~</span>
          <span className="terminal_bling">$</span>
          <span className="terminal_cursor"></span>
        </div>
        <div
          className="terminal_output"
          role="log"
          aria-live="polite"
          ref={outputRef}
        >
          {history.map((line, idx) => (
            <p className="hacker-text" key={`line-${idx}-${line.slice(0,8)}`}>
              {line}
            </p>
          ))}
        </div>
        <form className="terminal_input" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            placeholder="Type a command (try: help)..."
            className="input_text"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Terminal command input"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
}

export default Terminal;
