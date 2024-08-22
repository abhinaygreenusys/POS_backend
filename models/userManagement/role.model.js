import mongoose, { Schema } from "mongoose";

const roleSchema=new Schema({
    roleName:{
        type:String,
    },
    viewExportButtons:{
        type:Boolean,
        default:false
    },
    viewUser:{
        type:Boolean,
        default:false
    },
    addUser:{
        type:Boolean,
        default:false
    },
    editUser:{
        type:Boolean,
        default:false
    },
    deleteUser:{
        type:Boolean,
        default:false
    },
    viewRole:{
        type:Boolean,
        default:false
    },
    addRole:{
        type:Boolean,
        default:false
    },
    editRole:{
        type:Boolean,
        default:false
    },
    deleteRole:{
        type:Boolean,
        default:false
    },
    viewAllSupplier:{
        type:Boolean,
        default:false
    },
    viewOwnSupplier:{
        type:Boolean,
        default:false
    },
    addSupplier:{
        type:Boolean,
        default:false
    },
    editSupplier:{
        type:Boolean,
        default:false
    },
    deleteSupplier:{
        type:Boolean,
        default:false
    },
    viewAllCustomer:{
        type:Boolean,
        default:false
    },
    viewOwnCustomer:{
        type:Boolean,
        default:false
    },
    viewCustomersWithNoSellFromOneMonthOnly:{
        type:Boolean,
        default:false
    },
    viewCustomersWithNoSellFromThreeMonthsOnly:{
        type:Boolean,
        default:false
    },
    viewCustomersWithNoSellFromSixMonthsOnly:{
        type:Boolean,
        default:false
    },
    viewCustomersWithNoSellFromOneYearOnly:{
        type:Boolean,
        default:false
    },
    viewCustomersIrrespectiveOfTheirSell:{
        type:Boolean,
        default:false
    },
    addCustomer:{
        type:Boolean,
        default:false
    },
    editCustomer:{
        type:Boolean,
        default:false
    },
    deleteCustomer:{
        type:Boolean,
        default:false
    },
    viewProduct:{
        type:Boolean,
        default:false
    },
    addProduct:{
        type:Boolean,
        default:false
    },
    editProduct:{
        type:Boolean,
        default:false
    },
    deleteProduct:{
        type:Boolean,
        default:false
    },
    addOpeningStock:{
        type:Boolean,
        default:false
    },
    viewPurchasePrice:{
        type:Boolean,
        default:false
    },
    viewallPurchaseAndStockAdjustment:{
        type:Boolean,
        default:false
    },
    viewOwnPurchaseAndStockAdjustment:{
        type:Boolean,
        default:false
    },
    AddPurchaseAndStockAdjustment:{
        type:Boolean,
        default:false
    }
})

const Role=mongoose.model("Role",roleSchema)
export default Role;