import ButtonLogin from "@/components/ButtonLogin";
import Loading from "./loading";
import FloorPlan from "@/components/FloorPlan";

export default function Page() {
  return (
    <main>
      <h1>Hello! it's Climate Control Hub!</h1>
      <ButtonLogin />
      <FloorPlan />
    </main>
  );
}
