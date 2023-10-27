document.addEventListener("DOMContentLoaded", function () {
  caragarApi();
  async function caragarApi() {
    try {
       await fetch("https://pokeapi.co/api/v2/pokemon/")
        .then( async ( res) => {
          return await res.json();
        })

        .then(async (data) => {
          //console.log(data);
          //data=JSON.parse(data);
          const lista = document.getElementById("lista");
          data.results.forEach(async (element) => {
            const il = document.createElement("ul");

            il.innerText = `Name= ${element.name}`;
             await fetch(element.url)
              .then((resImg) => {
                if (resImg.ok) {
                  return resImg.json();
                } else {
                  console.log("ayuda");
                }
              })
              .then((dataImg) => {
                const img = document.createElement("img");
                img.src = dataImg.sprites.front_default;
                lista.appendChild(img);
              });

            lista.appendChild(il);
            

            //imgPokemon(element.url, lista);

            //const br = document.createElement('br');
            //lista.appendChild(br);
          });
        });
    } catch {}
  }

  function imgPokemon(url, lista) {
    var res = fetch(url)
      .then((resImg) => {
        if (resImg.ok) {
          return resImg.json();
        } else {
          console.log("ayuda");
        }
      })
      .then((dataImg) => {
        const img = document.createElement("img");
        img.src = dataImg.sprites.front_default;
        lista.appendChild(img);
      });
  }
  //return caragarApi();
  async function cargarApi() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      const lista = document.getElementById("lista");

      for (const pokemon of data.results) {
        const li = document.createElement("li");
        li.innerText = `Name: ${pokemon.name}`;
        lista.appendChild(li);

        const resImg = await fetch(pokemon.url);
        const dataImg = await resImg.json();

        const img = document.createElement("img");
        img.src = dataImg.sprites.front_default;
        lista.appendChild(img);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
});
