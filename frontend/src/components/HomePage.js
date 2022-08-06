import HomeNavBar from "./HomeNavBar";
import LandingPage from "./LandingPage";
import Instruction from "./Instruction";

const HomePage = () => {
  return (
    <div>
      <HomeNavBar currentPage="Home" />
      <div class="grid gap-48 py-36 px-28">
        <LandingPage />
        <Instruction direction="right" title="Step 1. This is a title" description="Consequatur quidem deserunt qui fugit cumque ut esse est dignissimos. Itaque quia et veritatis. Qui voluptatem dolor quia exercitationem sed similique. Incidunt quae suscipit nihil deleniti. Possimus praesentium sunt aut tempora ut alias."/>
        <Instruction direction="left" title="Step 2. This is a title" description="Consequatur quidem deserunt qui fugit cumque ut esse est dignissimos. Itaque quia et veritatis. Qui voluptatem dolor quia exercitationem sed similique. Incidunt quae suscipit nihil deleniti. Possimus praesentium sunt aut tempora ut alias."/>
        <Instruction direction="right" title="Step 3. This is a title" description="Consequatur quidem deserunt qui fugit cumque ut esse est dignissimos. Itaque quia et veritatis. Qui voluptatem dolor quia exercitationem sed similique. Incidunt quae suscipit nihil deleniti. Possimus praesentium sunt aut tempora ut alias."/>
      </div>
    </div>
  );
};
export default HomePage;
