addAnimation();

function addAnimation() {
  const scrollers = document.querySelectorAll(".scroller");
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
      setTimeout(() => {
        item.style.opacity = "1";
        duplicatedItem.style.opacity = "1";
      }, 10);
    });
  });

  const animated_buttons = document.querySelectorAll(".in-anim");
  setTimeout(() => {
    animated_buttons.forEach((item) => {
      item.style.opacity = "1";
      item.style.transform = "translate(0)";
    });
  }, 10);
}