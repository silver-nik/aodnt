export class Poster {
    constructor(wrapper, coverClass) {
        this.wrapper = wrapper;
        this.coverClass = coverClass;
        this.closeBtn = this.wrapper.querySelector('.poster__close')
        this.openBtn = this.wrapper.querySelector('.poster__toggler');
    }
    
    toggleFreeTime() {

        [this.closeBtn, this.openBtn].forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
    
                this.wrapper.classList.toggle('active')
                this.wrapper.querySelector(this.coverClass).classList.toggle('active')
            })
        })

    }

    init() {
        this.toggleFreeTime();
    }

}