import {GLM} from "gl-matrix";
interface Effekseer{
  init(gl: WebGLRenderingContext);
  update();
  draw();
  play(effect:any);
  setCameraMatrix(arr:GLM.IArray);
  setProjectionMatrix(arr:GLM.IArray);
  loadEffect(src:string,loadCompleted:()=>void):any;
  setLocation(x:number,y:number,z:number);
  setRotation(x:number,y:number,z:number);
  setScale(x:number,y:number,z:number);
};

export default Effekseer;
