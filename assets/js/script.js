function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

function cripto() {
    let text = document.getElementById('text').value
    let split = text.split("")
    let chars = split.length
    const pre = ['Z','E','N','I','T','P','O','L','A','R','z','e','n','i','t','p','o','l','a','r']

    const pos = ['P','O','L','A','R','Z','E','N','I','T','p','o','l','a','r','z','e','n','i','t']
    let rslt = document.getElementById('result')

    for (i = 0; i < chars; i++) {
        let index = pre.indexOf(split[i])
        
        if(index === -1) {
            split[i] = split [i]
            } else {
                split[i] = pos[index]
        }
        
        const toString = split.join('')
        
        rslt.innerText = toString
        //console.log(split[i])
    }
}