import Advertisement from "@/components/advertisement";
import Container from "@/components/container";
import EventPage from "@/components/eventPage";
import FileContent from "@/components/fileContent";
import Navigation from "@/components/navigation";
import HeaderSecond from "@/components/newHeader";
import SliderPage from "@/components/slider";

function FrontPage() {
  return (
    <Container>
      {/* Header Section   */}
      <HeaderSecond />

      {/* background Details  */}
      <FileContent />

      {/* slider of images  */}
      <SliderPage />

      {/* Navigation Button  */}
      <Navigation />

      {/* Advertisement Details  */}
      <Advertisement />

      {/* Displaying EventPage component */}
      <EventPage />
    </Container>
  );
}

export default FrontPage;
