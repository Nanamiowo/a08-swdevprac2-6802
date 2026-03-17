import getVenue from "@/libs/getVenue"

export default async function Page({
  params
}:{params:{vid:string}}){

  const venueJson = await getVenue(params.vid)
  const venue = venueJson.data

  return(

    <main>

      <img src={`https://venue-api.vercel.app${venue.picture}`} alt={venue.name}/>

      <h1>{venue.name}</h1>

      <p>{venue.address}</p>
      <p>{venue.province}</p>
      <p>{venue.postalcode}</p>

      <p>{venue.tel}</p>

      <p>{venue.dailyrate}</p>

    </main>

  )
}