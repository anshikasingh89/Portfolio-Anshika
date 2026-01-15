export default function Resume() {
  return (
    <article className="resume active" data-page="resume">

 
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* EDUCATION */}
      <section className="timeline">

        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Master of Computer Applications (MCA), DAVV Indore
            </h4>
            <span>2024 — 2026 (Pursuing)</span>
            <p className="timeline-text">
              Currently pursuing MCA at Devi Ahilya Vishwavidyalaya (DAVV), Indore, with
              coursework in programming, data structures, DBMS, operating systems, AI and cloud.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Bachelor of Science (B.Sc.), I.P.S. Academy, Indore (DAVV)
            </h4>
            <span>2021 — 2024</span>
            <p className="timeline-text">
              Completed B.Sc. from I.P.S. Academy, affiliated to DAVV, Indore. Graduated with
              First Division with Distinction, building a strong base in core subjects and
              programming fundamentals.
            </p>
          </li>

        </ol>
      </section>

      {/* EXPERIENCE */}
      <section className="timeline">

        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              AI Intern (Azure, Power BI & Copilot) — Microsoft Elevate (AICTE)
            </h4>
            <span>Ongoing — 4 Weeks</span>
            <p className="timeline-text">
              Currently selected for the Microsoft Elevate – AICTE 4-Week Internship Program,
              focused on Artificial Intelligence and cloud-based tools. Gaining hands-on
              exposure to Microsoft Azure services, Power BI for data visualization, and
              Microsoft Copilot for AI-assisted productivity through guided learning modules
              and practical exercises.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              AI & Cloud Virtual Internship — IBM SkillsBuild & Edunet Foundation (AICTE)
            </h4>
            <span>June 2024 — July 2024 (4 weeks)</span>
            <p className="timeline-text">
              Completed a 4-week virtual internship focused on emerging technologies like
              Artificial Intelligence and Cloud Computing using IBM SkillsBuild and IBM Cloud.
              Worked on guided modules, case studies and hands-on tasks related to AI concepts
              and cloud adoption.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Fresher — Academic & personal projects
            </h4>
            <span>Ongoing</span>
            <p className="timeline-text">
              Apart from the internship, I do not have formal industry work experience yet.
              I have focused on academic and self-driven projects such as an MBTI-based
              personality tester web app and a skincare recommendation system using machine
              learning, React js and Flask, while actively practicing coding and learning new topics.
            </p>
          </li>

        </ol>
      </section>

      {/* CERTIFICATIONS */}
      <section className="timeline">

        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="ribbon-outline"></ion-icon>
          </div>
          <h3 className="h3">Certifications</h3>
        </div>

        <ol className="timeline-list">

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Python for Data Science — NPTEL (IIT Madras)
            </h4>
            <span>Jan — Feb 2024</span>
            <p className="timeline-text">
              Completed a 4-week NPTEL course on Python for Data Science with a consolidated
              score of 63%, covering Python, NumPy, data handling, and basic analytics.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Internship on Emerging Technologies (AI & Cloud) — IBM SkillsBuild & AICTE
            </h4>
            <span>June — July 2024</span>
            <p className="timeline-text">
              4-week internship leveraging IBM SkillsBuild and IBM Cloud platform, covering
              fundamentals of AI, cloud and emerging technologies.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Getting Started with Artificial Intelligence — IBM SkillsBuild
            </h4>
            <span>2025</span>
            <p className="timeline-text">
              Introduction to AI concepts, use cases and ethical considerations through
              IBM SkillsBuild modules.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Journey to Cloud: Envisioning Your Solution — IBM SkillsBuild
            </h4>
            <span>2025</span>
            <p className="timeline-text">
              Learned cloud adoption strategies, solution envisioning and basic cloud
              architecture concepts.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Lab: Retrieval Augmented Generation with LangChain — IBM SkillsBuild
            </h4>
            <span>2025</span>
            <p className="timeline-text">
              Hands-on lab introducing Retrieval Augmented Generation (RAG) concepts using
              LangChain for building AI applications.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Employability / Personality Development — Rubicon
            </h4>
            <span>Jan 2023</span>
            <p className="timeline-text">
              Completed a short program on employability and life skills, improving
              communication, workplace behaviour and personal effectiveness.
            </p>
          </li>

        </ol>
      </section>

      {/* SKILLS */}
      <section className="skill">

        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">

          {[
            ["HTML & CSS", "80%"],
            ["Java", "70%"],
            ["React js", "70%"],
            ["C / C++", "75%"],
            ["Python & Flask", "70%"],
            ["SQL & DBMS", "75%"],
            ["Git & GitHub", "65%"],
            ["Problem solving & DSA", "60%"],
            ["Cloud & ML basics", "80%"],
          ].map(([skill, percent]) => (
            <li className="skills-item" key={skill}>
              <div className="title-wrapper">
                <h5 className="h5">{skill}</h5>
                <data value={percent}>{percent}</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: percent }}
                ></div>
              </div>
            </li>
          ))}

        </ul>
      </section>

    </article>
  );
}
