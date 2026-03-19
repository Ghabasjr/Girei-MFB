"use client";

export default function BlogSection() {
  const posts = [
    { id: 1, title: "Why people are opening account in GMBF", tag: "Savings & Current Account", image: "/Rectangle 3203.png" },
    { id: 2, title: "Why people are opening account in GMBF", tag: "Savings & Current Account", image: "/Rectangle 3204.png" },
    { id: 3, title: "Why people are opening account in GMBF", tag: "Savings & Current Account", image: "/Rectangle 3205.png" },
  ];

  return (
    <section style={{ padding: "5rem 1.5rem", background: "#f5f5f5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(1.3rem, 3vw, 1.75rem)", fontWeight: 600, color: "#111", marginBottom: "3rem" }}>
          Fresh Updates From Our Company
        </h2>

        <div className="blog-grid">
          {posts.map((post) => (
            <div key={post.id}>
              <div style={{ width: "100%", height: 180, borderRadius: 16, overflow: "hidden", marginBottom: "0.75rem" }}>
                <img src={post.image} alt="blog" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ fontSize: "12px", color: "#16a34a", marginBottom: "0.4rem" }}>{post.tag}</div>
              <div style={{ fontSize: "16px", fontWeight: 600, color: "#111", lineHeight: 1.4, marginBottom: "1rem" }}>{post.title}</div>
              <div style={{ fontSize: "13px", color: "#111", display: "flex", alignItems: "center", gap: "0.3rem", cursor: "pointer" }}>
                Read More <span style={{ fontSize: "16px" }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 500px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
