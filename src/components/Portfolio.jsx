import { useState } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "MBTI Personality Tester",
      category: "Applications",
      tech: "Python · Flask · HTML · CSS · JSON · Render",
      img: "/assets/images/PROJECTmbti.png",
      link: "https://mbti-8vbk.onrender.com/",
    },
    {
      title: "Skincare Recommendation System",
      category: "Web development",
      tech: "Python · Flask · ML · Pandas · NumPy · Scikit-learn · HTML · CSS",
      img: "/assets/images/project-2.png",
      link: "#",
    },
    {
      title: "Portfolio",
      category: "Web development",
      tech: "ReactJS, CSS.",
      img: "/assets/images/project-3.png",
      link: "#",
    },
    {
      title: "Upcoming Application",
      category: "Applications",
      tech: "Space kept for future application or ML project you will build.",
      img: "/assets/images/project-4.png",
      link: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* FILTER BUTTONS */}
        <ul className="filter-list">
          {["All", "Web development", "Applications", "Web design"].map(
            (item) => (
              <li className="filter-item" key={item}>
                <button
                  className={activeFilter === item ? "active" : ""}
                  onClick={() => setActiveFilter(item)}
                >
                  {item}
                </button>
              </li>
            )
          )}
        </ul>

        {/* PROJECT LIST */}
        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li
              key={index}
              className="project-item active"
              data-filter-item
            >
              <a href={project.link} target="_blank" rel="noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.tech}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
