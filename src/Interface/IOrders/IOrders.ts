import IProducts from "../IProducts/IProducts";

interface IOrders{
    id: number;
    status:string;
    date:Date;
    products:IProducts[];
}

export default IOrders;
//