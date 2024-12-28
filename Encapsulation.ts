class Item {

    private itemName!: string;
    private itemPrice!: number;

    constructor (name: string, price: number){
        this.setItemName(name);
        this.setItemPrice(price);
    }

    public getItemName(): string{
        return this.itemName;
    }

    public getItemPrice(): number{
        return this.itemPrice;
    }

    public setItemName(name: string){
        this.itemName = name;
    }
    public setItemPrice(price: number){
        if(price <= 0){
        throw new Error("Price must be greater than 0");
        }else{
        this.itemPrice = price;
        }
    }

}

let item1 = new Item("Pen", 1);

item1.setItemPrice(2);