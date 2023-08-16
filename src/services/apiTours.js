import supabase from "./supabase";

export async function getAllTours() {
  let query = supabase.from("tours").select("*");

  const { data, error } = await query;
  if (error) {
    console.error(error);
    throw new Error("Could not fetch tours data");
  }

  return data;
}

export async function getTour({ tourName }) {
  const { data: tour, error } = await supabase
    .from("tours")
    .select("*, tourss(*)")
    .eq("name", tourName)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return tour;
}

export async function getAllInspiration() {
  let query = supabase.from("inspiration").select("*");

  const { data, error } = await query;
  if (error) {
    console.error(error);
    throw new Error("Could not fetch inspiration data");
  }

  return data;
}
