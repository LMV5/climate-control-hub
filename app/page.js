import ButtonLogin from "@/components/ButtonLogin";

export default function Page() {
  // console.log(process.env.MONGODB_URI);
  return (
    <main>
      <h1>Hello! it's Climate Control Hub!</h1>
      <ButtonLogin />
    </main>
  );
}
