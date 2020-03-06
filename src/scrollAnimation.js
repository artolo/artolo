const animatedScroll = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('animatedscroll');
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  },
);
export default {
  bind(animation) {
    animation.classList.add('before-animatedscroll');
    animatedScroll.observe(animation);
  },
};
