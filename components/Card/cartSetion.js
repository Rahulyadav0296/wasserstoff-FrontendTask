import Card from "./card";

function CardSection() {
  return (
    <>
      <div className="absolute w-448 h-225  top-full">
        <Card className="flex flex-row items-start gap-2 absolute w-164.08 h-56 left-96 top-60" />
        <Card className="flex flex-row items-start gap-3 absolute w-164.08 h-56 left-0 top-60" />
        <Card className="flex flex-row items-start gap-3 absolute w-164.08 h-56 left-48 top-60" />
      </div>
    </>
  );
}

export default CardSection;
