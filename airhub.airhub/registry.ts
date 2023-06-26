import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgDeletePost } from "./types/airhub/airhub/tx";
import { MsgAddExecutionLayer } from "./types/airhub/airhub/tx";
import { MsgUpdatePost } from "./types/airhub/airhub/tx";
import { MsgCreatePost } from "./types/airhub/airhub/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/airhub.airhub.MsgDeletePost", MsgDeletePost],
    ["/airhub.airhub.MsgAddExecutionLayer", MsgAddExecutionLayer],
    ["/airhub.airhub.MsgUpdatePost", MsgUpdatePost],
    ["/airhub.airhub.MsgCreatePost", MsgCreatePost],
    
];

export { msgTypes }