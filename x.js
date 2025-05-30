fetch("https://raw.githubusercontent.com/slxca/slxca/refs/heads/main/x.txt?t=eeewda")
  .then((res) => res.text())
  .then((text) => console.log(`%c${text}`, "font-family: monospace; font-size: 12px; color: cyan;"))
  .catch(() => {});
