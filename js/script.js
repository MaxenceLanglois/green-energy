function preloader() {
    const imagesList = [
      "./img/img-1.jpg",
      "./img/img-2.jpg",
      "./img/img-3.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
      images[i] = new Image();
      images[i].src = imagesList[i];
    }
  
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
  };    
  window.addEventListener("load", preloader);
  
  const resource = {
    content1: {
      headingContent: "Solar Energy",
      bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
      imgUrl: "./img/img-1.jpg",
      imgAlt: "Solar panels"
    },
    content2: {
      headingContent: "Wind Energy",
      bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
      imgUrl: "./img/img-2.jpg",
      imgAlt: "Wind energy turbines"
    },
    content3: {
      headingContent: "Hydropower",
      bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
      imgUrl: "./img/img-3.jpg",
      imgAlt: "Hydro dam"
    }
  };
  
  const container = document.querySelector(".container");
  container.innerHTML = `
    <h1>${resource.content1.headingContent}</h1>
    <img src="${resource.content1.imgUrl}" alt="${resource.content1.imgAlt}">
    <p>${resource.content1.bodyText}</p>
  `;
  
  function handleSelection(e) {
    const buttons = document.querySelectorAll(".buttons button");
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].hasAttribute("id")) {
        buttons[i].removeAttribute("id");
      }
    }
    e.target.setAttribute("id", "active-button");
  
    const content = e.target.getAttribute("data-content");
    const selectedContent = resource[content];
    container.innerHTML = `
      <h1>${selectedContent.headingContent}</h1>
      <img src="${selectedContent.imgUrl}" alt="${selectedContent.imgAlt}">
      <p>${selectedContent.bodyText}</p>
    `;
  }
  
  const buttons = document.querySelectorAll(".buttons button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleSelection);
  }
  