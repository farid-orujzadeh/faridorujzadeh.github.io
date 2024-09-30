let myImage = document.querySelector('.image');
let loading = document.querySelector('.loading');
let skill = document.querySelector('.skill');
let Weltext = document.querySelector('.welcome-text');
let Welcontent = document.querySelector('.welcome-content');
let clickButtons = document.querySelector('.sayClick');
window.addEventListener('load', () => {
    setTimeout(() => {
        skill.classList.add('active')
        Weltext.classList.add('active')
        Welcontent.classList.add('active')
        clickButtons.classList.add('active')
    }, 100)
})

let welcome = document.querySelector('.welcome');

// welcome.classList.add('active')

// ----------------------------
// dark mode 

let dark = document.querySelector('.dark-mode');
let container = document.querySelector('.container')
let main = document.querySelector('.main')

dark.onclick = () => {
    container.classList.toggle('container-night')
    main.classList.toggle('main-night')
    dark.classList.toggle('sun-mode')
}

// -------------------------------------

let contact = document.querySelector('.contact');
let contacts = document.querySelector('.social-media');
let fb = document.querySelector('.fb-img');
let wa = document.querySelector('.wa-img');
let link = document.querySelector('.link-img');
let mail = document.querySelector('.mail-img');
let tel = document.querySelector('.tel-img');
let sub = document.querySelector('.sub');
contacts.onclick = () => {
    contact.classList.add('active')
    aboutUsSection.classList.remove('active')
    language.classList.remove('active')
    mySkill.classList.remove('active')
    mywork.classList.remove('active')
    maharat.classList.remove('active')
    myImage.classList.add('active')
    welcome.classList.add('active')

}


let insta = document.querySelector('.instagram');
let instaSubmit = document.querySelector('.submit-insta');
let instatxt1 = document.querySelector('.insta-txt1');
let instatxt2 = document.querySelector('.insta-txt2');
let instaImg = document.querySelector('.insta-image');
let instaInfo = document.querySelector('.instagram-info');

insta.onclick = () => {
    instaInfo.classList.add('active')
    instaImg.classList.add('active')
    instatxt1.classList.add('active')
    instatxt2.classList.add('active')
}
instaSubmit.onclick = () => {
    instaInfo.classList.remove('active')
    instaImg.classList.remove('active')
    instatxt1.classList.remove('active')
    instatxt2.classList.remove('active')
}

let fbSubmit = document.querySelector('.submit-fb');
let fbInfo = document.querySelector('.facebook-info');
let fbtxt = document.querySelector('.fb-txt');
let fbImg = document.querySelector('.fb-image');
fb.onclick = () => {
    fbInfo.classList.add('active')
    fbImg.classList.add('active')
    fbtxt.classList.add('active')
}
fbSubmit.onclick = () => {
    fbInfo.classList.remove('active')
    fbImg.classList.remove('active')
    fbtxt.classList.remove('active')
}

let wsSubmit = document.querySelector('.submit-ws');
let wsInfo = document.querySelector('.whatsapp-info');
let wstxt = document.querySelector('.ws-txt');
let wsImg = document.querySelector('.ws-img');
wa.onclick = () => {
    wsInfo.classList.add('active')
    wsImg.classList.add('active')
    wstxt.classList.add('active')

}
wsSubmit.onclick = () => {
    wsInfo.classList.remove('active')
    wsImg.classList.remove('active')
    wstxt.classList.remove('active')
}

// -----------------
let linkdin = document.querySelector('.linkdin');
let LinkdinSubmit = document.querySelector('.submit-linkdin');
let linkdinInfo = document.querySelector('.linkdin-info');
let linkdintxt = document.querySelector('.linkdin-txt');
let linkdinImg = document.querySelector('.linkdin-img');
linkdin.onclick = () => {
    linkdinInfo.classList.add('active')
    linkdinImg.classList.add('active')
    linkdintxt.classList.add('active')

}
LinkdinSubmit.onclick = () => {
    linkdinInfo.classList.remove('active')
    linkdinImg.classList.remove('active')
    linkdintxt.classList.remove('active')
}
// -------------------------------------
let gmail = document.querySelector('.gmail');
let gmailSubmit = document.querySelector('.submit-gmail');
let gmailInfo = document.querySelector('.gmail-info');
let gmailtxt = document.querySelector('.gmail-txt');
let gmailImg = document.querySelector('.gmail-img');
gmail.onclick = () => {
    gmailInfo.classList.add('active')
    gmailtxt.classList.add('active')
    gmailImg.classList.add('active')

}
gmailSubmit.onclick = () => {
    gmailInfo.classList.remove('active')
    gmailtxt.classList.remove('active')
    gmailImg.classList.remove('active')
}
// ------------------------------------
let telegram = document.querySelector('.telegram');
let telegramSubmit = document.querySelector('.submit-telegram');
let telegramInfo = document.querySelector('.telegram-info');
let telegramtxt = document.querySelector('.telegram-txt');
let telegramImg = document.querySelector('.telegram-img');
telegram.onclick = () => {
    telegramInfo.classList.add('active')
    telegramtxt.classList.add('active')
    telegramImg.classList.add('active')

}
telegramSubmit.onclick = () => {
    telegramInfo.classList.remove('active')
    telegramtxt.classList.remove('active')
    telegramImg.classList.remove('active')
}

// ----------------------------------
// about us part 

let language = document.querySelector('.language')
let aboutUs = document.querySelector('.about-me')
let aboutUsSection = document.querySelector('.about-me-part')
let flag1 = document.querySelector('.flag1')
let flag2 = document.querySelector('.flag2')
let flag3 = document.querySelector('.flag3')

let persianLoad = document.querySelector('.persian-load')
let persianTitle = document.querySelector('.persian-title')
let turkeyLoad = document.querySelector('.turkey-load')
let turkeyTitle = document.querySelector('.turkey-title')
let englishLoad = document.querySelector('.english-load')
let englishTitle = document.querySelector('.english-title')



aboutUs.onclick = () => {
    aboutUsSection.classList.add('active')
    language.classList.add('active')
    contact.classList.remove('active')
    mywork.classList.remove('active')
    mySkill.classList.remove('active')
    maharat.classList.remove('active')
    myImage.classList.add('active')
    welcome.classList.add('active')
    flag1.classList.add('active')
    flag2.classList.add('active')
    flag3.classList.add('active')

    persianLoad.classList.add('active')
    persianTitle.classList.add('active')
    turkeyLoad.classList.add('active')
    turkeyTitle.classList.add('active')
    englishLoad.classList.add('active')
    englishTitle.classList.add('active')

}

// ----------------------------------
let skills = document.querySelector('.skills');
let maharat = document.querySelector('.maharat');
let mySkill = document.querySelector('.mySkill-part');
let framework = document.querySelector(".framework");
let phoneApps = document.querySelector(".phoneApps")
let frontEndPart = document.querySelector(".frontEnd-Part")
let adobePart = document.querySelector(".adobe-part")

skills.onclick = () => {
    maharat.classList.add('active')
    mySkill.classList.add('active')
    contact.classList.remove('active')
    mywork.classList.remove('active')
    aboutUsSection.classList.remove('active')
    language.classList.remove('active')
    myImage.classList.add('active')
    welcome.classList.add('active')

}

// ----------------------------------
let mywork = document.querySelector('.myWork');
let workbtn = document.querySelector('.work');
let year2012to14 = document.querySelector('.year2012')
let year2014to16 = document.querySelector('.year2014')
let year2016 = document.querySelector('.year2016')

workbtn.onclick = () => {
    mywork.classList.add('active')
    aboutUsSection.classList.remove('active')
    language.classList.remove('active')
    contact.classList.remove('active')
    maharat.classList.remove('active')
    mySkill.classList.remove('active')
    myImage.classList.add('active')
    welcome.classList.add('active')

    year2012to14.classList.add('active')
    year2014to16.classList.add('active')
    year2016.classList.add('active')



}