const fs = require("fs").promises;

const {
  getTheme,
  generateHighlightJsStyle
} = require("./theme");

const lightDefaultTheme = getTheme({
  theme: "light",
});

const darkDefaultTheme = getTheme({
  theme: "dark",
});

const darkDimmedTheme = getTheme({
  theme: "dimmed",
})

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/github-light-default.css", generateHighlightJsStyle(lightDefaultTheme)),
    fs.writeFile("./themes/github-dark-default.css", generateHighlightJsStyle(darkDefaultTheme)),
    fs.writeFile("./themes/github-dark-dimmed.css", generateHighlightJsStyle(darkDimmedTheme)),
  ]))
  .catch(() => process.exit(1))
