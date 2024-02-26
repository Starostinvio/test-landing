import PageLayout from "../../components/Page-Layout";
import HeadPanel from "../../components/head-panel";
import Navbar from "../../components/navbar";
import TextContent from "../../components/text-content";

function Main() {
  return (
    <PageLayout>
      <HeadPanel>
        <Navbar />
      </HeadPanel>
      <TextContent />
    </PageLayout>
  );
}

export default Main;
