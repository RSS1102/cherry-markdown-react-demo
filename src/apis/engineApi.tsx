import DemoRack from "@/components/DemoRack";
import Cherry from "cherry-markdown";

const EngineApi = (props: { cherry: React.MutableRefObject<Cherry | null> }) => {
  const markdownToHtml = () => {
    const engineHtml = props.cherry.current?.engine.makeHtml('## Hello World');
    alert('Please go to the console to view.请前往控制台查看。');
    console.log(engineHtml);
  }

  const htmlToMarkdown = () => {
    const engineMarkdown = props.cherry.current?.engine.makeMarkdown('<h1>this is a html</h1><div>hello world</div>');
    alert('Please go to the console to view.请前往控制台查看。');
    console.log(engineMarkdown);
  }

  return <>
    <h1>Cherry.engine Api</h1>

    <DemoRack
      id={'makeHtml'}
      title={'engine.makeHtml(markdown:string)'}
      nameCn={'将markdown字符串制作成html。'}
      nameEn={'Make the markdown。 string into html.'}
      contentCn={<div>markdown?:<span className='type-style'>string</span> markdown字符串。</div>}
      contentEn={<div>markdown?:<span className='type-style'>string</span> markdown string.</div>}
      contentSample={
        <div className='content__operate__item'>
          <a onClick={markdownToHtml}>try it</a>
        </div>
      } />

    <DemoRack
      id={'makeMarkdown'}
      title={'engine.makeMarkdown(html:string)'}
      nameCn={'将html字符串渲染成markdown。'}
      nameEn={'Make the html string into markdown.'}
      contentCn={<div>html?:<span className='type-style'>string</span> html字符串。</div>}
      contentEn={<div>html?:<span className='type-style'>string</span> html string.</div>}
      contentSample={
        <div className='content__operate__item'>
          <a onClick={htmlToMarkdown}>try it</a>
        </div>
      } />

  </>

}

export default EngineApi;