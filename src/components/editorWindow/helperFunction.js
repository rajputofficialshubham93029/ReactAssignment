export default function reference(data, parentId) {
    let arr = parentId.trim().split(" ");
    let ref = data;
    for (let i = 0; i < arr.length; i++) {
        ref = ref[Number(arr[i])].children;
    }
    return ref
}

export const getPath = (nodeId, data) => {
    let path = "";
    nodeId = nodeId.trim().split(" ");
    let temp = data;
    for (let i = 0; i < nodeId.length; i++) {
        path += temp[Number(nodeId[i])].Name + "/";
        temp = temp[Number(nodeId[i])].children
    }
    return path.substring(0, path.length - 1);

}