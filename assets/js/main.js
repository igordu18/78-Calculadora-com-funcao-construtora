function Calculadora() {
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.capturaCliques()
        this.capturaEnter()
    }

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if(e.keyCode === 13) this.filtraDisplay()
        })
    }  
    
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target
            if(el.classList.contains('btn-num')) this.addNumDisplay(el)
            if(el.classList.contains('btn-clear')) this.clear()
            if(el.classList.contains('btn-del')) this.del()
            if(el.classList.contains('btn-eq')) this.filtraDisplay()
        })
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText
        this.display.focus()
    }

    this.clear = () => this.display.value = ''

    this.del = () => this.display.value = this.display.value.slice(0, -1)

    this.filtraDisplay = () => {
        let display = this.display.value
        let arrDisplay = display.split("")
        const arrCheck = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*',  '**',  '%', '.']
        for(let control of arrDisplay) {
            for(let check of arrCheck) {
                if(control == check) return this.realizaConta(display)
            }
        }
    }

    this.realizaConta = (display) => {
        try {
            const conta = eval(display) // EVAL com filtro.
            if(!conta) {
                alert('Conta inválida')
                return
            }
            this.display.value = conta
        } catch(e) {
            alert('Conta inválida')
            return
        }
    }
}

const calculadora = new Calculadora()
calculadora.inicia()