import React, { useState, useMemo } from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

import hashinclude from "../assets/hashinclude.png";
import focus      from "../assets/focus.png";
import carrental  from "../assets/car-rental.png";
import hli        from "../assets/hli.png";
import movie      from "../assets/movie.png";
import google     from "../assets/google.png";
import bg         from "../assets/bg.png";
import qr         from "../assets/qr.png";
import ai         from "../assets/ai.png";
import snake      from "../assets/snake.png";
import tictactoe  from "../assets/tictactoe.png";
import spotify    from "../assets/spotify.png";
import scm        from "../assets/scm.jpg";
import sort       from "../assets/sort.png";

const PROJECTS = [
  { img: hashinclude, name: "HashInclude 2k24",            link: "https://hashinclude-8ba50.web.app/", tags: ["React"],              cat: "web"   },
  { img: focus,       name: "FOCUS",                       link: "https://klfocus.netlify.app/", tags: ["React"],           cat: "web"   },
  { img: carrental,   name: "Car Rental System",           git: "https://github.com/Babaafrid/Car_Rental", tags: ["Java"], cat: "tools" },
  { img: hli,         name: "Health & Life Insurance",     git: "https://github.com/Babaafrid/HLI", tags: ["Java"],        cat: "tools" },
  { img: movie,       name: "Movie Library",               git: "https://github.com/Babaafrid/movie-library-frontend/", link: "https://dev-movie-library.netlify.app/", tags: ["React", "API"], cat: "web" },
  { img: scm,         name: "Supply Chain Management",     git: "https://github.com/Babaafrid/Supply-Chain-Management", tags: ["Python", "Django"], cat: "tools" },
  { img: sort,        name: "Sorting Visualizer",          git: "https://github.com/Babaafrid/sorting-visualizer", link: "https://dev-sorting-visualizer.netlify.app/", tags: ["JS"], cat: "tools" },
  { img: google,      name: "Google Clone",                git: "https://github.com/Babaafrid/google_clone", link: "https://googleclone7.netlify.app/", tags: ["HTML/CSS"], cat: "web" },
  { img: bg,          name: "BG Image Remover",            git: "https://github.com/Babaafrid/bg-remover", link: "https://afrid-bgremover.netlify.app/", tags: ["Python", "AI"], cat: "tools" },
  { img: qr,          name: "QR Code Generator",           git: "https://github.com/Babaafrid/qrcode", link: "https://afrid-qrcode.netlify.app/", tags: ["JS"], cat: "tools" },
  { img: ai,          name: "AI Assistant",                git: "https://github.com/Babaafrid/AI_Assistant", tags: ["Python", "AI"], cat: "tools" },
  { img: snake,       name: "Snake Mania",                 git: "https://github.com/Babaafrid/snakemania", link: "https://babaafrid.github.io/snakemania/", tags: ["JS"], cat: "games" },
  { img: tictactoe,   name: "Tic Tac Toe",                 git: "https://github.com/Babaafrid/tictactoe", link: "https://babaafrid.github.io/tictactoe/", tags: ["JS"], cat: "games" },
  { img: spotify,     name: "Spotify Clone",               git: "https://github.com/Babaafrid/spotify_clone", link: "https://babaafrid.github.io/spotify_clone/", tags: ["HTML/CSS"], cat: "web" },
];

const FILTERS = ["All", "Web", "Tools", "Games"];

function Projects() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() =>
    active === "All" ? PROJECTS : PROJECTS.filter(p => p.cat === active.toLowerCase()),
    [active]
  );

  return (
    <div>
      <h2 className="project-heading">My <span className="lime">Projects</span></h2>

      <div className="project-filters" role="group" aria-label="Filter projects">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`filter-btn${active === f ? " active" : ""}`}
            onClick={() => setActive(f)}
            aria-pressed={active === f}
          >
            {f}
            {f !== "All" && (
              <span className="filter-count">
                {PROJECTS.filter(p => p.cat === f.toLowerCase()).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="projects-empty">No projects in this category yet.</p>
      ) : (
        <div className="projectsContainer">
          {filtered.map(p => (
            <ProjectCard key={p.name} img={p.img} name={p.name} link={p.link} git={p.git} tags={p.tags} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
