window.addEventListener("DOMContentLoaded", () => {
    const tabParent = document.querySelector('.tabheader__items'),
        tabs = document.querySelectorAll('.tabheader__item '),
        tabsContent = document.querySelectorAll('.tabcontent')
    loader = document.querySelector('.loader')

    // Loader 
    setTimeout(() => {
        loader.style.opacity = 0
        setTimeout(() => {
            loader.style.display = 'none'
        }, 500)
    }, 2000)

    // Tabs 
    function hide() {
        tabsContent.forEach((item) => {
            item.classList.add('hide')
            item.classList.remove('show')
        })

        tabs.forEach((item) => {
            item.classList.remove("tabheader__item_active")
        })
    }





    function start(i = 0) {
        tabsContent[i].classList.add('show')
        tabsContent[i].classList.remove('hide')

        tabs[i].classList.add('tabheader__item_active')

    }

    hide()
    start()

    tabParent.addEventListener('click', (event) => {
        const target = event.target

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, idx) => {
                if (target == item) {
                    hide()
                    start(idx)
                }
            })
        }




    })



    //   Time 

    const tugashVaqti = '2024-05-25'



    function getTime(endtime) {
        let = days, hours, minutes, seconds

        const timer = Date.parse(endtime) - Date.parse(new Date())

        if (timer <= 0) {
            days = 0
            hours = 0
            minutes = 0
            seconds = 0
        } else {

            days = Math.floor(timer / (1000 * 60 * 60 * 24))
            hours = Math.floor((timer / (1000 * 60 * 60)) % 24)
            minutes = Math.floor((timer / 1000 / 60) % 60)
            seconds = Math.floor((timer / 1000) % 60)
        }




        return {
            timer,
            days,
            hours,
            minutes,
            seconds
        }
    }



    function zero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }



    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(uptaClock, 1000)

        uptaClock()

        function uptaClock() {
            const gt = getTime(endtime)

            days.innerHTML = zero(gt.days)
            hours.innerHTML = zero(gt.hours)
            minutes.innerHTML = zero(gt.minutes)
            seconds.innerHTML = zero(gt.seconds)

            if (gt.timer <= 0) {
                clearInterval(timeInterval)
            }


        }
    }








    setClock('.timer', tugashVaqti)





    // Modal

    const data = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('.modal__close')


    // function showModal(){
    //     modal.classList.toggle('show')
    //     document.body.style.overflow = 'hidden'
    //     clearTimeout(modalTime)
    // }

    // function closeModal(){
    //     modal.classList.toggle('show')
    //     document.body.style.overflow = ''
    // }


    // data.addEventListener('click', showModal)

    // modalCloseBtn.addEventListener('click' ,closeModal)

    // modal.addEventListener('click' , (e) =>{
    //     if(e.target ==  modal){
    //        closeModal()
    //     }

    // })
    // document.addEventListener('keydown' ,(e) => {
    //     if(e.code == 'Escape' && modal.classList.contains('show') ){
    //         closeModal()
    //     }
    // })


    // const modalTime = setTimeout(showModal,5000)



    // function openModal(){
    //     modal.classList.toggle('show')
    //     document.body.style.overflow = 'hidden'
    //     clearTimeout(modalTime)

    // }
    // function closeModal(){
    //     modal.classList.toggle('show')
    //     document.body.style.overflow = ''

    // }

    // data.addEventListener('click', openModal)


    // modalCloseBtn.addEventListener('click' , closeModal)

    // modal.addEventListener('click' , (e) =>{
    // if(e.target == modal){  
    //     closeModal()
    // }
    // })

    // document.addEventListener('keydown' , (e) =>{
    //     if(e.code == 'Escape' && modal.classList.contains('show')){
    //         closeModal()
    //     }
    // })

    // const modalTime = setTimeout(openModal,5000)





    function openModal() {
        modal.classList.toggle('show')
        document.body.style.overflow = 'hiiden'
        clearTimeout(modalTime)
    }
    function closeModal() {
        modal.classList.toggle('show')
        document.body.style.overflow = ''

    }

    data.forEach((item) => {
        item.addEventListener('click', openModal)
    })

    // data.addEventListener('click', openModal)

    modalCloseBtn.addEventListener('click', closeModal)

    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal()
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code == "Escape" && modal.classList.contains('show')) {
            closeModal()
        }
    })

    const modalTime = setTimeout(openModal, 5000)


    // Class 

class Card{
    constructor(src ,alt , title , descr, price , parentSel ){
        this.src = src
        this.alt = alt
        this.title = title
        this.descr = descr 
        this.parend = document.querySelector(parentSel)
        this.price = price
        this.transfer = 12800
        this.transferUzb()
    }

    transferUzb(){
        this.price = this.price * this.transfer
    }

    render(){
        const element = document.createElement('div')

        element.innerHTML = `
        <div class="menu__item">
            <img src="${this.src}" alt="${this.alt}" />
            <h3 class="menu__item-subtitle">${this.title}"</h3>
            <div class="menu__item-descr">
            ${this.descr}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Price:</div>
              <div class="menu__item-total"><span>${this.price}</span> month</div>
            </div>
          </div>
        `


        this.parend.append(element)
        
    }
}

new Card('img/tabs/5.jpg' , 'asd' , 'Abdulloh ibrohimov' , 'lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquid molestiae, sit eveniet, tempora ipsum quaerat ', 15 ,'.menu .container ').render()






















})

