import {useState} from 'react';
import cat from "./cat.jpg";

const SliderImageResizer=()=>{const [a,b]=useState({height:320,width:320});return(<div><img id="resizable-img" src={cat} height={a.height} width={a.width} alt="cat" /><hr /><input type="number" min={100} max={800} id={"height-slider"} name="height-slider" value={a.height} onChange={v=>{b({...a,height:v.target.value});}} /><br /><input type="number" name="width-slider" id="width-slider" min={100} max={800} value={a.width} onChange={v=>{b({...a,width:v.target.value});}} /></div>);};

export default SliderImageResizer;