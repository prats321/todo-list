import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0 rounded-3">
        <div className="card-body p-5">
          <h2 className="card-title text-center mb-4 fw-bold text-primary">
            About This App
          </h2>
          <p className="card-text fs-5 text-muted">
            Welcome to the <strong>Todo List App</strong> — your simple and 
            effective tool to stay productive and organized. With a clean design 
            and easy-to-use features, managing tasks has never been easier.
          </p>
          <ul className="list-group list-group-flush my-4">
            <li className="list-group-item">
              ✅ Add new tasks instantly
            </li>
            <li className="list-group-item">
              ❌ Delete tasks when completed
            </li>
            <li className="list-group-item">
              📌 Stay on top of your daily goals
            </li>
          </ul>
          <p className="mt-4 fs-6 text-center text-secondary">
            Built with <span className="fw-semibold">React & Bootstrap</span> to
            practice modern web development concepts like{" "}
            <em>components, props, state, and hooks</em>.
          </p>
          <div className="text-center mt-3">
            <a
              href="https://github.com/prats321"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-4"
            >
              View Source on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
