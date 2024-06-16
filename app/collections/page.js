import Advertisement from "@/components/advertisement";
import Button from "@/components/button";
import CollectionInfo from "@/components/collectionInfo";
import Container from "@/components/container";
import FileContent from "@/components/fileContent";
import Navigation from "@/components/navigation";
import HeaderSecond from "@/components/newHeader";
import SliderPage from "@/components/slider";

function Collections() {
  return (
    <Container>
      {/* The Header Section  */}
      <HeaderSecond />

      {/* The background details  */}
      <FileContent />

      {/* slider of different different images  */}
      <SliderPage />

      {/* AdvertiseMent Details  */}
      <Advertisement />

      {/* Collection information of right section  */}
      <CollectionInfo />

      {/* Join Waitlist  */}
      <Button />

      {/* Navigation buttons */}
      <Navigation />
    </Container>
  );
}

export default Collections;
