"use client";
import { useState } from 'react';

export default function SimplePage() {
  const [showPopup, setShowPopup] = useState(false);

  const openWaitlistForm = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

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
          0to1
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
          <button 
            onClick={openWaitlistForm}
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "0.375rem",
              border: "none",
              cursor: "pointer"
            }}
          >
            Get on Waitlist
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
          <div style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center"
          }}>
            <button 
              onClick={openWaitlistForm}
              style={{
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
              }}
            >
              Get on Waitlist
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
                  description: "Specialized AI creates custom web applications to showcase your startup's unique value proposition."
                },
                {
                  title: "Social Media Management",
                  description: "Dedicated AI creates and manages social media accounts across platforms for maximum exposure."
                },
                {
                  title: "Content Creation",
                  description: "Content AI generates engaging and SEO-optimized content to attract and convert customers."
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
              0to1
            </div>
            <p style={{
              color: "#4b5563",
              maxWidth: "20rem"
            }}>
              Empower your startup journey with our AI-powered orchestration platform.
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
          © {new Date().getFullYear()} 0to1. All rights reserved.
        </div>
      </footer>

      {showPopup && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: "white",
            borderRadius: "0.5rem",
            padding: "1rem",
            position: "relative",
            maxWidth: "700px",
            width: "100%",
            maxHeight: "90vh",
            overflow: "auto"
          }}>
            <button 
              onClick={closePopup}
              style={{
                position: "absolute",
                top: "0.5rem",
                right: "0.5rem",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "#4b5563"
              }}
            >
              ×
            </button>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSchNg5TMV7-Ovo2VMUSkatn8bEN9iVS4VSlv9DxnVtb_VVa1g/viewform?embedded=true" 
              width="640" 
              height="551" 
              frameBorder="0" 
              title="Waitlist Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
} 