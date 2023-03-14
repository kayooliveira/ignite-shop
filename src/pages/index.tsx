import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next + Eslint Template by kayooliveira</title>
        <meta
          name="description"
          content="Next +  Eslint Template by kayooliveira"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          backgroundColor: "#1a1b1b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <h1
          style={{
            color: "cyan",
            fontFamily: "Arial",
            fontSize: "4rem",
          }}
        >
          Next + Typescript + ESLint
        </h1>
      </main>
    </>
  );
}
