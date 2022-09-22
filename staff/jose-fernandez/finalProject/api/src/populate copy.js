const { connect, disconnect } = require('mongoose')
const { Address, Cart, Item, Order, Product, User } = require('./models')
// 
connect('mongodb://localhost:27017/finalProject')
    // 
    .then(() => Promise.all([Address.deleteMany(), Cart.deleteMany(), Item.deleteMany(), Order.deleteMany(), Product.deleteMany(), User.deleteMany()]))
    .then(() => {
        //firts
        const product1 = new Product({
            name:'Nike Air Max 90',
            sku: 'nkh1144',
            price: 150,
            discount: 0,
            stock: 114,
            img:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/b5eba256-ef26-45d1-852f-c1992be17a3e/air-max-90-zapatillas-PTBWZ5.png',
            type:'shoes',
            categ:'men',
            gallery:[
                {
                    img:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/b5eba256-ef26-45d1-852f-c1992be17a3e/air-max-90-zapatillas-PTBWZ5.png'
                },
                {
                  img:
                    'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
                }
              ]
        })
        const product2 = new Product({
            name:'Nike Air Max 270',
            sku: 'nkh1244',
            price: 140,
            discount: 0,
            stock: 114,
            img:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1eeaacc0-e07c-4024-a5f7-57f2fd23e8a2/air-max-270-g-zapatillas-de-golf-3GkJ0N.png',
            type:'shoes',
            categ:'men',
            gallery:[
                {
                    img:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1eeaacc0-e07c-4024-a5f7-57f2fd23e8a2/air-max-270-g-zapatillas-de-golf-3GkJ0N.png'
                },
                {
                  img:
                    'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
                },
                {
                  img:
                    'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
                }
              ]
        })
        const product3 = new Product({
            name:'Nike Air Jordan',
            sku: 'nkh1344',
            price: 190,
            discount: 0,
            stock: 114,
            img:'https://static.nike.com/a/videos/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,so_1.55/adc356bd-8925-41e5-a297-e3b8f1db0973/air-jordan-1-mid-zapatillas-D8Q2S1.jpg',
            type:'shoes',
            categ:'men',
            gallery: [
                {
                    img:'https://static.nike.com/a/videos/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,so_1.55/adc356bd-8925-41e5-a297-e3b8f1db0973/air-jordan-1-mid-zapatillas-D8Q2S1.jpg'
                },
                {
                  img:
                    'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
                }
              ]
        })
        const product4 = new Product({
            name:'Nike Tech Fleece',
            sku: 'nkh1444',
            price: 180,
            discount: 0,
            stock: 114,
            img:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8bd58820-be5a-4d0b-898c-e7b63c146226/paris-saint-germain-tech-fleece-jogger-wflZmc.png',
            type:'clothing',
            categ:'men',
            gallery:[
                {
                    img:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8bd58820-be5a-4d0b-898c-e7b63c146226/paris-saint-germain-tech-fleece-jogger-wflZmc.png'
                },
                {
                  img:
                    'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0731274fc704707ae1dad550034a3ae_9366/Sudadera_con_capucha_Skateboarding_4.0_Logo_(Genero_neutro)_Negro_GR8739_23_hover_model.jpg'
                }
              ]
        })
        const product5 = new Product({
            name:'Nike Off Court',
            sku: 'nkh1110',
            price: 110,
            discount: 0,
            stock: 180,
            img:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/h5jqhhyekxesgqfxwgpj/offcourt-mens-slides-Xkb8kb.png',
            type:'shoes',
            categ:'men',
            gallery:[
                {
                    img:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/h5jqhhyekxesgqfxwgpj/offcourt-mens-slides-Xkb8kb.png'
                }
              ]

        })
        const product6 = new Product({
            name:'Nike Air Force 1',
            sku: 'nkh11f1',
            price: 110,
            discount: 0,
            stock: 390,
            img:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-mens-shoes-xDpsTk.png',
            type:'shoes',
            categ:'men',
            gallery:[
                {
                  img:
                    'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3712badf561e4fc98410ad55003a9767_9366/Sudadera_con_capucha_Skateboarding_4.0_Logo_(Genero_neutro)_Negro_GR8739_21_model.jpg'
                },
                {
                  img:
                    'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0731274fc704707ae1dad550034a3ae_9366/Sudadera_con_capucha_Skateboarding_4.0_Logo_(Genero_neutro)_Negro_GR8739_23_hover_model.jpg'
                }
              ]
        })
        const product7 = new Product({
            name:'Nike Phoenix Fleece',
            sku: 'nkh15p3',
            price: 80,
            discount: 0,
            stock: 230,
            img:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d811ae57-d99e-4713-84aa-850b532041bb/sportswear-phoenix-fleece-womens-high-waisted-joggers-ftkzwQ.png',
            type:'clothing',
            categ:'women',
            gallery:[
                {
                    img:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d811ae57-d99e-4713-84aa-850b532041bb/sportswear-phoenix-fleece-womens-high-waisted-joggers-ftkzwQ.png'
                },
                {
                  img:
                    'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0731274fc704707ae1dad550034a3ae_9366/Sudadera_con_capucha_Skateboarding_4.0_Logo_(Genero_neutro)_Negro_GR8739_23_hover_model.jpg'
                }
              ]
        })
        const product8 = new Product({
            name:'FC Barcelona Collection Essentials',
            sku: 'nkh15p8',
            price: 44.99,
            discount: 0,
            stock: 230,
            img:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/225efc6f-24a5-4724-b503-88e20aba6dbe/fc-barcelona-collection-essentials-camiseta-de-manga-corta-oversize-Sm8Xcr.png',
            type:'clothing',
            categ:'women',
            gallery:[
                {
                    img:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/225efc6f-24a5-4724-b503-88e20aba6dbe/fc-barcelona-collection-essentials-camiseta-de-manga-corta-oversize-Sm8Xcr.png'
                },
                {
                  img:
                    'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0731274fc704707ae1dad550034a3ae_9366/Sudadera_con_capucha_Skateboarding_4.0_Logo_(Genero_neutro)_Negro_GR8739_23_hover_model.jpg'
                }
              ]
        })
        const product9 = new Product({
            name:'Nike Sportswear',
            sku: 'nkh15k3',
            price: 40,
            discount: 0,
            stock: 160,
            img:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e01eb1ed-8f4c-45ef-9745-4e48c847a4a1/sportswear-pantalon-corto-XGQk60.png',
            type:'clothing',
            categ:'kids',
            gallery:[
                {
                    img:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e01eb1ed-8f4c-45ef-9745-4e48c847a4a1/sportswear-pantalon-corto-XGQk60.png'
                },
                {
                  img:
                    'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0731274fc704707ae1dad550034a3ae_9366/Sudadera_con_capucha_Skateboarding_4.0_Logo_(Genero_neutro)_Negro_GR8739_23_hover_model.jpg'
                }
              ]
        })
        const product10 = new Product({
            name:'Kylian Mbappe',
            sku: 'nkh15y3',
            price: 27.95,
            discount: 0,
            stock: 160,
            img:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/87b471b3-1357-4cb6-b81e-43c318e20e47/kylian-mbappe-older-dri-fit-football-shorts-N8XSnK.png',
            type:'clothing',
            categ:'kids',
            gallery:[
                {
                    img:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/87b471b3-1357-4cb6-b81e-43c318e20e47/kylian-mbappe-older-dri-fit-football-shorts-N8XSnK.png'
                },
                {
                  img:
                    'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0731274fc704707ae1dad550034a3ae_9366/Sudadera_con_capucha_Skateboarding_4.0_Logo_(Genero_neutro)_Negro_GR8739_23_hover_model.jpg'
                }
              ]
        })
        return Promise.all([
            product1.save(),
            product2.save(),
            product3.save(),
            product4.save(),
            product5.save(),
            product6.save(),
            product7.save(),
            product8.save(),
            product9.save(),
            product10.save()
        ])
    })
    .then(([product1, product2, product3, product4]) => {
        //primero crear producto
        //embebido se declara antes de save()
        const item1 = new Item({
            product: product1.id,
            price: 300,
            qty: 2
        })
        const item2 = new Item({
            product: product2.id,
            price: 140,
            qty: 1
        })
        const item3 = new Item({
            product: product3.id,
            price: 570,
            qty: 3
        })
        const item4 = new Item({
            product: product4.id,
            price: 180,
            qty: 1
        })

        // primero crear item
        const cart1 = new Cart({
            items: [item1, item2, item3]
        })
        const cart2 = new Cart({
            items: [item2, item3]
        })
        const cart3 = new Cart({
            items: [item4]
        })
        const cart4 = new Cart({
            items: [item3]
        })

        // primero crear carrito
        const pepito = new User({
            // role:'anonymous'
            cart: cart1
        })

        const wendy = new User({
            name: 'Wendy Darling',
            email: 'wendy@darling.com',
            password: '123123123',
            role: 'client',
            cart: cart2

        })
        const peter = new User({
            name: 'Peter Pan',
            email: 'peter@pan.com',
            password: '123123123',
            role: 'client',
            cart: cart3
        })
        const james = new User({
            // role:'anonymous'
            cart: cart4
        })

        return Promise.all([
            pepito.save(),
            wendy.save(),
            peter.save(),
            james.save()
        ])
            .then(() => {
                //primero registro de usuario
                const addressPepito = new Address({
                    fullname: 'Pepito PC',
                    address: 'villarroel 180',
                    passport: '124886290'
                })
                const addressWendy = new Address({
                    fullname: 'Wendy PC',
                    address: 'villarroel 180',
                    passport: '126526240'
                })
                const addressPeter = new Address({
                    fullname: 'Peter PC',
                    address: 'villarroel 180',
                    passport: '127963240'
                })
                const addressJames = new Address({
                    fullname: 'James PC',
                    address: 'villarroel 180',
                    passport: '119037470'
                })

                //duda en cart, redunda con user,(user ya contiene cart)
                const order1 = new Order({
                    user: pepito.id,
                    cart: cart1,
                    date: new Date,
                    paymentAddress: addressPepito,
                    shippingAddress: addressPepito,
                    paymentMethod: 'creditCard'
                })

                const order2 = new Order({
                    user: wendy.id,
                    cart: cart2,
                    date: new Date,
                    paymentAddress: addressWendy,
                    shippingAddress: addressWendy,
                    paymentMethod: 'paypal'
                })

                const order3 = new Order({
                    user: peter.id,
                    cart: cart3,
                    date: new Date,
                    paymentAddress: addressPeter,
                    shippingAddress: addressPeter,
                    paymentMethod: 'paypal'
                })
                const order4 = new Order({
                    user: james.id,
                    cart: cart4,
                    date: new Date,
                    paymentAddress: addressJames,
                    shippingAddress: addressJames,
                    paymentMethod: 'creditCard'
                })
                return Promise.all([
                    order1.save(),
                    order2.save(),
                    order3.save(),
                    order4.save()
                ])
            })
    })
    .then(() => disconnect())
    .catch (console.error)