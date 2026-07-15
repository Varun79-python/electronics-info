export default function ThemeScript() {
  const code = `
    (function() {
      try {
        var theme = localStorage.getItem('electronics-hub-storage');
        if (theme) {
          var parsed = JSON.parse(theme);
          var t = parsed && parsed.state && parsed.state.theme;
          if (t) document.documentElement.setAttribute('data-theme', t);
        }
      } catch(e) {}
    })();
  `
  return <script dangerouslySetInnerHTML={{ __html: code }} />
}
