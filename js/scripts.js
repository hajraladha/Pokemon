  //IIFE wrap
  let pokemonRepository = (function () {
  //Pokemon list
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
      if (
      typeof pokemon === "object" &&
      "name" in pokemon 
    ) { 
      pokemonList.push(pokemon);
      } else {
      console.log("pokemon is not correct");
      }  
    }
    function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button"); 
  button.innerText = pokemon.name;
  button.classList.add("button");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
  button.addEventListener('click', function (event){
  showDetails(pokemon);
});
  }

function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }
      function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
     });
    }

    function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
       return showModal(pokemon)
    });
  }

let modalContainer = document.querySelector('#modal-container');
  function showModal(pokemon) {
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;

    let contentElement = document.createElement('p');
    contentElement.innerText = "height: " + pokemon.height;

    let container = document.querySelector('#image-container');

// Create an <img> element
    let myImage = document.createElement('img');

// setting `src` property to set the actual element's `src` attribute
// this also works on <img> elements selected by querySelector() method, it is not specific for <img> elements created with createElement() methods
    myImage.src = 'https://i.kym-cdn.com/photos/images/original/001/152/404/fec.png';
   
  
    
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(myImage);
    modalContainer.appendChild(modal);

 

    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

//    if (dialogPromiseReject) {
//       dialogPromiseReject();
//       dialogPromiseReject = null;
//     }
//   }

//   function showDialog(title, text) {
//   showModal(title, text);

//   // We want to add a confirm and cancel button to the modal
//   let modal = modalContainer.querySelector('.modal');

//   let confirmButton = document.createElement('button');
//   confirmButton.classList.add('modal-confirm');
//   confirmButton.innerText = 'Confirm';

//   let cancelButton = document.createElement('button');
//   cancelButton.classList.add('modal-cancel');
//   cancelButton.innerText = 'Cancel';

//   modal.appendChild(confirmButton);
//   modal.appendChild(cancelButton);

//   // We want to focus the confirmButton so that the user can simply press Enter
//   confirmButton.focus();
//   return new Promise((resolve, reject) => {
//   cancelButton.addEventListener('click', hideModal);
//   confirmButton.addEventListener('click', () => {
//     dialogPromiseReject = null; // Reset this
//     hideModal();
//     resolve();
//   });
//   // This can be used to reject from other functions
//   dialogPromiseReject = reject;
// });
// }

// document.querySelector('#show-dialog').addEventListener('click', () => {
//   showDialog('Confirm action', 'Are you sure you want to do this?').then(function() {
//     alert('confirmed!');
//   }, () => {
//     alert('not confirmed');
//   });
// });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });
  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });
  

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

//IIFE wraps
  
pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
  });
});





  