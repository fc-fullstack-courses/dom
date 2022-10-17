function handleImageErrorV1 (e) {
  e.target.src = `assets/images/unknownUser.webp`;
}

function handleImageErrorV2 (e) {
  e.target.remove();
}