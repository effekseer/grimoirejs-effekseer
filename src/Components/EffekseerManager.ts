import Component from "grimoirejs/ref/Node/Component";
import Effekseer from "../Effekseer";
import gr from "grimoirejs";
declare var effekseer:Effekseer;
export default class EffekseerManager extends Component{
  public $mount():void{
    const gl = this.companion.get("gl") as WebGLRenderingContext;
    effekseer.init(gl);
    const ns = gr.ns(this.node.name.ns);
    this.companion.set(ns("effekseer"),effekseer);
    // this is test
  }
}
