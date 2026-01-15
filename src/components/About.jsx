export default function About() {
  return (
    <article className="about active" data-page="about">

  <header>
    <h2 className="h2 article-title">About Me</h2>
  </header>

  <section className="about-text">

    <p>
      I am <strong>Anshika Singh</strong>, an MCA student at
      Devi Ahilya Vishwavidyalaya (DAVV), Indore, with a strong interest
      in software development, cloud computing, and AI/ML.
      I enjoy building practical, user-focused projects that connect
      theoretical concepts with real-world use cases.
    </p>

    <p>
      I work with technologies such as Python, Flask, HTML, CSS, Java,
      C, C++, SQL, and DBMS. My projects include an MBTI-based personality
      tester web application and an intelligent skincare recommendation
      system using machine learning. I like breaking down problems into
      smaller parts and designing clean, understandable solutions.
    </p>

    <p>
      My strengths include being a fast learner, punctual, self-motivated,
      and consistent. I value honest and clear communication and am
      comfortable working both independently and in a team. My goal is
      to start my career as a software engineer where I can work on
      backend, cloud, or ML-related projects and continuously improve
      my skills.
    </p>

    <p>
      Outside academics, I enjoy writing, reading, and sketching
      characters, which helps me stay creative and observant. I also
      like playing volleyball and badminton, which keeps me active and
      team-oriented.
    </p>

  </section>
  {/* WHAT I'M DOING */}
      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>

        <ul className="service-list">

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-dev.svg" alt="Web development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>
              <p className="service-item-text">
                Building small, responsive web apps using HTML, CSS and Flask,
                focusing on clarity, usability and simple design.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-app.svg" alt="Backend icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Python & Flask</h4>
              <p className="service-item-text">
                Developing backend logic, APIs and form handling in Python Flask for
                projects like MBTI tester and skincare recommendation system.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-design.svg" alt="database icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Databases & SQL</h4>
              <p className="service-item-text">
                Designing simple schemas and writing SQL queries for academic projects
                and practice problems in DBMS.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-photo.svg" alt="cloud icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Cloud & deployment</h4>
              <p className="service-item-text">
                Deploying projects on platforms like Render and exploring basic cloud
                concepts through IBM SkillsBuild programs.
              </p>
            </div>
          </li>

        </ul>
      </section>

      {/* STRENGTHS */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Strengths & work style</h3>

        <ul className="testimonials-list has-scrollbar">

          <li className="testimonials-item">
            <div className="content-card">
              <figure className="testimonials-avatar-box">
                <img src="/assets/images/avatar-3.png" alt="Problem solving" width="60" />
              </figure>
              <h4 className="h4 testimonials-item-title">Problem solving</h4>
              <div className="testimonials-text">
                <p>
                  I like understanding the root of a problem and breaking it into smaller,
                  logical steps. This helps in debugging code and designing structured
                  flows for web apps and ML pipelines.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card">
              <figure className="testimonials-avatar-box">
                <img src="/assets/images/avatar-2.png" alt="Consistency" width="60" />
              </figure>
              <h4 className="h4 testimonials-item-title">Consistency & discipline</h4>
              <div className="testimonials-text">
                <p>
                  I am punctual and disciplined with my work and studies. I prefer
                  steady, consistent effort instead of last-minute rush.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card">
              <figure className="testimonials-avatar-box">
                <img src="/assets/images/avatar-3.png" alt="Self learner" width="60" />
              </figure>
              <h4 className="h4 testimonials-item-title">Self-motivated learner</h4>
              <div className="testimonials-text">
                <p>
                  I actively learn through online courses, coding platforms and real
                  projects – especially in Python, data science, AI and cloud.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card">
              <figure className="testimonials-avatar-box">
                <img src="/assets/images/avatar-2.png" alt="Teamwork" width="60" />
              </figure>
              <h4 className="h4 testimonials-item-title">Teamwork</h4>
              <div className="testimonials-text">
                <p>
                  I communicate clearly with teammates, listen to other ideas and
                  contribute actively, which helps in completing projects smoothly.
                </p>
              </div>
            </div>
          </li>

        </ul>
      </section>

      {/* TOOLS */}
      <section className="clients">
        <h3 className="h3 clients-title">Tools & technologies</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item"><img src="/assets/images/ibm.jpg" alt="IBM" /></li>
          <li className="clients-item"><img src="/assets/images/microsoft.png" alt="Microsoft" /></li>
          <li className="clients-item"><img src="/assets/images/nptel.png" alt="NPTEL" /></li>
          <li className="clients-item"><img src="/assets/images/python.webp" alt="Python" /></li>
          <li className="clients-item"><img src="/assets/images/cloud.jpg" alt="Cloud" /></li>
          <li className="clients-item"><img src="/assets/images/react.png" alt="React" /></li>
        </ul>
      </section>
</article>

  );
}
