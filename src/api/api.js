export async function fetchImages(breed, number) {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random/${number}`
  );
  const data = await response.json();
  return data.message;
}
