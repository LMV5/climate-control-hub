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
    <>
      <h2 className="text-paleRed mb-6 text-center text-2xl uppercase tracking-widest">
        History
      </h2>
      <HistoryTable history={history} settings={settings} />
    </>
  );
}
