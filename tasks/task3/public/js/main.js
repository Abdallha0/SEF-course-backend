async function connectServer(query) {
  try {
    const res = await fetch("http://localhost:5000/api/weather" + "?query=" + query);
    const data = await res.json();
    return data
  } catch (error) {
    console.log(error)
    return;
  }
}

const cardBody = document.getElementById("cardBody")
document.getElementById("searchForm").addEventListener("submit", async function (e) {
  cardBody.innerHTML = '<span class="loader"></span>'
  e.preventDefault()
  const value = e.target.input.value.trim();
  if (!value) return;
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