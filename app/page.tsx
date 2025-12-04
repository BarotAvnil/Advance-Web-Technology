import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main>
      <section className="hero text-center py-5 bg-light">
        <div className="container">
          <h1 className="display-5 fw-bold">Welcome to Labs</h1>
          <p className="lead text-muted mb-4">
            Practical, minimal labs and examples to help you learn modern web
            development quickly.
          </p>

          <div className="d-flex justify-content-center gap-2">
            <Link href="/about" className="btn btn-outline-primary me-2">
              About
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Built for Learning</h5>
                <p className="card-text text-muted">Small focused examples you can read and modify.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Accessible</h5>
                <p className="card-text text-muted">Semantic markup and responsive layouts by default.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Extensible</h5>
                <p className="card-text text-muted">Easy to adapt for assignments, demos and projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 bg-white text-center">
        <div className="container text-muted small">© {new Date().getFullYear()} Labs — Built for students</div>
      </footer>
    </main>
  );
}
