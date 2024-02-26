import PageLayout from "../../components/Page-Layout";
import HeadPanel from "../../components/head-panel";
import Navbar from "../../components/navbar";

function Main() {
  return (
    <PageLayout>
      <HeadPanel>
        <Navbar />
      </HeadPanel>
    </PageLayout>
  );
}

export default Main;
