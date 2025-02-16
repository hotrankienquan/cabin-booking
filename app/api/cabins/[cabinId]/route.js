import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinId } =await params;
    console.log(cabinId);
    
  try {
    const [cabin, bookedDate] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    console.log({cabin, bookedDate});
    
    return Response.json({
      cabin,
      bookedDate,
    });
  } catch {
    return Response.json({
      message: "not found",
    });
  }
}
