function SectionTitle({ title }: { title: string }) {
  return (
    <h1 className="font-bold md:text-5xl text-2xl text-center  text-text-primary ">
      {title}
    </h1>
  );
}

export default SectionTitle;
