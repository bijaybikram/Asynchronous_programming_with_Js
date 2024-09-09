const loadJoke = async () => {
  try {
    const rajeshDaiFetch = await fetch(
      "https://66df3b29de4426916ee3faa5.mockapi.io/api/jokes/1"
    );
    const data = await rajeshDaiFetch.json();
    console.log(data?.joke);
  } catch (error) {}
};
loadJoke();
