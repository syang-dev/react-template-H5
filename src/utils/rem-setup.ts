const setRem = () => {
  const baseSize = 16; // 默认 font-size
  const scale = innerWidth / 375; // 以设计稿宽度 375px 为基准
  console.log("resize", baseSize * Math.min(scale, 2));
  document.documentElement.style.fontSize = `${
    baseSize * Math.min(scale, 2)
  }px`; // 限制最大倍数
};

window.addEventListener("resize", setRem);
setRem();
