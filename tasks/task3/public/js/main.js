async function connectServer(query) {
  if (!navigator.onLine) {
    return {
      message: "please connect to internet",
      ok: false
    }
  }
  try {
    const res = await fetch("http://localhost:5000/api/weather" + "?query=" + query);
    const data = await res.json();

    return data || null
  } catch (error) {
    if (!res.ok) return {
      message: "something went wrong when trying to connect server.",
      ok: false

    }
    return;
  }
}

const cardBody = document.getElementById("cardBody")
document.getElementById("searchForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  if (!navigator.onLine) {
    cardBody.innerHTML = `<p class="err-msg">please check your internet connection</p>`
    return
  };
  cardBody.innerHTML = '<span class="loader"></span>'
  const value = e.target.input.value.trim();
  if (!value) {
    cardBody.innerHTML = `<p class="err-msg">please enter search query</p>`
    return;
  };

  const data = await connectServer(value);

  if (!data.ok) {
    cardBody.innerHTML = `<p class="err-msg">${data.message}</p>`
    return;
  }

  cardBody.innerHTML = `
    <div class="info" id="infoBlock" aria-live="polite">
        <div class="row">
          <div class="label">Country</div>
          <div class="value" id="tempVal">${data.data.country}</div>
        </div>
        <div class="row">
          <div class="label">Temperature</div>
          <div class="value" id="tempVal">${data.data.temp}</div>
        </div>
        <div class="row">
          <div class="label">Latitude</div>
          <div class="value" id="latVal">${data.data.lat}</div>
        </div>
        <div class="row">
          <div class="label">Longitude</div>
          <div class="value" id="lonVal">${data.data.long}</div>
        </div>
      </div>
    `

  return;
});