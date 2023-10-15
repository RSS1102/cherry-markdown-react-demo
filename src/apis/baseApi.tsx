import Cherry from 'cherry-markdown';
import DemoRack from '@/components/DemoRack';

const BaseApi = (props: { cherry: React.MutableRefObject<Cherry | null> }) => {



  const setMarkdownValue = () => {
    const value = (document.getElementById('set-markdown-value') as HTMLInputElement).value;
    props.cherry.current?.setMarkdown(value);
    setTimeout(() => {
      props.cherry.current?.setMarkdown('触发了 `keepCursor =true)`', true);
    }, 1500);
  }

  const setInsertValue = (isSelect: boolean, anchor: false | [number, number], focus: boolean) => {
    const value = (document.getElementById('markdown-value') as HTMLInputElement).value;
    props.cherry.current?.insert(value, isSelect, anchor, focus);
  }

  const getMarkdownValue = () => {
    alert('Please go to the console to view.请前往控制台查看。');
    console.log(props.cherry.current?.getMarkdown());
  }

  const getHtmlValue = (wrapTheme: boolean) => {
    alert('Please go to the console to view.请前往控制台查看。');
    console.log(props.cherry.current?.getHtml(wrapTheme));
  }

  const exportFile = (type: string, fileName: string) => props.cherry.current?.export(type, fileName);

  const editPreview = () => props.cherry.current?.switchModel('edit&preview');

  const editOnly = () => props.cherry.current?.switchModel('editOnly');

  const previewOnly = () => props.cherry.current?.switchModel('previewOnly');

  const getToc = () => {
    const toc = props.cherry.current?.getToc();
    alert('Please go to the console to view.请前往控制台查看。');
    console.log(toc);
  }

  const getCodeMirror = () => {
    const codeMirror = props.cherry.current?.getCodeMirror();
    alert('Please go to the console to view.请前往控制台查看。');
    console.log(codeMirror);
  }

  const getPreviewer = () => {
    const previewer = props.cherry.current?.getPreviewer();
    alert('Please go to the console to view.请前往控制台查看。');
    console.log(previewer);
  }

  return (
    <>
      <h1> Cherry API</h1>

      <DemoRack
        id={'setMarkdown'}
        title={'setMarkdown(content:string, keepCursor = false)'}
        nameCn={'设置内容'}
        nameEn={'set value'}
        contentCn={(<>
          <div>content:<span className='type-style'>string</span> 设置的新内容。</div>
          <div> keepCursor?:
            <span className='type-style'>boolean(false)</span>
            更新内容的时候保持光标位置。
          </div>
        </>)}
        contentEn={(<>
          <div>content?: <span className='type-style'>string</span> New content set up.</div>
          <div>keepCursor?:
            <span className='type-style'>boolean(false)</span>
            Keeps the cursor position when updating content.
          </div>
        </>)}
        contentSample={(<>
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
        </>)}
        other={<div>Same as : <code>setValue(content:string, keepCursor = false)</code></div>}
      />

      <DemoRack
        id={'insert'}
        title={'insert(content:string, isSelect = false, anchor = false, focus = true)'}
        nameCn={'插入内容'}
        nameEn={'insert value'}
        contentCn={<>
          <div>content:<span className='type-style'>string</span> 插入的内容。</div>
          <div>isSelect?:<span className='type-style'>boolean(false)</span>
            选中刚插入的内容</div>
          <div>anchor?:
            <span className='type-style'>boolean(false)</span>
            [x,y] 代表x+1行，y+1字符偏移量，默认false 会从光标处插入。</div>
          <div>focus:<span className='type-style'>boolean(true)</span>
            保持编辑器处于focus状态，默认true，选中编辑器（用户可以继续输入）。</div>
        </>}
        contentEn={<>
          <div>content:<span className='type-style'>string</span> Insert the content.</div>
          <div>isSelect?:<span className='type-style'>boolean(false)</span>
            Select the content just inserted.</div>
          <div>anchor?:<span className='type-style'>boolean(false)</span>
            [x, y] Represents x+1 line, y+1 character offset, default false will be inserted from the cursor.</div>
          <div>focus?:<span className='type-style'>boolean(true)</span>
            Keep the editor in the focus state, default to true, select the editor (users can continue typing).</div>
        </>}
        contentSample={<>
          <div className='content__operate__item'>
            <textarea style={{ width: "100%" }} rows={3} id='set-markdown-value' defaultValue="#插入内容 insert Content" />
            <a onClick={() => setInsertValue(false, [0, 3], true)}>isSelect=false, anchor=[0,3], focus=true</a>
            <a onClick={() => setInsertValue(true, false, true)}>isSelect=true, anchor=false, focus=true</a>
          </div>
        </>}
      />

      <DemoRack
        id={'getMarkdown'}
        title={'getMarkdown()'}
        nameCn={'获取markdown内容。'}
        nameEn={'Get value of markdown.'}
        contentEn={"null"}
        contentSample={
          <div className='content__operate__item'>
            <a onClick={getMarkdownValue}>try it</a>
          </div>
        } />

      <DemoRack
        id={'getHtml'}
        title={'getHtml(wrapTheme = true)'}
        nameCn={'获取渲染后的html内容。'}
        nameEn={'Get rendered HTML content.'}
        contentCn={
          <div>wrapTheme?:
            <span className='type-style'>boolean(true)</span>
            是否在外层包裹主题class
          </div>}
        contentEn={<div>
          wrapTheme?:<span className='type-style'>boolean(true)</span>
          Does wrap the theme class in the outer layer.
        </div>}
        contentSample={
          <div className='content__operate__item'>
            <a onClick={() => getHtmlValue(false)}>wrapTheme = false</a>
            <a onClick={() => getHtmlValue(true)}>wrapTheme = true</a>
          </div>
        } />

      <DemoRack
        id={'export'}
        title={"export(type='pdf')"}
        nameCn={'导出预览区域的内容。'}
        nameEn={'Export the content of the preview area.'}
        contentCn={<div>
          type:<span className='type-style'>'pdf' | 'img' 'html' | 'markdown'('pdf')</span>
        </div>}
        contentEn={<div>
          type:<span className='type-style'>'pdf' | 'img' 'html' | 'markdown'('pdf')</span>
        </div>}
        contentSample={
          <div className='content__operate__item'>
            <a onClick={() => exportFile('pdf', 'cherry.pdf')}>export pdf</a>
            <a onClick={() => exportFile('img', 'cherry.png]')}>export img</a>
            <a onClick={() => exportFile('html', 'cherry.html')}>export html</a>
            <a onClick={() => exportFile('markdown', 'cherry.md]')}>export markdown</a>
          </div>
        } />

      <DemoRack
        id={'switchModel'}
        title={"switchModel(model:string)"}
        nameCn={'切换模式。'}
        nameEn={'Switch Mode.'}
        contentCn={<div>
          type:<span className='type-style'>'edit&preview' | 'editOnly' | 'previewOnly'('edit&preview')</span>
        </div>}
        contentEn={<div>
          type:<span className='type-style'>'edit&preview' | 'editOnly' | 'previewOnly'('edit&preview')</span>
        </div>}
        contentSample={
          <div className='content__operate__item'>
            <a onClick={editPreview}>edit & preview</a>
            <a onClick={editOnly}>Edit only</a>
            <a onClick={previewOnly}>Preview only</a>
          </div>
        } />

      <DemoRack
        id={'getToc'}
        title={"getToc()"}
        nameCn={'获取由标题组成的目录。'}
        nameEn={'Get a table of contents composed of titles.'}
        contentEn={'null'}
        contentSample={
          <div className='content__operate__item'>
            <a onClick={getToc}>try it</a>
          </div>
        } />

      <DemoRack
        id={'getCodeMirror'}
        title={"getCodeMirror()"}
        nameCn={'获取左侧编辑器对象实例。'}
        nameEn={'get Left CodeMirror instance.'}
        contentEn={'null'}
        contentSample={
          <div className='content__operate__item'>
            <a onClick={getCodeMirror}>try it</a>
          </div>
        } />

      <DemoRack
        id={'getPreviewer'}
        title={"getPreviewer()"}
        nameCn={'获取右侧预览区对象实例。'}
        nameEn={'Get an instance of the right preview area object.'}
        contentEn={'null'}
        contentSample={
          <div className='content__operate__item'>
            <a onClick={getPreviewer}>try it</a>
          </div>
        } />
    </>
  )

};

export default BaseApi; 