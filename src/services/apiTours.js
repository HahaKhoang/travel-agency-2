import supabase from "./supabase";

export async function getAllTours() {
  let query = supabase.from("tours").select("*");

  // FILTER
  //   if (filter !== null) query = query.eq(filter.field, filter.value);
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
