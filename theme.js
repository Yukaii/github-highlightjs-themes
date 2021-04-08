const { getColors } = require('github-vscode-theme/src/colors')

const {
  GENERAL_TOKENS,
  META_TOKENS,
  TAG_ATTR_CONF_TOKENS,
  TEXT_MARKUP_TOKENS,
  CSS_TOKENS,
  TEMPLATE_TOKENS,
  DIFF_TOKENS
} = require('./tokens')

export function generateHighlightJsStyle (theme) {
  const styles = theme.colors.filter(entry => {
    return Array.isArray(entry.scope) ? entry.scope.length > 0 : entry.scope && entry.scope.length > 0
  }).map(entry => {
    const klasses = Array.isArray(entry.scope) ? entry.scope.map(k => `.hljs-${k}`).join(',\n') : entry.scope
    
    const rawStyles = []
    
    if (entry.settings.foreground) {
      rawStyles.push(`color: ${entry.settings.foreground};`)
    }
    
    if (entry.settings.fontStyle) {
      if (entry.settings.fontStyle === 'bold') {
        rawStyles.push(`font-weight: ${entry.settings.fontStyle};`)
      } else {
        rawStyles.push(`font-style: ${entry.settings.fontStyle};`)
      }
    }
    
    if (entry.settings.background) {
      rawStyles.push(`background-color: ${entry.settings.background};`)
    }

    return `${klasses} {
  ${rawStyles.join('\n  ')}
}\n`
  }).join('\n')

  return(`
.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;

  color: ${theme.foregroundColor};
  background: ${theme.backgroundColor};
}

${styles}
`)
}

export function getTheme ({ theme }) {
  const themes = (options) => options[theme];
  const color = getColors(theme);
  const scale = color.scale;

  const editorForeground = themes({ light: color.text.primary, dark: color.text.primary, dimmed: scale.gray[0] });

  return {
    backgroundColor: color.bg.canvas,
    foregroundColor: editorForeground,
    colors: [
      {
        scope: [
        /*
          "comment", "punctuation.definition.comment", "string.comment"
        */
          GENERAL_TOKENS.COMMENT,
          GENERAL_TOKENS.PUNCTUATION
        ],
        settings: {
          foreground: themes({ light: scale.gray[5], dark: scale.gray[3], dimmed: scale.gray[3] }),
        },
      },
      {
        scope: [
          /*
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.language",
          "entity",
          */
          TAG_ATTR_CONF_TOKENS.ATTR,
          TAG_ATTR_CONF_TOKENS.ATTRIBUTE,
          META_TOKENS.META,
         CSS_TOKENS.SELECTOR_ATTR,
          CSS_TOKENS.SELECTOR_CLASS,
          CSS_TOKENS.SELECTOR_ID,
        ],
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: [
        /*
          "entity.name",
          "meta.export.default",
          "meta.definition.variable",
        */
          GENERAL_TOKENS.VARIABLE,
          GENERAL_TOKENS.LITERAL,
          GENERAL_TOKENS.NUMBER,
          GENERAL_TOKENS.DOCTAG 
        ],
        settings: {
          foreground: themes({ light: scale.orange[6], dark: scale.orange[2], dimmed: scale.orange[2] }),
        },
      },
      {
        scope: [
        /*
          "variable.parameter.function",
          "meta.jsx.children",
          "meta.block",
          "meta.tag.attributes",
          "entity.name.constant",
          "meta.object.member",
          "meta.embedded.expression",
        */
          GENERAL_TOKENS.PARAMS
        ],
        settings: {
          foreground: editorForeground,
        },
      },
      {
        "scope": [
        /*
          "entity.name.function"
        */
          GENERAL_TOKENS.FUNCTION
        ],
        "settings": {
          foreground: themes({ light: scale.purple[5], dark: scale.purple[2], dimmed: scale.purple[2] }),
        }
      },
      {
        "scope": [
        /*
          "entity.name.tag",
          "support.class.component"
        */
          GENERAL_TOKENS.CLASS,
          TAG_ATTR_CONF_TOKENS.TAG,
          GENERAL_TOKENS.TITLE,
          GENERAL_TOKENS.BUILT_IN
        ],
        settings: {
          foreground: themes({ light: scale.green[6], dark: scale.green[1], dimmed: scale.green[1] }),
        },
      },
      {
        scope: [
        /*
          "keyword"
        */
          GENERAL_TOKENS.KEYWORD,
          GENERAL_TOKENS.TYPE,
          TAG_ATTR_CONF_TOKENS.BUILTIN_NAME,
          META_TOKENS.META_KEYWORD,
          TEMPLATE_TOKENS.TEMPLATE_TAG,
          TEMPLATE_TOKENS.TEMPLATE_VARIABLE
        ],
        settings: {
          foreground: themes({ light: scale.red[5], dark: scale.red[3], dimmed: scale.red[3] }),
        },
      },
      {
        scope: [
        /*
          "storage", "storage.type"
        */
        ],
        settings: {
          foreground: themes({ light: scale.red[5], dark: scale.red[3], dimmed: scale.red[3] }),
        },
      },
      /*
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
      */
      {
        scope: [
        /*
          "string",
          "punctuation.definition.string",
          "string punctuation.section.embedded source",
        */
          GENERAL_TOKENS.STRING,
          META_TOKENS.STRING
        ],
        settings: {
          foreground: themes({ light: scale.blue[8], dark: scale.blue[1], dimmed: scale.blue[1] }),
        },
      },
      /*
      {
        scope: "support",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      */
      {
        scope: [
          /*
          "meta.property-name"
          */
        ],
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: [
        /*
          "variable"
        */
        ],
        settings: {
          foreground: themes({ light: scale.orange[6], dark: scale.orange[2], dimmed: scale.orange[2] }),
        },
      },
      /*
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
      */
      {
        scope: [
        /*
          "source.regexp", "string.regexp"
          */
          GENERAL_TOKENS.REGEXP
        ],
        settings: {
          foreground: themes({ light: scale.blue[8], dark: scale.blue[1], dimmed: scale.blue[1] }),
        },
      },
      /*
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
      */
      {
        scope: [
          /*
          "support.constant"
          */
          GENERAL_TOKENS.SYMBOL
        ],
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      /*
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
      */
      {
        scope: [
          /*
          "punctuation.definition.list.begin.markdown"
          */
          TEXT_MARKUP_TOKENS.BULLET
        ],
        settings: {
          foreground: themes({ light: scale.orange[6], dark: scale.orange[2], dimmed: scale.orange[2] }),
        },
      },
      {
        scope: [
          /*
          "markup.heading", "markup.heading entity.name"
          */
          TAG_ATTR_CONF_TOKENS.SECTION
        ],
        settings: {
          fontStyle: "bold",
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      {
        scope: [
          /*
          "markup.quote"
          */
          TEXT_MARKUP_TOKENS.QUOTE,
          TAG_ATTR_CONF_TOKENS.NAME,
          CSS_TOKENS.SELECTOR_TAG,
          CSS_TOKENS.SELECTOR_PSEUDO
        ],
        settings: {
          foreground: themes({ light: scale.green[6], dark: scale.green[1], dimmed: scale.green[1] }),
        },
      },
      {
        scope: [
          /*
          "markup.italic"
          */
          TEXT_MARKUP_TOKENS.EMPHASIS
        ],
        settings: {
          fontStyle: "italic",
          foreground: themes({ light: scale.orange[6], dark: scale.orange[2], dimmed: scale.orange[2] }),
        },
      },
      {
        scope: [
          /*
          "markup.bold"
          */
          TEXT_MARKUP_TOKENS.STRONG
        ],
        settings: {
          fontStyle: "bold",
          foreground: themes({ light: scale.orange[6], dark: scale.orange[2], dimmed: scale.orange[2] }),
        },
      },
      /*
      {
        scope: "markup.raw",
        settings: {
          foreground: themes({ light: scale.blue[6], dark: scale.blue[2], dimmed: scale.blue[2] }),
        },
      },
      */
      {
        scope: [
          /*
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
          */
          DIFF_TOKENS.DELETION
        ],
        settings: {
          background: themes({ light: scale.red[0], dark: scale.red[9], dimmed: scale.red[9] }),
          foreground: themes({ light: scale.red[7], dark: scale.red[2], dimmed: scale.red[2] }),
        },
      },
      {
        scope: [
          /*
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
          */
          DIFF_TOKENS.ADDITION
        ],
        settings: {
          background: themes({ light: scale.green[0], dark: scale.green[9], dimmed: scale.green[9] }),
          foreground: themes({ light: scale.green[6], dark: scale.green[1], dimmed: scale.green[1] }),
        },
      },
      /*
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
      */
      {
        scope: [
        /*
          "constant.other.reference.link", "string.other.link"
          */
          TEXT_MARKUP_TOKENS.LINK
        ],
        settings: {
          foreground: themes({ light: scale.blue[8], dark: scale.blue[1], dimmed: scale.blue[1] }),
          fontStyle: "underline",
        },
      },
    ]
  }
}

