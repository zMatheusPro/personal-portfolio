export function Projects() {
  return (
    <div
      className="projects__content grid filters__active"
      data-content
      id="projects"
    >
      <article className="projects__card">
        <img src="assets/img/project1.jpg" alt="" className="projects__img" />

        <div className="projects__modal">
          <div>
            <span className="projects__subtitle">Web</span>
            <h3 className="projects__title">Payment Site</h3>
            <a href="#" className="projects__button button button__small">
              <i className="ri-link" />
            </a>
          </div>
        </div>
      </article>

      <article className="projects__card">
        <img src="assets/img/project2.jpg" alt="" className="projects__img" />

        <div className="projects__modal">
          <div>
            <span className="projects__subtitle">Web</span>
            <h3 className="projects__title">Portfolio website</h3>
            <a href="#" className="projects__button button button__small">
              <i className="ri-link" />
            </a>
          </div>
        </div>
      </article>

      <article className="projects__card">
        <img src="assets/img/project3.jpg" alt="" className="projects__img" />

        <div className="projects__modal">
          <div>
            <span className="projects__subtitle">Movil</span>
            <h3 className="projects__title">Fast food app</h3>
            <a href="#" className="projects__button button button__small">
              <i className="ri-link" />
            </a>
          </div>
        </div>
      </article>

      <article className="projects__card">
        <img src="assets/img/project4.jpg" alt="" className="projects__img" />

        <div className="projects__modal">
          <div>
            <span className="projects__subtitle">Movil</span>
            <h3 className="projects__title">Travel app</h3>
            <a href="#" className="projects__button button button__small">
              <i className="ri-link" />
            </a>
          </div>
        </div>
      </article>

      <article className="projects__card">
        <img src="assets/img/project5.jpg" alt="" className="projects__img" />

        <div className="projects__modal">
          <div>
            <span className="projects__subtitle">Design</span>
            <h3 className="projects__title">Music app design</h3>
            <a href="#" className="projects__button button button__small">
              <i className="ri-link" />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
