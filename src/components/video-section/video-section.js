(function() {
  const playBtn = document.querySelector(".video-section__btn");
  const closeBtn = document.querySelector(".video-section__cross");
  const videoSection = document.querySelector(".video-section__wrap");

  playBtn.addEventListener("click", openVideo);
  closeBtn.addEventListener("click", closeVideoByBtn);
  document.body.addEventListener("click", closeVideoByShade);

  function openVideo(el) {
    el.preventDefault();
    videoSection.classList.add("video-section__wrap_is-visible");
    return;
  }

  function closeVideoByShade(el) {
    target = el.target;
    if (target.classList.contains("video-section__wrap")) {
      videoSection.classList.remove("video-section__wrap_is-visible");
      videoSection.querySelector("iframe").src = videoSection.querySelector(
        "iframe"
      ).src;
      return;
    }
    return;
  }

  function closeVideoByBtn(el) {
    el.preventDefault();
    videoSection.classList.remove("video-section__wrap_is-visible");
    videoSection.querySelector("iframe").src = videoSection.querySelector(
      "iframe"
    ).src;
    return;
  }
  return;
})();
