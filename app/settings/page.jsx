import Settings from "@/components/Settings";
import connectDB from "@/config/database";
import { getSettings } from "@/utils/getSettings";

export default async function Page() {
  await connectDB();
  const settings = await getSettings();

  if (!settings) {
    return <p>Settings not found</p>;
  }

  return (
    <>
      <Settings settingsData={settings} />
    </>
  );
}
