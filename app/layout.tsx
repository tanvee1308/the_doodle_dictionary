import './globals.css';

export const metadata = {
  title: 'The Doodle Dictionary',
  description: 'Add your word — silly, sweet, or just so desi.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: '#fffaf3',
          color: '#4c2c2c',
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
