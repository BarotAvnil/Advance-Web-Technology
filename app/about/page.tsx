import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <section className="hero text-center py-5 bg-light">
        <div className="container">
          <h1 className="display-5">About Us</h1>
          <p className="lead text-muted">
            We create clear, minimal labs and examples to help you learn modern web development.
          </p>

          <p>
            <Link href="/" className="btn btn-outline-primary me-2">
              Home
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Contact
            </Link>
          </p>
        </div>
      </section>

      <section className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Simple</h5>
                <p className="card-text">Small focused examples that are easy to understand and extend.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Accessible</h5>
                <p className="card-text">Semantic HTML and responsive design for all devices.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Practical</h5>
                <p className="card-text">Hands-on labs that you can adapt for coursework and projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
