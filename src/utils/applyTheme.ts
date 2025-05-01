(() => {
  const light_btn = document.getElementById("light-btn");
  const dark_btn = document.getElementById("dark-btn");
  const html = document.querySelector("html");
  const get_theme_value = localStorage.getItem("theme-value");
  if (light_btn && dark_btn) {
      
      light_btn.addEventListener("click", () => {
        (html as HTMLHtmlElement).dataset.theme = "light"
        localStorage.setItem("theme-value", `${(html as HTMLHtmlElement).dataset.theme}`);
    });
    dark_btn.addEventListener("click", () => {
        (html as HTMLHtmlElement).dataset.theme = "dark";
        localStorage.setItem("theme-value", `${(html as HTMLHtmlElement).dataset.theme}`);
    });
    

    document.addEventListener("DOMContentLoaded", () => {
      if (get_theme_value) {
        (html as HTMLHtmlElement).dataset.theme = get_theme_value;
      }
    });
  }
})();
