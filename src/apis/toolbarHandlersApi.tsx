import Cherry from "cherry-markdown";

const ToolbarHandlersApi = (props: { cherry: React.MutableRefObject<Cherry | null> }) => {

  const toolbarHandlersBold = () => props.cherry.current?.toolbar.toolbarHandlers.bold();

  const toolbarHandlersItalic = () => props.cherry.current?.toolbar.toolbarHandlers.italic();

  const toolbarHandlersHead = (leave: number) => props.cherry.current?.toolbar.toolbarHandlers.header(leave);

  const toolbarHandlersStrikethrough = () => props.cherry.current?.toolbar.toolbarHandlers.strikethrough();

  const toolbarHandlersList = (type: 'ol' | 'ul' | 'checklist' | 1 | 2 | 3 | '1' | '2' | '3') => props.cherry.current?.toolbar.toolbarHandlers.list(type);

  const toolbarHandlersInsert = (type: string) => props.cherry.current?.toolbar.toolbarHandlers.insert(type);

  const toolbarHandlersGraph = (type: '1' | '2' | '3' | '4' | '5' | '6' | 1 | 2 | 3 | 4 | 5 | 6 | 'flow' | 'sequence' | 'state' | 'class' | 'pie' | 'gantt') =>
    props.cherry.current?.toolbar.toolbarHandlers.graph(type);

  const toolbarHandlersPreviewOnly = () => props.cherry.current?.toolbar.previewOnly();

  const toolbarHandlersShowToolbar = () => props.cherry.current?.toolbar.showToolbar();

  return (
    <>
      <h1>Cherry.toolbar.toolbarHandlers API</h1>
      <div className='apis__item'>
        <h2>toolbar.toolbarHandlers.bold()</h2>
        <div className='introduce__title'>
          <div className='title--ch'>向cherry编辑器中插入加粗语法。</div>
          <div className='title--en' >Insert bold syntax into Cherry editor.</div>
        </div>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <a onClick={toolbarHandlersBold}>try it</a>
          </div>
        </div>
      </div>

      <div className='apis__item'>
        <h2>toolbar.toolbarHandlers.italic()</h2>
        <div className='introduce__title'>
          <div className='title--ch'>向cherry编辑器中插入斜体语法。</div>
          <div className='title--en' >Insert italic syntax into Cherry editor.</div>
        </div>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <a onClick={toolbarHandlersItalic}>try it</a>
          </div>
        </div>
      </div>

      <div className='apis__item'>
        <h2>toolbar.toolbarHandlers.header(level:1|2|3|4|5|'1'|'2'|'3'|'4'|'5')</h2>
        <div className='introduce__title'>
          <div className='title--ch'>向cherry编辑器中插入标题语法。</div>
          <div className='title--en' >Insert title syntax into Cherry editor.</div>
        </div>
        <div className='content--ch'>level:<span className='type-style'>1~5|'1'~'5'</span> h1-h5标题。</div>
        <div className='content--en'>level:<span className='type-style'>1~5|'1'~'5'</span> Title of h1-h5.</div>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <a onClick={() => toolbarHandlersHead(1)}>head h1</a>
            <a onClick={() => toolbarHandlersHead(2)}>head h2</a>
            <a onClick={() => toolbarHandlersHead(3)}>head h3</a>
            <a onClick={() => toolbarHandlersHead(4)}>head h4</a>
            <a onClick={() => toolbarHandlersHead(5)}>head h5</a>
          </div>
        </div>
      </div>

      <div className='apis__item'>
        <h2>toolbar.toolbarHandlers.strikethrough()</h2>
        <div className='introduce__title'>
          <div className='title--ch'>向cherry编辑器中插入删除线语法。</div>
          <div className='title--en' >Insert strikethrough syntax into Cherry editor.</div>
        </div>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <a onClick={toolbarHandlersStrikethrough}>try it</a>
          </div>
        </div>
      </div>

      <div className='apis__item'>
        <h2>toolbar.toolbarHandlers.list</h2>
        <h2>(type:'ol'|'ul'|'checklist'|1|2|3|'1'|'2'|'3')</h2>
        <div className='introduce__title'>
          <div className='title--ch'>向cherry编辑器中插入有序、无序列表或者checklist语法。</div>
          <div className='title--en' >Insert ordered lists, unordered lists, or checklist syntax into the Cherry editor.</div>
        </div>
        <table className="cherry-api-table">
          <thead>
            <tr>
              <th>level</th>
              <th>效果</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='type-style'>1|'1'|'ol'</td>
              <td>ol 列表</td>
            </tr>
            <tr >
              <td className='type-style'>2|'2'|'ul'</td>
              <td>ul 列表</td>
            </tr>
            <tr>
              <td className='type-style'>3|'3'|'checklist'</td>
              <td>checklist 可选列表</td>
            </tr>
          </tbody>
        </table>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <a onClick={() => toolbarHandlersList(1)}>(1)ordered lists</a>
            <a onClick={() => toolbarHandlersList(2)}>(2)unordered lists</a>
            <a onClick={() => toolbarHandlersList(3)}>(3)checklist</a>
          </div>
          <div className='content__operate__item'>
            <a onClick={() => toolbarHandlersList('1')}>('1')ordered lists</a>
            <a onClick={() => toolbarHandlersList('2')}>('2')unordered lists</a>
            <a onClick={() => toolbarHandlersList('3')}>('3')checklist</a>
          </div>
          <div className='content__operate__item'>
            <a onClick={() => toolbarHandlersList('ol')}>('ol')ordered lists</a>
            <a onClick={() => toolbarHandlersList('ul')}>('ul')unordered lists</a>
            <a onClick={() => toolbarHandlersList('checklist')}>('checklist')checklist</a>
          </div>
        </div>
      </div>

      <div className='apis__item'>
        <h2>toolbar.toolbarHandlers.insert(type:'hr'|</h2>
        <h2>'br'|'code'|'formula'|'checklist'|'toc'|'link'|'image'|</h2>
        <h2>'video'|'audio'|'normal-table'|'normal-table-row*col')</h2>
        <div className='introduce__title'>
          <div className='title--ch'>向cherry编辑器中插入特定语法。</div>
          <div className='title--en' >Insert specific syntax into the Cherry editor.</div>
        </div>
        <table className="cherry-api-table">
          <thead>
            <tr>
              <th>type</th>
              <th>效果</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='type-style'>'hr'</td>
              <td>删除线</td>
            </tr>
            <tr>
              <td className='type-style'>'br'</td>
              <td>强制换行</td>
            </tr>
            <tr>
              <td className='type-style'>'code'</td>
              <td>代码块</td>
            </tr>
            <tr>
              <td className='type-style'>'formula'</td>
              <td>行内公式</td>
            </tr>
            <tr>
              <td className='type-style'>'checklist'</td>
              <td>检查项</td>
            </tr>
            <tr>
              <td className='type-style'>'toc'</td>
              <td>目录</td>
            </tr>
            <tr>
              <td className='type-style'>'link'</td>
              <td>超链接</td>
            </tr>
            <tr>
              <td className='type-style'>'image'</td>
              <td>图片</td>
            </tr>
            <tr>
              <td className='type-style'>'video'</td>
              <td>视频</td>
            </tr>
            <tr>
              <td className='type-style'>'audio'</td>
              <td>音频</td>
            </tr>
            <tr>
              <td className='type-style'>'normal-table'</td>
              <td>插入3行5列的表格</td>
            </tr>
            <tr>
              <td className='type-style'>'normal-table-row*col'</td>
              <td>如<code>normal-table-2*4</code>
                <div className='content--ch'>插入2行(包含表头是3行)4列的表格。</div>
                <div className='content--en'>Insert a table with 2 rows (3 rows in the header),4 columns.</div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <a onClick={() => toolbarHandlersInsert('hr')}>hr</a>
            <a onClick={() => toolbarHandlersInsert('br')}>br lists</a>
            <a onClick={() => toolbarHandlersInsert('code')}>code</a>
            <a onClick={() => toolbarHandlersInsert('formula')}>formula</a>
            <a onClick={() => toolbarHandlersInsert('checklist')}>checklist</a>
            <a onClick={() => toolbarHandlersInsert('toc')}>toc</a>
            <a onClick={() => toolbarHandlersInsert('link')}>link</a>
            <a onClick={() => toolbarHandlersInsert('image')}>image</a>
            <a onClick={() => toolbarHandlersInsert('video')}>video</a>
            <a onClick={() => toolbarHandlersInsert('audio')}>audio</a>
            <a onClick={() => toolbarHandlersInsert('normal-table')}>normal-table</a>
            <a onClick={() => toolbarHandlersInsert('normal-table-4*6')}>'normal-table-4*6'</a>
          </div>
        </div>
      </div>

      <div className='apis__item'>
        <h2>toolbar.toolbarHandlers.graph(type:'1'|'2'|'3'|'4'|'5'|'6'</h2>
        <h2>|1|2|3|4|5|6|'flow'|'sequence'|'state'|'class'|'pie'|'gantt')</h2>
        <div className='introduce__title'>
          <div className='title--ch'>向cherry编辑器中插入画图语法。</div>
          <div className='title--en' >Insert drawing syntax into Cherry editor.</div>
        </div>
        <table className="cherry-api-table">
          <thead>
            <tr>
              <th>id</th>
              <th>效果</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='type-style'>1|'1'|'flow'</td>
              <td>流程图</td>
            </tr>
            <tr>
              <td className='type-style'>2|'2'|'sequence'</td>
              <td>时序图</td>
            </tr>
            <tr>
              <td className='type-style'>3|'3'|'state'</td>
              <td>状态图</td>
            </tr>
            <tr>
              <td className='type-style'>4|'4'|'class'</td>
              <td>类图</td>
            </tr>
            <tr>
              <td className='type-style'>5|'5'|'pie'</td>
              <td>饼图</td>
            </tr>
            <tr>
              <td className='type-style'>6|'6'|'gantt'</td>
              <td>甘特图</td>
            </tr>
          </tbody>
        </table>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <a onClick={() => toolbarHandlersGraph(1)}>(1)ordered</a>
            <a onClick={() => toolbarHandlersGraph(2)}>(1)unordered</a>
            <a onClick={() => toolbarHandlersGraph(3)}>(1)checklist</a>
            <a onClick={() => toolbarHandlersGraph(4)}>(1)ordered</a>
            <a onClick={() => toolbarHandlersGraph(5)}>(1)unordered</a>
            <a onClick={() => toolbarHandlersGraph(6)}>(1)checklist</a>
          </div>
          <div className='content__operate__item'>
            <a onClick={() => toolbarHandlersGraph('1')}>('1')ordered</a>
            <a onClick={() => toolbarHandlersGraph('2')}>('2')unordered</a>
            <a onClick={() => toolbarHandlersGraph('3')}>('3')checklist</a>
            <a onClick={() => toolbarHandlersGraph('4')}>('4')ordered</a>
            <a onClick={() => toolbarHandlersGraph('5')}>('5')unordered</a>
            <a onClick={() => toolbarHandlersGraph('6')}>('6')checklist</a>
          </div>
          <div className='content__operate__item'>
            <a onClick={() => toolbarHandlersGraph('flow')}>('flow')ordered</a>
            <a onClick={() => toolbarHandlersGraph('sequence')}>('sequence')unordered</a>
            <a onClick={() => toolbarHandlersGraph('state')}>('state')checklist</a>
            <a onClick={() => toolbarHandlersGraph('class')}>('class')ordered</a>
            <a onClick={() => toolbarHandlersGraph('pie')}>('pie')unordered</a>
            <a onClick={() => toolbarHandlersGraph('gantt')}>('gantt')checklist</a>
          </div>
        </div>
      </div>

      <div className='apis__item'>
        <h2>cherry.toolbar.showToolbar()</h2>
        <div className='introduce__title'>
          <div className='title--ch'>向cherry编辑器中插入加粗语法。</div>
          <div className='title--en' >Insert bold syntax into Cherry editor.</div>
        </div>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <a onClick={toolbarHandlersPreviewOnly}>try it</a>
          </div>
        </div>
      </div>

      <div className='apis__item'>
        <h2>cherry.toolbar.showToolbar()</h2>
        <div className='introduce__title'>
          <div className='title--ch'>向cherry编辑器中插入加粗语法。</div>
          <div className='title--en' >Insert bold syntax into Cherry editor.</div>
        </div>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <a onClick={toolbarHandlersShowToolbar}>try it</a>
          </div>
        </div>
      </div>
    </>
  )
}
export default ToolbarHandlersApi;