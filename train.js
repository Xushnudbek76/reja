class Dokon {
    constructor(non, lagmon, cola) {
        this.cola = cola;
        this.lagmon = lagmon;
        this.non = non;
    };
    time() {
        const vaqt = new Date();
        const soat = vaqt.getHours().toString();
        const daqiqa = vaqt.getMinutes().toString();
        return `${soat}:${daqiqa}`;
    }

    qoldiq () {
        console.log(`${this.time()}da ${this.cola}ta cola ${this.lagmon}ta lagmon va ${this.non}ta non bor`);
    }

    sotish(mahsulot, soni) {
        if (this[mahsulot] >= soni) {
            this[mahsulot] -= soni;
            console.log(`${soni} ta ${mahsulot} sotildi`)
        } else {
         console.log(`${this[mahsulot]} yetarli emas`);            
        }
    }
    qabul(mahsulot, soni) {
        this[mahsulot] += soni;
        console.log(`${soni}ta ${mahsulot} qo'shildi`)
    }
};

const newDokon = new Dokon(4, 10, 7);
newDokon.qoldiq();
newDokon.sotish('cola', 2);
newDokon.qabul('non', 3);