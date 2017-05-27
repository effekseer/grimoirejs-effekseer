import gr from "grimoirejs";
import EffekseerManager from "./Components/EffekseerManager";
import EffekseerRenderer from "./Components/EffekseerRenderer";
export default ()=>{
  gr.register(async ()=>{
    gr.registerComponent("EffekseerManager",EffekseerManager);
    gr.registerComponent("EffekseerRenderer",EffekseerRenderer);

    gr.overrideDeclaration("goml",["EffekseerManager"]);
    gr.registerNode("efk",["EffekseerRenderer","MaterialContainer"],{},"object");
    // MaterialContainer should be removed in future
  });
};
