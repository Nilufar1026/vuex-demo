export async function fetchCharacters(){
  const req = await fetch('https://swapi.dev/api/people/')
  const data = await req.json()
  const characters = data.results
  return characters
}

export async function fetchPlanets(){
  const req = await fetch('https://swapi.dev/api/planets/')
  const data = await req.json()
  const planets = data.results
  return planets
}

export async function fetchVehicles(){
  const req = await fetch('https://swapi.dev/api/vehicles/')
  const data = await req.json()
  const vehicles = data.results
  return vehicles
}