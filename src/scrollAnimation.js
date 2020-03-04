const animatedScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('animatedscroll');
      } else {
        entry.target.classList.remove('animatedscroll');
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
