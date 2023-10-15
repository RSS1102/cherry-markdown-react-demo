import { useEffect } from "react";
import './index.css'

type DemoRackProps = {
  id: string;
  title: string;
  nameCn: string;
  nameEn: string;
  contentCn?: React.ReactNode;
  contentEn?: React.ReactNode;
  contentSample: React.ReactNode;
  other?: React.ReactNode;
}

const DemoRack = (props: DemoRackProps) => {

  useEffect(() => {
    // 检测页面加载时的锚点
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const { id, title, nameCn, nameEn, contentCn, contentEn, contentSample, other } = props
  return (<div className='apis__item'>
    <a href={`#${id}`} id={id}><h2>{title}</h2></a>
    <div className='introduce__title'>
      <div className='title--ch'>{nameCn}</div>
      <div className='title--en' >{nameEn}</div>
    </div>
    {contentCn && <div className='content--ch'>
      {contentCn}
    </div>}
    {contentEn && <div className='content--en'>
      {contentEn}
    </div>}
    {contentSample && <div className='content__operate'>
      {contentSample}
    </div>}
    {other}
  </div>)
}

export default DemoRack;