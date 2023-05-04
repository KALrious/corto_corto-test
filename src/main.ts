const images = document.querySelectorAll(".image");

console.log(images);

// Parcourir toutes les images et ajouter un événement "mouseover"
images.forEach((image) => {
  image.addEventListener("mouseover", () => {
    // Récupérer l'élément parent de l'image
    const parent = image.parentNode as Element;
    console.log("parent", parent);

    // Ajouter la classe "hover" à l'élément parent
    parent?.classList?.add("hover");
  });

  // Ajouter un événement "mouseout"
  image.addEventListener("mouseout", () => {
    // Récupérer l'élément parent de l'image
    const parent = image.parentNode as Element;

    // Supprimer la classe "hover" de l'élément parent
    parent?.classList.remove("hover");
  });
});
