import Settings from "@/models/Settings";

export const getSettings = async () => {
  try {
    const settings = await Settings.find().lean();
    const cleanSettings = settings.map((record) => ({
      ...record,
      _id: record._id.toString(),
    }));

    return cleanSettings;
  } catch (error) {
    console.error("Error fetching settings:", error);
    return [];
  }
};
