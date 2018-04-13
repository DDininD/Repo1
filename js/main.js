function validate() {
    const usn = document.getElementById('username');
    const psw = document.getElementById('password');
    const sth = document.getElementById('body1');
    if (usn.value === '' || psw.value === '') {
        console.log('请输入');
        alert('请输入');
    } else if (usn.value === 'admin' && psw.value === '123') {
        sth.innerHTML = '<h3>登录成功</h3>'
    } else {
        sth.innerHTML = '<h3>登录失败，刷新！</h3>'
    }
}

// function loop() {
//     const loop = $('.carousel').carousel({
//         interval: 30
//     });
// }

function hotPeaks() {
    let hat = {
        name: '帽子',
        hot: 3,
        img_path: 'resource/hat.jpg'
    };
    let cloth = {
        name: '衣服',
        hot: 3,
        img_path: 'resource/cloth.jpg'
    };
    let shoes = {
        name: '鞋子',
        hot: 3,
        img_path: 'resource/shoes.jpg'
    };
    const goods = [hat, shoes, cloth];
    let b = document.getElementById('hots');
    for (let i = 0; i < 3; i++) {
        if (goods[i].hot === 3) {
            b.innerHTML +=
                `<div class="panel panel-default"><div class="panel-heading"><h2 class="panel-title">${goods[i].name}</h2></div><div class="panel-body"><img src='${goods[i].img_path}'><br><strong>大热门！NOW！</strong></div></div>`;
        }
    }

}
