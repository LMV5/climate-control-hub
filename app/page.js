import ButtonLogin from "@/components/ButtonLogin";
import Loading from "./loading";
import FloorPlan from "@/components/FloorPlan";
import FloorPlanDetails from "@/components/FloorPlanDetails";

export default function Page() {
  return (
    <main>
      <h1>Hello! it's Climate Control Hub!</h1>
      <ButtonLogin />
      <FloorPlan />
      <FloorPlanDetails name="Bedroom" />
      <FloorPlanDetails name="Bathroom" />
      <FloorPlanDetails name="Living room" />
      <FloorPlanDetails name="Hallway" />
    </main>
  );
}
