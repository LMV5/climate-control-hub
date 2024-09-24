import HistoryTable from "@/components/HistoryTable";
import { getHistory } from "@/utils/getHistory";
import connectDB from "@/config/database";

export default async function Page() {
  await connectDB();

  const history = await getHistory();

  if (!history) {
    return <div>History is empty</div>;
  }

  return (
    <div>
      <h2>History</h2>
      <HistoryTable history={history} />
    </div>
  );
}
