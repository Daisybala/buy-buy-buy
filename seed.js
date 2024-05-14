require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Crossbody Bags', sortOrder: 10},
        {name: 'Shoulder Bags', sortOrder: 20},
        {name: 'Totes & Carryalls', sortOrder: 30},
        {name: 'Backpacks', sortOrder: 40},
        {name: 'Wallets', sortOrder: 50},
        {name: 'Accessories', sortOrder: 60}
    ]);

    await Item.deleteMany({});
    const items = await Item.create([
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr251_svrgj_a0?$desktopProductTile$', name: 'Crossbody Bags',  category: categories[0], price: 1099, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr249_svqrg_a0?$desktopProductTile$', name: 'Crossbody Bags',  category: categories[0], price: 1099, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr250_svrt2_a0?$desktopProductTile$', name: 'Crossbody Bags',  category: categories[0], price: 1299, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr252_imrrp_a0?$desktopProductTile$', name: 'Crossbody Bags',  category: categories[0], price: 1299, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr153_a6?$desktopProductTile$', name: 'Crossbody Bags',  category: categories[0], price: 1499, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cj526_svha_a0?$desktopProductTile$', name: 'Crossbody Bags',  category: categories[0], price: 1499, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr106_svmn0_a8?$desktopProductTile$', name: 'Crossbody Bags',  category: categories[0], price: 999, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/co987_qbcfl_a0?$desktopProductTile$', name: 'Crossbody Bags',  category: categories[0], price: 999, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr175_svnm9_a0?$desktopProductTile$', name: 'Crossbody Bags',  category: categories[0], price: 1399, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr243_imwqj_a3?$desktopProductTile$', name: 'Crossbody Bags',  category: categories[0], price: 1399, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr328_imnam_a0?$desktopProductTile$', name: 'Crossbody Bags',  category: categories[0], price: 899, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr257_imnam_a0?$desktopProductTile$', name: 'Crossbody Bags',  category: categories[0], price: 899, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cc009_qbmi5_a3?$desktopProductTile$', name: 'Crossbody Bags',  category: categories[0], price: 799, brand: 'coach', gender: 'men'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cj510_qbo4g_a0?$desktopProductTile$', name: 'Crossbody Bags',  category: categories[0], price: 799, brand: 'coach', gender: 'men'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cj674_qbo4g_a0?$desktopProductTile$', name: 'Crossbody Bags',  category: categories[0], price: 899, brand: 'coach', gender: 'men'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cp050_a6?$desktopProductTile$', name: 'Crossbody Bags',  category: categories[0], price: 899, brand: 'coach', gender: 'Men'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cp069_svdmh_a0?$desktopProductTile$', name: 'Shoulder Bags', category: categories[1], price: 1400, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/ct257_imwqj_a0?$desktopProductTile$', name: 'Shoulder Bags', category: categories[1], price: 1400, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cp004_imblk_a0?$desktopProductTile$', name: 'Shoulder Bags', category: categories[1], price: 1400, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr149_imaa8_a0?$desktopProductTile$', name: 'Shoulder Bags', category: categories[1], price: 1400, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cs442_imaa8_a0?$desktopProductTile$', name: 'Shoulder Bags', category: categories[1], price: 1400, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr371_imwq1_a0?$desktopProductTile$', name: 'Shoulder Bags', category: categories[1], price: 1400, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cs191_imnam_a0?$desktopProductTile$', name: 'Shoulder Bags', category: categories[1], price: 1400, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/co952_svax7_a0?$desktopProductTile$', name: 'Shoulder Bags', category: categories[1], price: 1400, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cm074_svde_a0?$desktopProductTile$', name: 'Shoulder Bags', category: categories[1], price: 1400, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/co997_imvgb_a0?$desktopProductTile$', name: 'Shoulder Bags', category: categories[1], price: 1400, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/ch857_b4bk_a0?$desktopProductTile$', name: 'Shoulder Bags', category: categories[1], price: 1400, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cu192_wzx_a3?$desktopProductTile$', name: 'Shoulder Bags', category: categories[1], price: 1400, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cn733_imrff_a0?$desktopProductTile$', name: 'Totes & Carryalls',category: categories[2], price: 1200, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/c4250_imrff_a0?$desktopProductTile$', name: 'Totes & Carryalls',category: categories[2], price: 1200, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/ch504_imdqc_a0?$desktopProductTile$', name: 'Totes & Carryalls',category: categories[2], price: 1200, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cn058_svbmc_a0?$desktopProductTile$', name: 'Totes & Carryalls',category: categories[2], price: 1200, brand: 'coach', gender: 'men'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cm865_svbmc_a0?$desktopProductTile$', name: 'Totes & Carryalls',category: categories[2], price: 1200, brand: 'coach', gender: 'men'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr325_svo1u_a3?$desktopProductTile$', name: 'Totes & Carryalls',category: categories[2], price: 1200, brand: 'coach', gender: 'men'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr100_svha_a0?$desktopProductTile$', name: 'Backpacks', category: categories[3], price: 1800, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cl408_svdtv_a0?$desktopProductTile$', name: 'Backpacks', category: categories[3], price: 1800, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr768_svwqo_a0?$desktopProductTile$', name: 'Backpacks', category: categories[3], price: 1800, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/3001_qboh0_a0?$desktopProductTile$', name: 'Backpacks', category: categories[3], price: 1800, brand: 'coach', gender: 'men'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cm697_svbk_a8?$desktopProductTile$', name: 'Backpacks', category: categories[3], price: 1800, brand: 'coach', gender: 'men'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/ct016_qbv1r_a0?$desktopProductTile$', name: 'Backpacks', category: categories[3], price: 1800, brand: 'coach', gender: 'men'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cp255_imaa8_a0?$desktopProductTile$', name: 'Wallets', category: categories[4], price: 350, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cm761_sigha_a0?$desktopProductTile$', name: 'Wallets', category: categories[4], price: 350, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/ct616_imwq4_a0?$desktopProductTile$', name: 'Wallets', category: categories[4], price: 350, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr905_cqbk_a0?$desktopProductTile$', name: 'Wallets', category: categories[4], price: 350, brand: 'coach', gender: 'men'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr958_wtc_a0?$desktopProductTile$', name: 'Wallets', category: categories[4], price: 350, brand: 'coach', gender: 'men'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/ch086_qbmi5_a0?$desktopProductTile$', name: 'Wallets', category: categories[4], price: 350, brand: 'coach', gender: 'men'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr913_imblk_a0?$desktopProductTile$', name: 'Accessories', category: categories[5], price: 450, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr443_imbdx_a0?$desktopProductTile$', name: 'Accessories', category: categories[5], price: 450, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/c1725_imf8q_a0?$desktopProductTile$', name: 'Accessories', category: categories[5], price: 450, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cr436_imbdx_a0?$desktopProductTile$', name: 'Accessories', category: categories[5], price: 450, brand: 'coach', gender: 'women'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cq027_aq0_a0?$desktopProductTile$', name: 'Accessories', category: categories[5], price: 450, brand: 'coach', gender: 'men'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/cq009_qblvw_a0?$desktopProductTile$', name: 'Accessories', category: categories[5], price: 450, brand: 'coach', gender: 'men'},
        {imageUrl: 'https://coach.scene7.com/is/image/Coach/c7581_txu_a0?$desktopProductTile$', name: 'Accessories', category: categories[5], price: 450, brand: 'coach', gender: 'men'},
    ]);

    console.log(items)

    process.exit();

})();
