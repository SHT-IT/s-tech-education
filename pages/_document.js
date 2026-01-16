import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* BASIC META */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          {/* SEO */}
          <meta
            name="description"
            content="S Tech Education offers industry-focused DevOps, AWS, Cloud, Linux, and CI/CD training with real-time projects and placement support."
          />
          <meta name="robots" content="index, follow" />

          {/* OPEN GRAPH */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="S Tech Education" />
          <meta property="og:title" content="S Tech Education | DevOps & Cloud Training Institute" />
          <meta
            property="og:description"
            content="Join S Tech Education to master DevOps, AWS Cloud, Docker, Kubernetes and automation with hands-on training and job assistance."
          />
          <meta property="og:image" content="/images/logo/logoo.png" />
          <meta property="og:url" content="https://www.stech-info.co.in" />

          {/* TWITTER CARD */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="S Tech Education | DevOps Training" />
          <meta
            name="twitter:description"
            content="Professional DevOps & Cloud training with real-world projects and expert mentors."
          />
          <meta name="twitter:image" content="/images/logo/logoo.png" />

          {/* FAVICON */}
          <link rel="icon" href="/favicon.png" type="image/png" />

          {/* GOOGLE FONTS */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* CANONICAL */}
          <link rel="canonical" href="https://www.stech-info.co.in" />
        </Head>

        <body className="antialiased font-inter">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
