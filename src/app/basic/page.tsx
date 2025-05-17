export default function BasicPage() {
  return (
    <div style={{
      backgroundColor: "white",
      color: "black",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      maxWidth: "800px",
      margin: "0 auto"
    }}>
      <h1 style={{
        fontSize: "32px",
        color: "blue",
        marginBottom: "20px"
      }}>
        Basic Test Page
      </h1>
      
      <p style={{
        fontSize: "16px",
        lineHeight: "1.5",
        marginBottom: "20px",
        color: "black"
      }}>
        This is a test page with no Tailwind dependencies to check if rendering works correctly.
        If you can see this text in black on a white background, basic styling is working.
      </p>

      <div style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px"
      }}>
        <button style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Blue Button
        </button>
        
        <button style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Red Button
        </button>
      </div>

      <div style={{
        padding: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "5px",
        color: "black"
      }}>
        <h2 style={{color: "black", fontSize: "24px", marginBottom: "10px"}}>Testing Card</h2>
        <p style={{color: "black"}}>
          This card has a light gray background to test if background colors are properly applied.
        </p>
      </div>
    </div>
  );
} 