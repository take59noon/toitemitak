window.MyKatexConfig = {
  delimiters: [
    {left: '$$', right: '$$', display: true},
    {left: '$', right: '$', display: false},
    {left: '\\(', right: '\\)', display: false},
    {left: '\\[', right: '\\]', display: true}
  ],
  macros: {
    '\\myoverline': '{\\overline{#1\\,}}',
    '\\myquad': '\\:\\:',
    '\\neqq': '=\\negthickspace\\negthickspace\\!\\!\\text{\\textbackslash}\\;',
    '\\heikou': '\\;\\!\\text{/}\\!\\!\\!\\;\\text{/}\\;\\!',
    '\\nheikou': '\\;\\!\\text{/}\\!\\!\\!\\;\\text{/}\\!\\!\\!\\!\\!\\:\\text{\\textbackslash}\\,',
    '\\ab@common': '\\mathopen{}\\mathclose{\\left#1 #2 \\right#3}',
    '\\pab': '\\ab@common\\lparen{#1}\\rparen',  // (#1)
    '\\bab': '\\ab@common\\lbrack{#1}\\rbrack',  // [#1]
    '\\Bab': '\\ab@common\\lbrace{#1}\\rbrace',  // {#1}
    '\\aab': '\\ab@common\\langle{#1}\\rangle',  // <#1>
    '\\vab': '\\ab@common\\lvert{#1}\\rvert',    // |#1|
    '\\Vab': '\\ab@common\\lVert{#1}\\rVert',    // ||#1||
  },
};
