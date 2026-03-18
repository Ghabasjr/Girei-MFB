"use client";

const posts = [
  {
    id: 1,
    title: "Why people are opening account in GMBF",
    tag: "Savings & Current Account",
    image: "/Rectangle 3203.png",
  },
  {
    id: 2,
    title: "Why people are opening account in GMBF",
    tag: "Savings & Current Account",
    image: "/Rectangle 3204.png",
  },
  {
    id: 3,
    title: "Why people are opening account in GMBF",
    tag: "Savings & Current Account",
    image: "/Rectangle 3205.png",
  },
];

export default function BlogSection() {
  return (
    <section
      style={{
        padding: "5rem 0",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: 600,
            color: "#111",
            marginBottom: "3rem",
          }}
        >
          Fresh Updates From Our Company
        </h2>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
        >
          {posts.map((post) => (
            <div key={post.id}>
              {/* Image */}
              <div
                style={{
                  width: "100%",
                  height: 180,
                  borderRadius: 16,
                  overflow: "hidden",
                  marginBottom: "0.75rem",
                }}
              >
                <img
                  src={post.image}
                  alt="blog"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Tag */}
              <div
                style={{
                  fontSize: "12px",
                  color: "#16a34a",
                  marginBottom: "0.4rem",
                }}
              >
                {post.tag}
              </div>

              {/* Title */}
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#111",
                  lineHeight: 1.4,
                  marginBottom: "1rem",
                }}
              >
                {post.title}
              </div>

              {/* Read more */}
              <div
                style={{
                  fontSize: "13px",
                  color: "#111",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  cursor: "pointer",
                }}
              >
                Read More
                <span style={{ fontSize: "16px" }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
