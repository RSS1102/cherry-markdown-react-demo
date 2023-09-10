import Cherry from "cherry-markdown";

const EngineApi = (props: { cherry: React.MutableRefObject<Cherry | null> }) => {
  const markdownToHtml = () => {
    const engineHtml = props.cherry.current?.engine.makeHtml('## Hello World');
    alert(engineHtml);
  }

  const htmlToMarkdown = () => {
    const engineMarkdown = props.cherry.current?.engine.makeMarkdown('<h1>this is a html</h1><div>hello world</div>');
    alert(engineMarkdown);
  }

  return <>
    <h1>Cherry.engine Api</h1>
    <div className='apis__item'>
      <h2>engine.makeHtml(markdown:string)</h2>
      <div className='introduce__title'>
        <div className='title--ch'>将markdown字符串制作成html。</div>
        <div className='title--en' >Make the markdown string into html.</div>
      </div>
      <div className='content--ch'>
        <div>markdown?:<span className='default-type'>string</span> Markdown字符串。</div>
      </div>
      <div className='content--en'>
        <div>markdown?:<span className='default-type'>string</span> Markdown string.</div>
      </div>
      <div className='content__operate'>
        <div className='content__operate__item'>
          <a onClick={markdownToHtml}>try it</a>
        </div>
      </div>
    </div>

    <div className='apis__item'>
      <h2>engine.makeMarkdown(html:string)</h2>
      <div className='introduce__title'>
        <div className='title--ch'>将html字符串渲染成markdown。</div>
        <div className='title--en' >Make the html string into markdown.</div>
      </div>
      <div className='content--ch'>
        <div>html?:<span className='default-type'>string</span> Html字符串。</div>
      </div>
      <div className='content--en'>
        <div>html?:<span className='default-type'>string</span> Html string.</div>
      </div>
      <div className='content__operate'>
        <div className='content__operate__item'>
          <a onClick={htmlToMarkdown}>try it</a>
        </div>
      </div>
    </div>
  </>

}

export default EngineApi;