import Cherry from 'cherry-markdown';
import './index.css'

const BaseApi = (props: { cherry: React.MutableRefObject<Cherry | null> }) => {

  const setMarkdownValue = () => {
    const value = (document.getElementById('set-markdown-value') as HTMLInputElement).value;
    props.cherry.current?.setMarkdown(value);
    setTimeout(() => {
      props.cherry.current?.setMarkdown('触发了 `keepCursor =true)`', true);
    }, 1500);
  }

  const setInsertValue = () => {
    const value = (document.getElementById('markdown-value') as HTMLInputElement).value;
    props.cherry.current?.insert(value, true, [1, 2], true);
  }

  const getMarkdownValue = () => {
    alert(props.cherry.current?.getMarkdown());
    console.log(props.cherry.current?.getMarkdown());
  }

  const getHtmlValue = () => {
    alert(props.cherry.current?.getHtml());
    console.log(props.cherry.current?.getHtml());
  }

  const exportFile = (type: string, fileName: string) => props.cherry.current?.export(type, fileName);


  const readOnly = () => props.cherry.current?.switchModel('previewOnly');

  const pureEditing = () => props.cherry.current?.switchModel('editOnly');

  const doubleColumnEditing = () => props.cherry.current?.switchModel('edit&preview');

  const getToc = () => {
    const toc = props.cherry.current?.getToc();
    alert(JSON.stringify(toc));
    console.log(toc);
  }

  const getCodeMirror = () => {
    const codeMirror = props.cherry.current?.getCodeMirror();
    alert('open console to see the instance of CodeMirror.');
    console.log(codeMirror);
  }

  const getPreviewer = () => {
    const previewer = props.cherry.current?.getPreviewer();
    alert('open console to see the instance of Previewer.');
    console.log(previewer);
  }

  return (
    <>
      <h1> Cherry API</h1>
      <div className='apis__item'>
        <h2>setMarkdown(content:string, keepCursor = false)</h2>
        <h4>Same as : setValue(content:string, keepCursor = false)</h4>
        <div className='introduce__title'>
          <div className='title--ch'>设置内容</div>
          <div className='title--en' >set value</div>
        </div>
        <div className='content--ch'>
          <div>content:<span className='default-type'>string</span> 设置的新内容。</div>
          <div> keepCursor?:
            <span className='default-type'>boolean</span>
            (false) 更新内容的时候保持光标位置。</div>
        </div>
        <div className='content--en'>
          <div>content?: <span className='default-type'>string</span> New content set up.</div>
          <div>keepCursor?:
            <span className='default-type'>boolean</span>
            (false) Keeps the cursor position when updating content.</div>
        </div>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <textarea style={{ width: "100%" }} rows={3} id='markdown-value' defaultValue="#输入内容 Input Content" />
            <div className='content__operate__item__additional-description additional-description--ch'>
              点击try it之后，然后在编辑区选中一个区域等待1.5秒就会看到它更新了内容，你的光标位置还在同样的位置。
            </div>
            <div className='content__operate__item__additional-description  additional-description--en'>
              After clicking on try it, select an area in the editing area and wait for 1.5 seconds to see that it has updated its content,
              and your cursor position is still in the same position.
            </div>
            <a onClick={setMarkdownValue}>try it</a>
          </div>
        </div>
      </div>

      <div className='apis__item'>
        <h2>insert(content:string, isSelect = false, anchor = false, focus = true)</h2>
        <div className='introduce__title'>
          <div className='title--ch'>插入内容</div>
          <div className='title--en' >insert value</div>
        </div>
        <div className='content--ch'>
          <div>content:<span className='default-type'>string</span> 插入的内容。</div>
          <div>isSelect?:<span className='default-type'>boolean</span>(false) 选中刚插入的内容</div>
          <div>anchor?:<span className='default-type'>boolean</span>(false) [x,y] 代表x+1行，y+1字符偏移量，默认false 会从光标处插入。</div>
          <div>focus:<span className='default-type'>boolean</span>(true) 保持编辑器处于focus状态，默认true，选中编辑器（用户可以继续输入）。</div>
        </div>
        <div className='content--en'>
          <div>content:<span className='default-type'>string</span> Insert the content.</div>
          <div>isSelect?:<span className='default-type'>boolean</span>(false) Select the content just inserted.</div>
          <div>anchor?:<span className='default-type'>boolean</span>(false) [x, y] Represents x+1 line, y+1 character offset, default false will be inserted from the cursor.</div>
          <div>focus?:<span className='default-type'>boolean</span>(true) Keep the editor in the focus state, default to true, select the editor (users can continue typing).</div>
        </div>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <textarea style={{ width: "100%" }} rows={3} id='set-markdown-value' defaultValue="#插入内容 insert Content" />
            <a onClick={setInsertValue}>try it</a>
          </div>
        </div>
      </div>

      <div className='apis__item'>
        <h2>getMarkdown()</h2>
        <div className='introduce__title'>
          <div className='title--ch'>获取 Markdown 内容。</div>
          <div className='title--en' >Get value of Markdown.</div>
        </div>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <a onClick={getMarkdownValue}>try it</a>
          </div>
        </div>
      </div>

      <div className='apis__item'>
        <h2>getHtml(wrapTheme = true)</h2>
        <div className='introduce__title'>
          <div className='title--ch'>获取渲染后的html内容。</div>
          <div className='title--en' >Get rendered HTML content.</div>
        </div>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <a onClick={getHtmlValue}>try it</a>
          </div>
          <div className='content--ch'>
            <div>wrapTheme?:<span className='default-type'>boolean</span>(true) 是否在外层包裹主题class</div>
          </div>
          <div className='content--en'>
            <div>wrapTheme?:<span className='default-type'>boolean</span>(true) Does wrap the theme class in the outer layer.</div>
          </div>
        </div>
      </div>

      <div className='apis__item'>
        <h2>export(type='pdf')</h2>
        <div className='introduce__title'>
          <div className='title--ch'>导出预览区域的内容。</div>
          <div className='title--en' >Export the content of the preview area.</div>
        </div>
        <div className='content--en'>
          <div>type:<span className='default-type'>'pdf' | 'img' 'html' | 'markdown'</span>:(pdf)</div>
        </div>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <a onClick={() => exportFile('pdf', 'cherry.pdf')}>export PDF</a>
            <a onClick={() => exportFile('img', 'cherry.png]')}>export img</a>
            <a onClick={() => exportFile('html', 'cherry.html')}>export html</a>
            <a onClick={() => exportFile('markdown', 'cherry.md]')}>export markdown</a>
          </div>
        </div>
      </div>

      <div className='apis__item'>
        <h2>switchModel(model:string)</h2>
        <div className='introduce__title'>
          <div className='title--ch'>切换模式。</div>
          <div className='title--en' >Switch Mode.</div>
        </div> 
        <div className='content--en'>
          <div>model:<span className='default-type'>'edit&preview' | 'editOnly' | 'previewOnly'</span></div>
        </div>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <a onClick={readOnly}>read Only</a>
            <a onClick={pureEditing}>Pure Editing</a>
            <a onClick={doubleColumnEditing}>Double Column Editing</a>
          </div>
        </div>
      </div>

      <div className='apis__item'>
        <h2>getToc()</h2>
        <div className='introduce__title'>
          <div className='title--ch'>获取由标题组成的目录。</div>
          <div className='title--en' >Get a table of contents composed of titles.</div>
        </div>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <a onClick={getToc}>try it</a>
          </div>
        </div>
      </div>

      <div className='apis__item'>
        <h2>getCodeMirror()</h2>
        <div className='introduce__title'>
          <div className='title--ch'>获取左侧编辑器实例。</div>
          <div className='title--en' >get Left Editor(CodeMirror) instance.</div>
        </div>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <a onClick={getCodeMirror}>try it</a>
          </div>
        </div>
      </div>

      <div className='apis__item'>
        <h2>getPreviewer()</h2>
        <div className='introduce__title'>
          <div className='title--ch'>获取右侧预览区对象实例。</div>
          <div className='title--en' >Get an instance of the right preview area object.</div>
        </div>
        <div className='content__operate'>
          <div className='content__operate__item'>
            <a onClick={getPreviewer}>try it</a>
          </div>
        </div>
      </div>
    </>
  )

};

export default BaseApi; 