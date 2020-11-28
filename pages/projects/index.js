import Head from "next/head";
import Layout from "../../components/Layout";
import ProjectsList from "../../components/ProjectsList/ProjectsList";

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>Projects | Yan Waipann</title>
      </Head>
      <ProjectsList />
    </Layout>
  );
};

export default Projects;
