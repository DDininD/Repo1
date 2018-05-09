let province = ["湖南", "湖北", "广东", "广西"],
    city = [
        ["长沙市", "株洲市", "湘潭市"],
        ["武汉市", "黄石市", "十堰市"],
        ["广州市", "深圳市", "珠海市"],
        ["南宁市", "柳州市", "桂林市"]
    ],
    region = [
        [
            ["芙蓉区", "天心区", "岳麓区", "开福区"],
            ["天元区", "荷塘区", "芦淞区", "石峰区"],
            ["雨湖区", "岳塘区", "湘乡市"]
        ],
        [
            ["江岸区", "江汉区"],
            ["黄石港区", "西塞山区"],
            ["茅箭区", "张湾区"]
        ],
        [
            ["越秀区", "荔湾区"],
            ["福田区", "罗湖区"],
            ["香洲区", "金湾区", "斗门区"]
        ],
        [
            ["青秀区", "兴宁区", "江南区"],
            ["城中区", "鱼峰区", "柳南区"],
            ["秀峰区", "叠彩区", "象山区"]
        ]
    ];

let provSelector = document.getElementById("province");
let citySelector = document.getElementById("city");
let regSelector = document.getElementById("region");

let itemSelections = document.getElementsByName("item");
function selectAll() {

    for(let i=0;i<itemSelections.length;i++) {
        if (!itemSelections.item(i).checked) itemSelections.item(i).checked = true;
        console.log("选了");
    }
}

function reverseSelection() {
    for(let i=0;i<itemSelections.length;i++){
        itemSelections.item(i).checked = !itemSelections.item(i).checked;
        console.log("反了");
    }

}


//
// function selectChange() {
//     if(selectStatu.item(0).checked===true){
//         console.log("全选");
//         for(let i=0;i<itemSelections.length;i++){
//             if(!itemSelections.item(i).checked)itemSelections.item(i).checked=true;
//             console.log("选了");
//         }
//     }else if(selectStatu.item(1).checked===true){
//         for(let i=0;i<itemSelections.length;i++){
//             if(!itemSelections.item(i).checked) {
//                 itemSelections.item(i).checked = true;
//             }else itemSelections.item(i).checked = false;
//             console.log("反了");
//         }
//         console.log("反选");
//     }
// }













function initLands() {
    addOptions(provSelector, province);
}

function addOptions(selector, opList) {
    for (let i = 0; i < opList.length; i = i + 1) {
        let temp = new Option();
        temp.text = opList[i];
        selector.add(temp);

    }
}

function cleanOptions(selector) {
    selector.innerHTML = "";
}

function provChange() {
    if (provSelector.item(0).text.startsWith("---") && citySelector.item(0).text.startsWith("---") && regSelector.item(0).text.startsWith("---")) {
        provSelector.remove(0);
        citySelector.remove(0);
        regSelector.remove(0);
    }

    cleanOptions(citySelector);
    addOptions(citySelector, city[provSelector.selectedIndex]);
    cleanOptions(regSelector);
    addOptions(regSelector, region[provSelector.selectedIndex][citySelector.selectedIndex])
}

function cityChange() {
    cleanOptions(regSelector);
    addOptions(regSelector, region[provSelector.selectedIndex][citySelector.selectedIndex])

}


