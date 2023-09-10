import Cherry from "cherry-markdown";

const ToolbarHandlersApi = (props: { cherry: React.MutableRefObject<Cherry | null> }) => {

  const toolbarHandlersBold = () => props.cherry.current?.toolbar.toolbarHandlers.bold();

  const toolbarHandlersItalic = () => props.cherry.current?.toolbar.toolbarHandlers.italic();

  const toolbarHandlersHead = (leave: number) => props.cherry.current?.toolbar.toolbarHandlers.header(leave);

  const toolbarHandlersStrikethrough = () => props.cherry.current?.toolbar.toolbarHandlers.strikethrough();

  const toolbarHandlersList = (type: number) => props.cherry.current?.toolbar.toolbarHandlers.list(type);

  const toolbarHandlersInsert = (type: string) => props.cherry.current?.toolbar.toolbarHandlers.insert(type);

  const toolbarHandlersGraph = (type: number) => props.cherry.current?.toolbar.toolbarHandlers.graph(type);

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
        <div className='content--ch'>level:<span className='default-type'>1~5|'1'~'5'</span> h1-h5标题。</div>
        <div className='content--en'>level:<span className='default-type'>1~5|'1'~'5'</span> Title of h1-h5.</div>
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
        <h2>toolbar.toolbarHandlers.list(type:'ol'|'ul'|'checklist'|1|2|3|'1'|'2'|'3')</h2>
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
              <td className='default-type'>1|'1'|'ol'</td>
              <td>ol 列表</td>
            </tr>
            <tr >
              <td className='default-type'>2|'2'|'ul'</td>
              <td>ul 列表</td>
            </tr>
            <tr>
              <td className='default-type'>3|'3'|'checklist'</td>
              <td>checklist 可选列表</td>
            </tr>
          </tbody>
        </table>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <a onClick={() => toolbarHandlersList(1)}>ordered lists</a>
            <a onClick={() => toolbarHandlersList(2)}>unordered lists</a>
            <a onClick={() => toolbarHandlersList(3)}>checklist</a>
          </div>
        </div>
      </div>

      <div className='apis__item'>
        <h2>toolbar.toolbarHandlers.insert(type:'hr'|'br'|'code'|'formula'|'checklist'|'toc'|'link'|'image'|'video'|'audio'|'normal-table'|'normal-table-row*col')</h2>
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
              <td className='default-type'>'hr'</td>
              <td>删除线</td>
            </tr>
            <tr>
              <td className='default-type'>'br'</td>
              <td>强制换行</td>
            </tr>
            <tr>
              <td className='default-type'>'code'</td>
              <td>代码块</td>
            </tr>
            <tr>
              <td className='default-type'>'formula'</td>
              <td>行内公式</td>
            </tr>
            <tr>
              <td className='default-type'>'checklist'</td>
              <td>检查项</td>
            </tr>
            <tr>
              <td className='default-type'>'toc'</td>
              <td>目录</td>
            </tr>
            <tr>
              <td className='default-type'>'link'</td>
              <td>超链接</td>
            </tr>
            <tr>
              <td className='default-type'>'image'</td>
              <td>图片</td>
            </tr>
            <tr>
              <td className='default-type'>'video'</td>
              <td>视频</td>
            </tr>
            <tr>
              <td className='default-type'>'audio'</td>
              <td>音频</td>
            </tr>
            <tr>
              <td className='default-type'>'normal-table'</td>
              <td>插入3行5列的表格</td>
            </tr>
            <tr>
              <td className='default-type'>'normal-table-row*col'</td>
              <td>如<code>normal-table-2*4</code>
                <div className='content--ch'>插入2行(包含表头是3行)4列的表格。</div>
                <div className='content--en'>Insert a table with 2 rows (including 3 rows in the header) and 4 columns.</div>
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
        <h2>toolbar.toolbarHandlers.graph(type:'1'|'2'|'3'|'4'|'5'|'6'|1|2|3|4|5|6|'flow'|'sequence'|'state'|'class'|'pie'|'gantt')</h2>
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
              <td className='default-type'>1|'1'|'flow'</td>
              <td>流程图</td>
            </tr>
            <tr>
              <td className='default-type'>2|'2'|'sequence'</td>
              <td>时序图</td>
            </tr>
            <tr>
              <td className='default-type'>3|'3'|'state'</td>
              <td>状态图</td>
            </tr>
            <tr>
              <td className='default-type'>4|'4'|'class'</td>
              <td>类图</td>
            </tr>
            <tr>
              <td className='default-type'>5|'5'|'pie'</td>
              <td>饼图</td>
            </tr>
            <tr>
              <td className='default-type'>6|'6'|'gantt'</td>
              <td>甘特图</td>
            </tr>
          </tbody>
        </table>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <a onClick={() => toolbarHandlersGraph(1)}>ordered</a>
            <a onClick={() => toolbarHandlersGraph(2)}>unordered</a>
            <a onClick={() => toolbarHandlersGraph(3)}>checklist</a>
            <a onClick={() => toolbarHandlersGraph(4)}>ordered</a>
            <a onClick={() => toolbarHandlersGraph(5)}>unordered</a>
            <a onClick={() => toolbarHandlersGraph(6)}>checklist</a>
          </div>
        </div>
      </div>
    </>
  )
}
export default ToolbarHandlersApi;