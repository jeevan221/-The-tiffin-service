const foodItem= [
    {
    id: 1,
    name: 'normal thali',
    category : 'biryani',
    rating : 4.3,
    price: 0.0,
    img: 'https://cdn.shpy.in/28945/1656000225783_SKU-0108_0.JPG?',
    quantity: 1
},
{
    id: 2,
    name: 'chicken Thali',
    category : 'biryani',
    rating : 4.3,
    price: 15,
    img: 'https://img.freepik.com/premium-photo/chicken-thali-from-indian-cuisine-food-platter-consists-variety-veggieschicken-meat-lentilsrice-sweet-dish-snacks-etc-selective-focus_726363-581.jpg?w=2000',
    quantity: 1
},
{
    id: 3,
    name: 'Egg Thali',
    category : 'biryani',
    rating : 4.3,
    price: 18,
    img: 'https://indianspoon.in/wp-content/uploads/2022/07/Egg-Plain-Thali.jpg',
    quantity: 1
},
{
    id: 4,
    name: 'Paneer Thali',
    category : 'biryani',
    rating : 4.3,
    price: 15,
    img: 'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ocka96um39qcuxycbxeh',
    quantity: 1
},
{
    id: 5,
    name: 'Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 10,
    img: 'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/hna76wivgs286gad71zp',
    quantity: 1
},

{
    id: 10,
    name: 'Boiled Chicken',
    category : 'chicken',
    rating : 4.3,
    price: 11,
    img: 'https://www.spendwithpennies.com/wp-content/uploads/2018/02/How-to-Poach-Chicken-Breasts-24.jpg',
    quantity: 1
},
{
    id: 11,
    name: 'Eggs',
    category : 'chicken',
    rating : 4.3,
    price: 10,
    img: 'https://modernmealmakeover.com/wp-content/uploads/2021/02/Hard-Boil-Eggs-3-2.jpg',
    quantity: 1
},
{
    id: 12,
    name: 'Milk 100ml',
    category : 'chicken',
    rating : 4.3,
    price: 14,
    img: 'https://downshiftology.com/wp-content/uploads/2022/10/Almond-Milk-Recipe-22-8-500x500.jpg',
    quantity: 1
},
{
    id: 13,
    name: 'bolied Chana',
    category : 'chicken',
    rating : 4.3,
    price: 12,
    img: 'https://yourfoodfantasy.com/wp-content/webpc-passthru.php?src=https://yourfoodfantasy.com/wp-content/uploads/2017/12/Black-Chana-Chaat-Black-Chickpea-Chaat-YourFoodFantasy.com_.jpg&nocache=1',
    quantity: 1
},
{
    id: 14,
    name: 'Soya Chunks',
    category : 'chicken',
    rating : 4.3,
    price: 17,
    img: 'https://images.hindustantimes.com/img/2022/10/27/550x309/soy_chunks_1666857765395_1666857771310_1666857771310.jpg',
    quantity: 1
},

{
    id: 16,
    name: 'Butter',
    category : 'paneer',
    rating : 4.3,
    price: 15,
    img: 'https://5.imimg.com/data5/VV/FA/MY-11689740/amul-500x500.jpg',
    quantity: 1

},
{
    id: 17,
    name: 'Lassi',
    category : 'paneer',
    rating : 4.3,
    price: 10,
    img: 'https://cdn.tarladalal.com/members/9306/procstepimgs/cardamom-lassi_dsc_7556-4-194922.jpg',
    quantity: 1
},
{
    id: 18,
    name: 'Dahi',
    category : 'paneer',
    rating : 4.3,
    price: 15,
    img: 'https://blog-live.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2022/08/08151441/curd1.webp',
    quantity: 1

},
{
    id: 19,
    name: 'Elichi Dudh',
    category : 'paneer',
    rating : 4.3,
    price: 12,
    img: 'https://mealplannerpro.com/images/recipes/4/742598.jpg',
    quantity: 1

},
{
    id: 20,
    name: 'Pede',
    category : 'paneer',
    rating : 4.3,
    price: 8,
    img: 'https://img-global.cpcdn.com/recipes/5e830a6270af71b7/680x482cq70/%E0%A4%AE%E0%A4%B2%E0%A4%95-%E0%A4%AA%E0%A4%89%E0%A4%A1%E0%A4%B0-%E0%A4%AA%E0%A4%A1milk-powder-pede-recipe-in-hindi-%E0%A4%B0%E0%A4%B8%E0%A4%AA-%E0%A4%AE%E0%A4%96%E0%A4%AF-%E0%A4%A4%E0%A4%B8%E0%A4%B5%E0%A4%B0.jpg',
    quantity: 1
},

{
    id: 23,
    name: 'chai',
    category : 'vegetable',
    rating : 4.3,
    price: 8,
    img: 'https://images.news18.com/ibnlive/uploads/2022/10/shutterstock_1706805625.jpg',
    quantity: 1
},
{
    id: 24,
    name: 'Cold drinks',
    category : 'vegetable',
    rating : 4.3,
    price: 7,
    img: 'https://5.imimg.com/data5/ANDROID/Default/2021/6/TW/ML/BC/120587729/product-jpeg-500x500.jpg',
    quantity: 1
},

// {
//     id: 25,
//     name: 'Veg Biryani',
//     category : 'vegetable',
//     rating : 4.3,
//     price: 5,
//     img: 'images/vegetable/vegetable-biryani.jpg',
//     quantity: 1
// },
// {
//     id: 26,
//     name: 'Veg Curry',
//     category : 'vegetable',
//     rating : 4.3,
//     price: 7,
//     img: 'images/vegetable/vegetable-curry.jpeg',
//     quantity: 1
// },
// {
//     id: 27,
//     name: 'Veg Kolhapur',
//     category : 'vegetable',
//     rating : 4.3,
//     price: 10,
//     img: 'images/vegetable/vegetable-kolhapuri.jpg',
//     quantity: 1
// },
// {
//     id: 28,
//     name: 'Veg Masala',
//     category : 'vegetable',
//     rating : 4.3,
//     price: 4,
//     img: 'images/vegetable/vegetable-masala.jpg',
//     quantity: 1
// },
// {
//     id: 29,
//     name: 'Veg Pakora',
//     category : 'vegetable',
//     rating : 4.3,
//     price: 4,
//     img: 'images/vegetable/vegetable-pakora.jpg',
//     quantity: 1
// },
// {
//     id: 30,
//     name: 'Momos',
//     category : 'chinese',
//     rating : 4.3,
//     price: 8,
//     img: 'images/chinese/cabbage-momos-.jpg',
//     quantity: 1
// },
// {
//     id: 31,
//     name: 'Chicken Manchurian',
//     category : 'chinese',
//     rating : 4.3,
//     price: 7,
//     img: 'images/chinese/ChickenManchurian.jpg',
//     quantity: 1
// },
// {
//     id: 32,
//     name: 'Chili Chicken',
//     category : 'chinese',
//     rating : 4.3,
//     price: 5,
//     img: 'images/chinese/Chili-Chicken.jpg',
//     quantity: 1
// },
// {
//     id: 33,
//     name: 'Chowmein',
//     category : 'chinese',
//     rating : 4.3,
//     price: 16,
//     img: 'images/chinese/chowmin.jpg',
//     quantity: 1
// },
// {
//     id: 34,
//     name: 'Spring Roll',
//     category : 'chinese',
//     rating : 4.3,
//     price: 14,
//     img: 'images/chinese/spring-rolls.jpg',
//     quantity: 1
// },
// {
//     id: 35,
//     name: 'Szechuan Chicken',
//     category : 'chinese',
//     rating : 4.3,
//     price: 10,
//     img: 'images/chinese/szechuan-chicken.jpg',
//     quantity: 1
// },
// {
//     id: 36,
//     name: 'Fried Rice',
//     category : 'chinese',
//     rating : 4.3,
//     price: 8,
//     img: 'images/chinese/veg-fried-rice.jpg',
//     quantity: 1
// },
// {
//     id: 37,
//     name: 'Butter Masala Dosa',
//     category : 'south indian',
//     rating : 4.3,
//     price: 18,
//     img: 'images/south indian/Butter-Masala-Dosa.png',
//     quantity: 1
// },
// {
//     id: 38,
//     name: 'Idli',
//     category : 'south indian',
//     rating : 4.3,
//     price: 20,
//     img: 'images/south indian/idli-with-rice-flour.jpg',
//     quantity: 1
// },
// {
//     id: 39,
//     name: 'Masala Dosa',
//     category : 'south indian',
//     rating : 4.3,
//     price: 12,
//     img: 'images/south indian/masala-dosa.jpg',
//     quantity: 1
// },
// {
//     id: 40,
//     name: 'Mysore Bonda',
//     category : 'south indian',
//     rating : 4.3,
//     price: 10,
//     img: 'images/south indian/mysore-bonda.jpg',
//     quantity: 1
// },
// {
//     id: 41,
//     name: 'Onion Uttapam',
//     category : 'south indian',
//     rating : 4.3,
//     price: 15,
//     img: 'images/south indian/onion-uttapam.jpg',
//     quantity: 1
// },
// {
//     id: 42,
//     name: 'Plain Dosa',
//     category : 'south indian',
//     rating : 4.3,
//     price: 40,
//     img: 'images/south indian/plain-dosa.jpeg',
//     quantity: 1
// },
// {
//     id: 43,
//     name: 'Rava Uttapam',
//     category : 'south indian',
//     rating : 4.3,
//     price: 25,
//     img: 'images/south indian/Rava-Uttapam.jpg',
//     quantity: 1
// },
// {
//     id: 44,
//     name: 'Sambhar Vada',
//     category : 'south indian',
//     rating : 4.3,
//     price: 34,
//     img: 'images/south indian/sambhar-vada.jpg',
//     quantity: 1
// },
 ]

export {foodItem};