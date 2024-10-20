import "./globals.css";

export const metadata = {
  title: "Chat File - AI-powered file Chat Service - AIStarter.dev",
  description: "Chat File is an AI-powered file chat service that allows you to chat with your files.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
