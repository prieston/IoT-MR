export const DescriptiveDataListener = (
  containerRef,
  sliderHelperRef,
  fheight
) => e => {
  sliderHelperRef.current.style.height = "100%";

  const sliderOnClick = e => {
    containerRef.current.classList.add("transition");
    if (
      (containerRef.current.offsetHeight / window.innerHeight).toFixed(2) ==
      0.33
    ) {
      containerRef.current.style.height = "0%";
    } else {
      containerRef.current.style.height = "33%";
    }
    window.removeEventListener("mousemove", resize);
    window.removeEventListener("touchmove", resize);

    window.removeEventListener("mouseup", mouseup);
    window.removeEventListener("touchend", mouseup);
    setTimeout(() => {
      containerRef.current.classList.remove("transition");
      sliderHelperRef.current.style.height = "48px";
    }, 500);
  };
  fheight.current = {
    height: null,
    movementY: null,
    previousTouchY: null,
    previousHeight: containerRef.current.offsetHeight
  };
  const resize = e => {
    fheight.current.moved = true;
    if (typeof e.movementY === "undefined") {
      fheight.current.movementY =
        e.touches[0].pageY -
        (fheight.current.previousTouchY || e.touches[0].pageY);
      fheight.current.previousTouchY = e.touches[0].pageY;
    } else {
      fheight.current.movementY = e.movementY;
    }
    fheight.current.height =
      containerRef.current.offsetHeight - fheight.current.movementY;
    containerRef.current.style.height = `${fheight.current.height}px`;
  };

  window.addEventListener("mousemove", resize);
  window.addEventListener("touchmove", resize);
  const mouseup = () => {
    if (!fheight.current.moved) {
      return sliderOnClick();
    }
    containerRef.current.classList.add("transition");
    const diff =
      fheight.current.previousHeight - containerRef.current.offsetHeight;
    const currentHeight = (
      containerRef.current.offsetHeight / window.innerHeight
    ).toFixed(2);

    if (Number(currentHeight) <= 0.33) {
      if (diff >= 0) {
        fheight.current.height = "0%";
      } else {
        fheight.current.height = "33%";
      }
    } else {
      if (diff >= 0) {
        fheight.current.height = "33%";
      } else {
        fheight.current.height = "100%";
      }
    }
    containerRef.current.style.height = `${fheight.current.height}`;

    setTimeout(() => {
      containerRef.current.classList.remove("transition");
      sliderHelperRef.current.style.height = "48px";
    }, 500);

    window.removeEventListener("mousemove", resize);
    window.removeEventListener("touchmove", resize);

    window.removeEventListener("mouseup", mouseup);
    window.removeEventListener("touchend", mouseup);
  };
  window.addEventListener("mouseup", mouseup);
  window.addEventListener("touchend", mouseup);
};
