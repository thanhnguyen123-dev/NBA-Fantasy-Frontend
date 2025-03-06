import NavBar from "./components/NavBar";
import HomeScreen from "./components/HomeScreen";
export default function Home() {
  return (
    <div className="flex flex-col h-screen gap-6 bg-color">
      <NavBar />
      <HomeScreen />
    </div>
  );
}
