export default function About() {
  return (
    <article className="about active" data-page="about">

  <header>
    <h2 className="h2 article-title">About Me</h2>
  </header>

  <section className="about-text">
<p>
    I am <strong>Anshika Singh</strong> with a strong interest
    in Data Analytics, Business Intelligence, Cloud Computing, and
    Artificial Intelligence. I enjoy transforming raw data into meaningful
    insights that help solve real-world problems and support better decision-making.
  </p>

    <p>
       I work with technologies including Python, SQL, Power BI, Microsoft Excel,
    Flask, HTML, CSS, Java, C, C++, and DBMS. Through academic projects and
    internships, I have developed skills in data analysis, data visualization,
    dashboard creation, and machine learning. My projects include an intelligent
    skincare recommendation system using machine learning and an MBTI-based
    personality assessment web application.
    </p>

    <p>
      I am a fast learner, self-motivated, punctual, and detail-oriented. I enjoy
    analyzing complex problems, identifying patterns in data, and presenting
    insights in a clear and meaningful way. I am comfortable working both
    independently and collaboratively, and I value continuous learning and
    effective communication.
    </p>

    <p>
         My goal is to begin my career as a <strong>Data Analyst</strong>, where I can
    apply analytical thinking, SQL, Python, Excel, and visualization tools to
    solve business problems, support data-driven decisions, and continue growing
    my skills in analytics and cloud technologies.

    </p>
    <p>Outside academics, I enjoy writing, reading, sketching characters,
    playing volleyball, and badminton. These activities help me stay creative,
    disciplined, and maintain a balanced approach to learning and teamwork.</p>

  </section>
  {/* WHAT I'M DOING */}
      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>

        <ul className="service-list">

          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Data Analytics</h4>
              <p className="service-item-text">
                Analyzing datasets using SQL, Python, Excel and Power BI to uncover insights, identify trends and support data-driven decision making.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-app.svg" alt="Backend icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Python for Data Analytics </h4>
              <p className="service-item-text">
               Using Python with Pandas, NumPy and Matplotlib to clean data, perform analysis, automate tasks and build analytical solutions.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-design.svg" alt="database icon" width="40" />
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
              <img src="./assets/images/icon-photo.svg" alt="cloud icon" width="40" />
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
                <img src="./assets/images/avatar-3.png" alt="Problem solving" width="60" />
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
                <img src="./assets/images/avatar-2.png" alt="Consistency" width="60" />
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
                <img src="./assets/images/avatar-3.png" alt="Self learner" width="60" />
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
                <img src="./assets/images/avatar-2.png" alt="Teamwork" width="60" />
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
          <li className="clients-item"><img src="./assets/images/ibm.jpg" alt="IBM" /></li>
          <li className="clients-item"><img src="./assets/images/microsoft.png" alt="Microsoft" /></li>
          <li className="clients-item"><img src="./assets/images/nptel.png" alt="NPTEL" /></li>
          <li className="clients-item"><img src="./assets/images/python.webp" alt="Python" /></li>
          <li className="clients-item"><img src="./assets/images/cloud.jpg" alt="Cloud" /></li>
          <li className="clients-item"><img src="./assets/images/react.png" alt="React" /></li>
        </ul>
      </section>
</article>

  );
}
