export default function SimplePage() {
  return (
    <div style={{
      backgroundColor: "white",
      color: "#1a202c",
      fontFamily: "sans-serif",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      <nav style={{
        backgroundColor: "white", 
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #e2e8f0"
      }}>
        <div style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: "#3b82f6"
        }}>
          MCP Supervisor
        </div>
        <div style={{
          display: "flex",
          gap: "1.5rem",
          alignItems: "center"
        }}>
          <a href="/" style={{color: "#4b5563", textDecoration: "none"}}>
            Home
          </a>
          <a href="/#features" style={{color: "#4b5563", textDecoration: "none"}}>
            Features
          </a>
          <a href="/#how-it-works" style={{color: "#4b5563", textDecoration: "none"}}>
            How It Works
          </a>
          <button style={{
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "0.375rem",
            border: "none",
            cursor: "pointer"
          }}>
            Get Started
          </button>
        </div>
      </nav>

      <main style={{flex: 1}}>
        <section style={{
          padding: "4rem 2rem",
          textAlign: "center",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <h1 style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#111827"
          }}>
            Orchestrate Your <span style={{color: "#3b82f6"}}>Startup Journey</span> With AI
          </h1>
          <p style={{
            fontSize: "1.25rem",
            color: "#4b5563",
            maxWidth: "800px",
            margin: "0 auto 2rem"
          }}>
            Our MCP Supervisor coordinates specialized AI agents to build your startup from concept to launch - all in one platform.
          </p>
          <div style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center"
          }}>
            <button style={{
              backgroundColor: "#3b82f6",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.375rem",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              Get Started
              <span>→</span>
            </button>
            <button style={{
              backgroundColor: "transparent",
              color: "#4b5563",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.375rem",
              border: "1px solid #e2e8f0",
              cursor: "pointer",
              fontWeight: "500"
            }}>
              Learn More
            </button>
          </div>
        </section>

        <section style={{
          backgroundColor: "#f9fafb",
          padding: "4rem 2rem"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            <h2 style={{
              fontSize: "2.25rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "3rem",
              color: "#111827"
            }}>
              Powerful Features
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem"
            }}>
              {[
                {
                  title: "Web App Development",
                  description: "Specialized MCP creates custom web applications to showcase your startup's unique value proposition."
                },
                {
                  title: "Social Media Management",
                  description: "Dedicated MCP creates and manages social media accounts across platforms for maximum exposure."
                },
                {
                  title: "Content Creation",
                  description: "Content MCP generates engaging and SEO-optimized content to attract and convert customers."
                }
              ].map((feature, index) => (
                <div key={index} style={{
                  backgroundColor: "white",
                  borderRadius: "0.75rem",
                  padding: "1.5rem",
                  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                  border: "1px solid #e2e8f0"
                }}>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    marginBottom: "0.75rem",
                    color: "#111827"
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    color: "#4b5563"
                  }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer style={{
        backgroundColor: "white",
        borderTop: "1px solid #e2e8f0",
        padding: "2rem"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2rem"
        }}>
          <div>
            <div style={{
              fontWeight: "bold",
              fontSize: "1.25rem",
              marginBottom: "1rem",
              color: "#3b82f6"
            }}>
              MCP Supervisor
            </div>
            <p style={{
              color: "#4b5563",
              maxWidth: "20rem"
            }}>
              Empower your startup journey with our AI-powered MCP orchestration platform.
            </p>
          </div>
          <div>
            <div style={{
              fontWeight: "600",
              marginBottom: "1rem",
              color: "#111827"
            }}>
              Links
            </div>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem"
            }}>
              <a href="/#features" style={{color: "#4b5563", textDecoration: "none"}}>
                Features
              </a>
              <a href="/#how-it-works" style={{color: "#4b5563", textDecoration: "none"}}>
                How It Works
              </a>
              <a href="/dashboard" style={{color: "#4b5563", textDecoration: "none"}}>
                Dashboard
              </a>
            </div>
          </div>
        </div>
        <div style={{
          textAlign: "center",
          marginTop: "2rem",
          color: "#4b5563",
          fontSize: "0.875rem"
        }}>
          © {new Date().getFullYear()} MCP Supervisor. All rights reserved.
        </div>
      </footer>
    </div>
  );
} 