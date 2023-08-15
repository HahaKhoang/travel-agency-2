import { getAllTours } from "../../services/apiTours";

function Tour() {
  return <div></div>;
}

export async function loader() {
  const tours = await getAllTours();
  return tours;
}

export default Tour;
