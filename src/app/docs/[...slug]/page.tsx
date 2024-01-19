// Import necessary modules
import { NextPage } from "next";
import Head from "next/head";

// Defining title in layout
type Props = {
  params: {
    slug: string[];
  };
};

const generateMetaData = ({ params }: Props) => {
  return {
    title: `Docs of `,
  };
};

// Define the Docs component
const Docs: NextPage<Props> = ({ params }) => {
  const metaData = generateMetaData({ params });

  return (
    <>
      {/* Update the head of the page with the dynamically generated title */}
      <Head>
        <title>{metaData.title}</title>
      </Head>

      {/* Render the content of the page */}
      {params.slug.length === 2 && (
        <h1>
          Hey this is docs from {params.slug[0]} and concept {params.slug[1]}
        </h1>
      )}
      {params.slug.length === 1 && (
        <h1>Hey this is docs from {params.slug[0]}</h1>
      )}
      {params.slug.length === 0 && <h1>Hey this is docs</h1>}
    </>
  );
};

export default Docs;
