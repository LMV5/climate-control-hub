import HistoryTable from "@/components/HistoryTable";
import { getHistory } from "@/utils/getHistory";
import { getSettings } from "@/utils/getSettings";
import connectDB from "@/config/database";

export default async function Page() {
  await connectDB();

  const history = await getHistory();
  const settingsArray = await getSettings();
  const settings = settingsArray[0];

  if (!history) {
    return <p>History is empty</p>;
  }

  return (
    <div>
      <h2>History</h2>
      <HistoryTable history={history} settings={settings} />
    </div>
  );
}
