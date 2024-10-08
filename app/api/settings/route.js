import connectDB from "@/config/database";
import Settings from "@/models/Settings";

export const PUT = async (request) => {
  try {
    await connectDB();

    const updatedData = await request.json();

    const settings = await Settings.findOneAndUpdate(
      {},
      {
        language: updatedData.language,
        temperatureUnit: updatedData.temperatureUnit,
        temperatureRange: updatedData.temperatureRange,
        humidityRange: updatedData.humidityRange,
      },
      { new: true, upsert: true }
    );

    return new Response(JSON.stringify(settings), { status: 200 });
  } catch (error) {
    console.error("Error updating settings:", error);
    return new Response("Something went wrong", { status: 500 });
  }
};

// export const GET = async (request) => {
//   try {
//     await connectDB();

//     const settings = await Settings.find().lean();

//     if (!settings) {
//       return new Response("Settings not found", { status: 404 });
//     }

//     const cleanSettings = settings.map((record) => ({
//       ...record,
//       _id: record._id.toString(),
//     }));

//     return new Response(JSON.stringify(cleanSettings), { status: 200 });
//   } catch (error) {
//     console.error("Error fetching settings:", error);
//     return new Response("Something went wrong", { status: 500 });
//   }
// };
