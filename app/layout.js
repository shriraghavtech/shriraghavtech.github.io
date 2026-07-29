// app/layout.js
import "../styles/globals.css";

export const metadata = {
  title: "Shriraghav Tech - Laptop Repair Delhi",
  description: "Expert hardware & software support in Delhi NCR.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Schema SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Shriraghav Tech",
              address: "Palam, Delhi",
              telephone: "+918512832150",
            }),
          }}
        />
      </body>
    </html>
  );
}