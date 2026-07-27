export default function Certifications() {
  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Certifications</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">

          {/* CERTIFICATION 1 */}
          <li className="blog-post-item">
            <a
              href="/assets/images/IBM_ANSHIKA_page-0001.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <figure className="blog-banner-box">
                <img
                  src="/assets/images/IBM_ANSHIKA_page-0001.jpg"
                  alt="IBM SkillsBuild AI & Cloud"
                  loading="lazy"
                />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">AI & Cloud</p>
                  <span className="dot"></span>
                  <time>Completed</time>
                </div>

                <h3 className="h3 blog-item-title">
                  IBM SkillsBuild — AI & Cloud (Edunet Foundation)
                </h3>

                <p className="blog-text">
                  4-week internship and certification program focused on
                  Artificial Intelligence and Cloud Computing using IBM
                  SkillsBuild.
                </p>
              </div>
            </a>
          </li>

          {/* CERTIFICATION 2 */}
          <li className="blog-post-item">
            <a
              href="/assets/images/pythoncer.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <figure className="blog-banner-box">
                <img
                  src="/assets/images/pythoncer.jpg"
                  alt="NPTEL Python for Data Science"
                  loading="lazy"
                />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Data Science</p>
                  <span className="dot"></span>
                  <time>Completed</time>
                </div>

                <h3 className="h3 blog-item-title">
                  Python for Data Science — NPTEL
                </h3>

                <p className="blog-text">
                  Certification covering Python fundamentals, NumPy,
                  data handling, and basic data analysis.
                </p>
              </div>
            </a>
          </li>

          {/* CERTIFICATION 3 */}
          <li className="blog-post-item">
            <a
              href="/assets/images/Personality_development_page-0001.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <figure className="blog-banner-box">
                <img
                  src="/assets/images/Personality_development_page-0001.jpg"
                  alt="Personality Development"
                  loading="lazy"
                />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Soft Skills</p>
                  <span className="dot"></span>
                  <time>Completed</time>
                </div>

                <h3 className="h3 blog-item-title">
                  Personality Development — Rubicon
                </h3>

                <p className="blog-text">
                  Training focused on communication skills, confidence
                  building, and professional workplace readiness.
                </p>
              </div>
            </a>
          </li>

          {/* FUTURE CERTIFICATION */}
          <li className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img
                  src="/assets/images/microsoft.png"
                  alt="Microsoft Azure"
                  loading="lazy"
                />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Upcoming</p>
                  <span className="dot"></span>
                  <time>Planned</time>
                </div>

                <h3 className="h3 blog-item-title">
                  Microsoft Elevate — Azure
                </h3>

                <p className="blog-text">
                  Upcoming certification focused on Microsoft Azure
                  cloud fundamentals.
                </p>
              </div>
            </a>
          </li>

          {/* FUTURE CERTIFICATION */}
          <li className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img
                  src="/assets/images/microsoft.png"
                  alt="Microsoft Power BI"
                  loading="lazy"
                />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Upcoming</p>
                  <span className="dot"></span>
                  <time>Planned</time>
                </div>

                <h3 className="h3 blog-item-title">
                  Microsoft Elevate — Power BI
                </h3>

                <p className="blog-text">
                  Planned certification focused on data visualization
                  and business intelligence using Power BI.
                </p>
              </div>
            </a>
          </li>

        </ul>
      </section>
    </article>
  );
}
