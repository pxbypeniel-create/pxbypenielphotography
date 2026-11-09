const add = (tag, attrs) => {
  const el = document.createElement(tag);
  Object.assign(el, attrs);
  document.head.appendChild(el);
};

add("link", { rel: "manifest", href: "/manifest.webmanifest" });
add("link", { rel: "apple-touch-icon", href: "/icons/icon-192.png" });
add("meta", { name: "theme-color", content: "#0a0b0d" });
add("meta", { name: "mobile-web-app-capable", content: "yes" });

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js"));
}
