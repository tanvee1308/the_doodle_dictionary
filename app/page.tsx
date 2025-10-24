export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#fffaf3',
        color: '#4c2c2c',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
        ✏️ The Doodle Dictionary
      </h1>
      <p style={{ maxWidth: '600px', lineHeight: '1.6' }}>
        Add a word you love — silly, sweet, or just so desi. <br />
        Every word teaches someone something new. <br />
        Aiyo! Arrey! Oye! Whatever your word is, doodle it and drop it on the wall. <br />
        One word from you, one word learned by someone else. <br />
        <strong>No galis 💛 just good vibes!</strong>
      </p>
    </main>
  );
}
