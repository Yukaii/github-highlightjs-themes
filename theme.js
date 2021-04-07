const { getColors } = require('github-vscode-theme/src/primer')

const {
  GENERAL_TOKENS,
  META_TOKENS,
  TAG_ATTR_CONF_TOKENS,
  TEXT_MARKUP_TOKENS,
  CSS_TOKENS,
  TEMPLATE_TOKENS,
  DIFF_TOKENS
} = require('./tokens')

export function getTheme ({ style }) {
  const themes = (options) => options[theme];
  const color = getColors(theme);
  const scale = color.scale;

  const editorForeground = themes({ light: color.text.primary, dark: color.text.primary, dimmed: scale.gray[0] });
  
  return {
    colors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: themes({ light: scale.gray[5], dark: scale.gray[3], dimmed: scale.gray[3] }),
        },
      },
      {
        scope: [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.language",
          "entity",
        ],
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: [
          "entity.name",
          "meta.export.default",
          "meta.definition.variable"
        ],
        settings: {
          foreground: themes({ light: scale.orange[6], dark: scale.orange[2], dimmed: scale.orange[2] }),
        },
      },
      {
        scope: [
          "variable.parameter.function",
          "meta.jsx.children",
          "meta.block",
          "meta.tag.attributes",
          "entity.name.constant",
          "meta.object.member",
          "meta.embedded.expression"
        ],
        settings: {
          foreground: editorForeground,
        },
      },
      {
        "scope": "entity.name.function",
        "settings": {
          foreground: themes({ light: scale.purple[5], dark: scale.purple[2], dimmed: scale.purple[2] }),
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "support.class.component"
        ],
        settings: {
          foreground: themes({ light: scale.green[6], dark: scale.green[1], dimmed: scale.green[1] }),
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: themes({ light: scale.red[5], dark: scale.red[3], dimmed: scale.red[3] }),
        },
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          foreground: themes({ light: scale.red[5], dark: scale.red[3], dimmed: scale.red[3] }),
        },
      },
      {
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java",
        ],
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: [
          "string",
          "punctuation.definition.string",
          "string punctuation.section.embedded source",
        ],
        settings: {
          foreground: themes({ light: scale.blue[8], dark: scale.blue[1], dimmed: scale.blue[1] }),
        },
      },
      {
        scope: "support",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: themes({ light: scale.orange[6], dark: scale.orange[2], dimmed: scale.orange[2] }),
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: "invalid.broken",
        settings: {
          fontStyle: "italic",
          foreground: themes({ light: scale.red[7], dark: scale.red[2], dimmed: scale.red[2] }),
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: themes({ light: scale.red[7], dark: scale.red[2], dimmed: scale.red[2] }),
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: themes({ light: scale.red[7], dark: scale.red[2], dimmed: scale.red[2] }),
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: themes({ light: scale.red[7], dark: scale.red[2], dimmed: scale.red[2] }),
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: themes({ light: scale.red[5], dark: scale.red[3], dimmed: scale.red[3] }),
          foreground: themes({ light: scale.gray[0], dark: scale.gray[9], dimmed: scale.gray[9] }),
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: themes({ light: scale.red[7], dark: scale.red[2], dimmed: scale.red[2] }),
        },
      },
      {
        scope: "string source",
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: "string variable",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: themes({ light: scale.blue[8], dark: scale.blue[1], dimmed: scale.blue[1] }),
        },
      },
      {
        scope: [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition",
        ],
        settings: {
          foreground: themes({ light: scale.blue[8], dark: scale.blue[1], dimmed: scale.blue[1] }),
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: themes({ light: scale.green[6], dark: scale.green[1], dimmed: scale.green[1] }),
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: themes({ light: scale.orange[6], dark: scale.orange[2], dimmed: scale.orange[2] }),
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: themes({ light: scale.green[6], dark: scale.green[1], dimmed: scale.green[1] }),
        },
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground: editorForeground,
        },
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: editorForeground,
        },
      },
      {
        scope: "markup.raw",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: themes({ light: scale.red[0], dark: scale.red[9], dimmed: scale.red[9] }),
          foreground: themes({ light: scale.red[7], dark: scale.red[2], dimmed: scale.red[2] }),
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: themes({ light: scale.green[0], dark: scale.green[9], dimmed: scale.green[9] }),
          foreground: themes({ light: scale.green[6], dark: scale.green[1], dimmed: scale.green[1] }),
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: themes({ light: scale.orange[1], dark: scale.orange[8], dimmed: scale.orange[8] }),
          foreground: themes({ light: scale.orange[6], dark: scale.orange[2], dimmed: scale.orange[2] }),
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: themes({ light: scale.gray[1], dark: scale.gray[8], dimmed: scale.gray[8] }),
          background: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: themes({ light: scale.purple[5], dark: scale.purple[2], dimmed: scale.purple[2] }),
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote",
        ],
        settings: {
          foreground: themes({ light: scale.gray[6], dark: scale.gray[3], dimmed: scale.gray[3] }),
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: themes({ light: scale.red[7], dark: scale.red[2], dimmed: scale.red[2] }),
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: themes({ light: scale.blue[8], dark: scale.blue[1], dimmed: scale.blue[1] }),
          fontStyle: "underline",
        },
      },
    ]
  }
}

