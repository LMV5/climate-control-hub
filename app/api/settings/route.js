import connectDB from "@/config/database";
import Settings from "@/models/Settings";
import Room from "@/models/Room";

export const GET = async (request) => {
  try {
    await connectDB();

    const settings = await Settings.find().lean();

    if (!settings || settings.length === 0) {
      return new Response("Settings not found", { status: 404 });
    }

    const cleanSettings = settings.map((record) => ({
      ...record,
      _id: record._id.toString(),
    }));

    const response = new Response(JSON.stringify(cleanSettings), {
      status: 200,
    });

    response.headers.set("Cache-Control", "no-store");

    return response;
  } catch (error) {
    console.error("Error fetching settings:", error);
    return new Response("Something went wrong", { status: 500 });
  }
};

export const PUT = async (request) => {
  try {
    await connectDB();
    const updatedData = await request.json();

    // find and update settings

    const settings = await Settings.findOneAndUpdate(
      {},
      {
        temperatureRange: updatedData.temperatureRange,
        humidityRange: updatedData.humidityRange,
      },
      { new: true, upsert: true }
    );

    // save changes in Room collection

    await Room.updateMany(
      {},
      {
        $set: {
          temperatureRange: {
            min: settings.temperatureRange.min,
            max: settings.temperatureRange.max,
          },
          humidityRange: {
            min: settings.humidityRange.min,
            max: settings.humidityRange.max,
          },
        },
      }
    );

    const response = new Response(JSON.stringify(settings), {
      status: 200,
    });

    // response.headers.set("Cache-Control", "no-store");

    return response;
  } catch (error) {
    console.error("Error updating settings:", error);
    return new Response("Something went wrong", { status: 500 });
  }
};
