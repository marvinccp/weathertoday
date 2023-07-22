
const getApiInfo = async (city) => {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ad069584070cd9957f9d50d6782167b7`;
  const data = await (await fetch(url)).json()
  console.log(data);
  return data;
 
}

export { getApiInfo };
