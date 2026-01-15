import { useState } from "react";


const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <aside className={`sidebar ${open ? "active" : ""}`}>

      {/* BASIC INFO */}
      <div className="sidebar-info">

        <figure className="avatar-box">
          <img
         src="./assets/images/profile.png"
         alt="Anshika Singh"
         width="80"
        />

        </figure>

        <div className="info-content">
          <h1 className="name">Anshika Singh</h1>
          <p className="title">MCA Student</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setOpen(!open)}
        >
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>

      </div>

      {/* EXTRA INFO */}
      <div className="sidebar-info_more">

        <div className="separator"></div>

        <ul className="contacts-list">

  {/* Email */}
  <li className="contact-item">
    <div className="icon-box">
      <ion-icon name="mail-outline"></ion-icon>
    </div>

    <div className="contact-info">
      <p className="contact-title">Email</p>
      <a
        href="mailto:anshika.singh2137@gmail.com"
        className="contact-link"
      >
        anshika.singh2137@gmail.com
      </a>
    </div>
  </li>

  {/* Phone */}
  <li className="contact-item">
    <div className="icon-box">
      <ion-icon name="call-outline"></ion-icon>
    </div>

    <div className="contact-info">
      <p className="contact-title">Phone</p>
      <a
        href="tel:+918962189002"
        className="contact-link"
      >
        +918962189002
      </a>
    </div>
  </li>

  {/* Birthday */}
  <li className="contact-item">
    <div className="icon-box">
      <ion-icon name="calendar-outline"></ion-icon>
    </div>

    <div className="contact-info">
      <p className="contact-title">Birthday</p>
      <time dateTime="2003-08-29">August 29, 2003</time>
    </div>
  </li>

  {/* Location */}
  <li className="contact-item">
    <div className="icon-box">
      <ion-icon name="location-outline"></ion-icon>
    </div>

    <div className="contact-info">
      <p className="contact-title">Location</p>
      <address>Indore, Madhya Pradesh, India</address>
    </div>
  </li>

</ul>

        <div className="separator"></div>

        <ul className="social-list">

          <li className="social-item">
            <a
              href="https://github.com/anshikasingh89"
              target="_blank"
              className="social-link"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="social-link"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

        </ul>

      </div>
    </aside>
  );
};

export default Sidebar;
