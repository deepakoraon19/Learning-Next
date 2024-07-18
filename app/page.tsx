import Feed from "@components/Feed";

function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text">
        Discover and share
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI-Powered</span>
      </h1>
      <Feed></Feed>
    </section>
  );
}

export default Home;
