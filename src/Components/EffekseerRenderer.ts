import MeshRendererComponent from "grimoirejs-fundamental/ref/Components/MeshRendererComponent";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import Matrix from "grimoirejs-math/ref/Matrix";
import Vector3 from "grimoirejs-math/ref/Vector3";
import Effekseer from "../Effekseer";
import Transform from "grimoirejs-fundamental/ref/Components/TransformComponent";
export default class EffekseerRenderer extends MeshRendererComponent{
  // TODO いらない属性の削除
  public static attributes: { [key: string]: IAttributeDeclaration } = {
     /**
      * 描画に用いる形状データ
      */
     geometry: {
         converter: "Geometry",
         default: "quad"
     },
     /**
      * 描画に用いるインデックスバッファ名
      */
     targetBuffer: {
         converter: "String",
         default: "default"
     },
     /**
      * このメッシュが属するレイヤー
      *
      * 詳しくは`render-scene`ノードを参考にしてください。
      */
     layer: {
         converter: "String",
         default: "default"
     },
     /**
      * 描画するインデックスの個数
      *
      * デフォルトの状態でジオメトリの全インデックスを描画する
      */
     drawCount: {
         converter: "Number",
         default: Number.MAX_VALUE
     },
     /**
      * 描画するジオメトリのインデックスのオフセット
      */
     drawOffset: {
         converter: "Number",
         default: 0
     },
     // effekseerのProperty
     src:{
       converter:"String",
       default:null
     }
 };

 private effect:any;

 private transform:Transform;

 public $mount():void{
   super.$mount();
   this.transform = this.node.getComponent(Transform);
   const src = this.getAttribute("src");
   if(src){
     const effekseer:Effekseer = this.companion.get("effekseer");
     this.effect =　effekseer.loadEffect(src,()=>{
       effekseer.play(this.effect);
       this.node.on("render",(args)=>{

       })
     });
   }
 }

 public render(args):void{
   const effekseer:Effekseer = this.companion.get("effekseer");
   effekseer.update(); // Should be called in Manager?
   effekseer.setProjectionMatrix(args.camera.ProjectionMatrix.rawElements);
   effekseer.setCameraMatrix(args.camera.ViewMatrix.rawElements);
  //  const pos = this.transform.globalPosition;
  //  this.effect.setLocation(pos.X,pos.Y,pos.Z);
  //  const s = this.transform.globalScale;
  //  this.effect.setScale(s.X,s.Y,s.Z);
  //  const rot = this.transform.globalTransform.multiplyWith(Matrix.scale(new Vector3(1/s.X,1/s.Y,1/s.Z))).getRotation().eularAngles;
  //  this.effect.setRotation(rot.X,rot.Y,rot.Z);
   effekseer.draw();
 }
}
