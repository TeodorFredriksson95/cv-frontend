import { useEffect } from "react";
import { Helmet } from "react-helmet";
import StoryHeader from "../components/Story/StoryHeader/StoryHeader";
import StoryContent from "../components/Story/StoryContent/StoryContent";

const Story = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="content-page">
      <Helmet>
        <title>Story</title>
        <meta name="description" content="Embark on a journey with me from childhood dreams to becoming a passionate junior developer, where every line of code is a step towards creation." />
      </Helmet>
      <StoryHeader />
      <StoryContent />
    </div>
  );
};

export default Story;
