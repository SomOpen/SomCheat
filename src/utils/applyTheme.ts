(() => {
  const light_btn = document.getElementById("light-btn") as HTMLButtonElement | null;
  const dark_btn = document.getElementById("dark-btn") as HTMLButtonElement | null;
  const html = document.documentElement as HTMLElement & { dataset: { theme: string } };

  const saved_theme: string | null = localStorage.getItem("theme-value");
  if (saved_theme) {
    html.dataset.theme = saved_theme;
  }

  if (light_btn && dark_btn) {
    light_btn.addEventListener("click", (): void => {
      html.dataset.theme = "light";
      localStorage.setItem("theme-value", "light");
    });

    dark_btn.addEventListener("click", (): void => {
      html.dataset.theme = "dark";
      localStorage.setItem("theme-value", "dark");
    });

    document.addEventListener("DOMContentLoaded", (): void => {
      if (!saved_theme) {
        localStorage.setItem("theme-value", html.dataset.theme);
      }
    });
  }
})();
