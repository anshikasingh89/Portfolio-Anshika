export default function Contact() {
  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      {/* MAP */}
      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            title="Indore Map"
            src="https://www.google.com/maps?q=Indore,Madhya+Pradesh,India&output=embed"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane-outline"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}
