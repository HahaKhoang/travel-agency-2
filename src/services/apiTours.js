import supabase from "./supabase";

export async function getAllTours() {
  const { data, error } = await supabase.from("tours").select("*");

  if (error) {
    console.error(error);
    throw new Error("Could not fetch tours data");
  }

  return data;
}
