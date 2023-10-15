export const cherryConfig = {
  id: "cherry-markdown",
  value: "# Hello World",
  locale: "en_US",
  toolbars: {
    theme: 'dark', // light or dark
    showToolbar: true, // False: the top toolbar is not displayed; True: display toolbar; toolbars. Showtoolbar = false and toolbars Toolbar = false equivalent
    toolbar: [
      'bold',
      'italic',
      'strikethrough',
      '|',
      'color',
      'header',
      '|',
      'list',
      'quote',
      'table',
      // 'line-table',
      // 'bar-table',
      // 'quicktable',
      {
        insert: [
          'image',
          'audio',
          'video',
          'link',
          'hr',
          'br',
          'code',
          'formula',
          'toc',
          'pdf',
          'word',
          'panel',

        ],
      },
      'graph',
      'settings',
    ],
    sidebar: ['theme'],
    bubble: ['bold', 'italic', 'underline', 'strikethrough', 'sub', 'sup', 'quote', '|', 'size', 'color'], // array or false
    float: ['h1', 'h2', 'h3', '|', 'checklist', 'quote', 'quickTable', 'code'], // array or false
  },
}