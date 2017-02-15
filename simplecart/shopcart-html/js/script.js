
/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ============ SCRIPT =======================================
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */

var products = {
    product: [
        {
            "ID": "prd01",
            "name": "Product 01",
            "shortDescription": "Short Description 01",
            "detail": "<p>Detail about product detail about product detail about product detail about product </p><p>Detail about product detail about product detail about product</p>",
            "thumnail": "resources/images/Products/Aodai-Vietnam-01.png",
            "price": "20.49"
        },
        {
            "ID": "prd02",
            "name": "Product 02",
            "shortDescription": "Short Description 02",
            "detail": "<p>Detail about product detail about product detail about product detail about product </p><p>Detail about product detail about product detail about product</p>",
            "thumnail": "resources/images/Products/Aodai-Vietnam-02.png",
            "price": "22.49"
        },
        {
            "ID": "prd03",
            "name": "Product 03",
            "shortDescription": "Short Description 03",
            "detail": "<p>Detail about product detail about product detail about product detail about product </p><p>Detail about product detail about product detail about product</p>",
            "thumnail": "resources/images/Products/Aodai-Vietnam-03.png",
            "price": "45.49"
        },
        {
            "ID": "prd04",
            "name": "Product 04",
            "shortDescription": "Short Description 04",
            "detail": "<p>Detail about product detail about product detail about product detail about product </p><p>Detail about product detail about product detail about product</p>",
            "thumnail": "resources/images/Products/Aodai-Vietnam-04.png",
            "price": "30.49"
        },
        {
            "ID": "prd05",
            "name": "Product 05",
            "shortDescription": "Short Description 05",
            "detail": "<p>Detail about product detail about product detail about product detail about product </p><p>Detail about product detail about product detail about product</p>",
            "thumnail": "resources/images/Products/Aodai-Vietnam-05.png",
            "price": "9.49"
        },
        {
            "ID": "prd06",
            "name": "Product 06",
            "shortDescription": "Short Description 06",
            "detail": "<p>Detail about product detail about product detail about product detail about product </p><p>Detail about product detail about product detail about product</p>",
            "thumnail": "resources/images/Products/Aodai-Vietnam-06.png",
            "price": "15.49"
        },
        {
            "ID": "prd07",
            "name": "Product 07",
            "shortDescription": "Short Description 07",
            "detail": "<p>Detail about product detail about product detail about product detail about product </p><p>Detail about product detail about product detail about product</p>",
            "thumnail": "resources/images/Products/Aodai-Vietnam-07.png",
            "price": "22.49"
        },
        {
            "ID": "prd08",
            "name": "Product 08",
            "shortDescription": "Short Description 08",
            "detail": "<p>Detail about product detail about product detail about product detail about product </p><p>Detail about product detail about product detail about product</p>",
            "thumnail": "resources/images/Products/Aodai-Vietnam-08.png",
            "price": "80.49"
        },
    ]
};
var productCart = {
    product: []
};

var productsStorage = 'productsStorage';
var productsCartStorage = 'productsCartStorage';




// Create list product and cart ==========================================================================================
function showListProduct(productsData) {
    var $listProduct = $('#listProduct');
    $listProduct.empty();
    var products = productsData.product;

    if (products.length !== 0) {
        for (var i = 0; i < products.length; i++) {
            var product = products[i];
            var ID = product['ID'];
            var name = product['name'];
            var shortDescription = product['shortDescription'];
            var thumnail = product['thumnail'];
            var price = product['price'];

            var $itemProduct = '<li data-product-id="' + ID + '">' +
                                                    '<div>' +
                                                         '<div data-prop="thumnail"><img src="' + thumnail + '" /><div data-prop="price">$ ' + price + '</div></div>' +
                                                         '<div data-prop="name">' + name + '</div>' +
                                                         '<div data-prop="short-description">' + shortDescription + '</div>' +
                                                         '<a href="product-detail.html?prd=' + ID + '" data-prop="link-detail">View Detail</a>' +
                                                     '</div>' +
                                                 '</li>';
            $listProduct.append($itemProduct);
        }
    } else {
        $itemProduct = '<li>There are no product</li>';
        $listProduct.append($itemProduct);
    }
}

function showDetailProduct(id, productsData) {
    var $productDetail = $('#productDetail');
    $productDetail.empty();

    var products = productsData.product;

    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var ID = product['ID'];
        if ((id.toLowerCase() === ID.toLowerCase())) {
            var name = product['name'];
            var shortDescription = product['shortDescription'];
            var detail = product['detail'];
            var thumnail = product['thumnail'];
            var price = product['price'];

            var $productDetailContent = '<div class="thumnail-price">' +
                                                                    '<div class="thumnail"><img src="' + thumnail + '" /></div>' +
                                                                    '<div class="price mgT20 text-right">$ ' + price + '</div>' +
                                                                '</div>' +
                                                                '<div class="name-detail-addcart">' +
                                                                    '<div class="name-detail">' +
                                                                        '<h1 class="heading1 L name">' + name + '</h1>' +
                                                                        '<div class="detail mgT50">' + detail + '</div>' +
                                                                    '</div>' +
                                                                    '<div class="mgT20">' +
                                                                        '<label class="inlineb w150px fz22">Quantity:</label><input name="quantity" type="number" value="1" step="1" min="1" class="input-field-1">' +
                                                                    '</div>' +
                                                                    '<div class="mgT20">' +
                                                                        '<a data-product-id="' + ID + '" class="addcart button-cart w200px mgR10">Add Cart</a>' +
                                                                        '<a href="product.html" class="button-cart red w200px">View more...</a>' +
                                                                    '</div>' +
                                                                '</div>';
            $productDetail.append($productDetailContent);

            break;
        }
    }
}

function getProductCartDetail(productCart, products) {
    var results = {
        product: []
    };

    var prdsCart = productCart.product;
    var prds = products.product;

    if (prdsCart.length != 0) {
        for (var i = 0; i < prdsCart.length; i++) {
            var prdCart = prdsCart[i];
            var IDCart = prdCart['ID'];
            for (var j = 0; j < prds.length; j++) {
                var prd = prds[j];
                var IDprd = prd['ID'];
                if ((IDCart.toLowerCase() === IDprd.toLowerCase())) {
                    prd.Quantity = prdCart['Quantity'];
                    results.product.push(prd);
                }
            }
        }
    }
    return results;
}
function showListProductCart(productsData) {
    var $listProductCartTableContent = $('#tableProductCart > .content');
    $listProductCartTableContent.empty();

    var products = productsData.product;

    if (products.length !== 0) {
        for (var i = 0; i < products.length; i++) {
            var product = products[i];
            var ID = product['ID'];
            var name = product['name'];
            var shortDescription = product['shortDescription'];
            var thumnail = product['thumnail'];
            var price = product['price'];
            var quantity = product['Quantity'];
            var $itemProductCartRow = '<div class="row" data-row-id="' + ID + '">' +
                                                                    '<span data-col-name="respondsive"></span>' +
                                                                    '<span data-col-name="mark"><a class="checked-field-1"><input type="checkbox" name="ckMark" /><i></i></a></span>' +
                                                                    '<span data-col-name="thumnail" class="text-center"><img class="w25px" src="' + thumnail + '" /></span>' +
                                                                    '<span data-col-name="name">' + name + '</span>' +
                                                                    '<span data-col-name="short-description">' + shortDescription + '</span>' +
                                                                    '<span data-col-name="price">' + price + '</span>' +
                                                                    '<span data-col-name="quantity"><input type="number" step="1" min="1" class="input-field-1"  value="' + quantity + '" data-row-id="' + ID + '" data-unitprice="' + price + '"/></span>' +
                                                                    '<span data-col-name="total-price">' + (quantity * price).toFixed(2) + '</span>' +
                                                                    '<span data-col-name="action"><i class="cart-remove"></i></span>' +
                                                                '</div>' +
                                                                '<section class="row-respondsive" data-row-id="' + ID + '">' +
                                                                    '<label class="link-expanded link-expanded-1"></label>' +
                                                                    '<div class="content-expanded content-expanded-1">' +
                                                                        '<div class="table-detail-1">' +
                                                                            '<div class="row" data-excol-name="thumnail">' +
                                                                                '<label>Image: </label>' +
                                                                                '<span><img class="w45px" src="' + thumnail + '" /></span>' +
                                                                            '</div>' +
                                                                            '<div class="row" data-excol-name="name">' +
                                                                                '<label>Product: </label>' +
                                                                                '<span>' + name + '</span>' +
                                                                            '</div>' +
                                                                            '<div class="row" data-excol-name="short-description">' +
                                                                                '<label>Description: </label>' +
                                                                                '<span>' + shortDescription + '</span>' +
                                                                            '</div>' +
                                                                            '<div class="row" data-excol-name="price">' +
                                                                                '<label>Price: </label>' +
                                                                                '<span>' + price + '</span>' +
                                                                            '</div>' +
                                                                            '<div class="row" data-excol-name="quantity">' +
                                                                                '<label>Quantity: </label>' +
                                                                                '<span><input type="number" step="1" min="1" class="input-field-1"  value="' + quantity + '" data-row-id="' + ID + '" data-unitprice="' + price + '"/></span>' +
                                                                            '</div>' +
                                                                            '<div class="row" data-excol-name="total-price">' +
                                                                                '<label>Total: </label>' +
                                                                                '<span>' + (quantity * price).toFixed(2) + '</span>' +
                                                                            '</div>' +
                                                                        '</div>' +
                                                                    '</div>' +
                                                                '</section>';

            $listProductCartTableContent.append($itemProductCartRow);
        }
    } else {
        $itemProductCartRow = '<div class="row"><span>There are no product in Cart</span></div>';
        $listProductCartTableContent.append($itemProductCartRow);
    }
}



function addCart(id, quantity, productsData) {
    var products = productsData.product;
    if (products.length != 0) {
        var existed = false;
        for (var i = 0; i < products.length; i++) {
            var product = products[i];
            var ID = product['ID'];
            if ((id.toLowerCase() === ID.toLowerCase())) {
                product['Quantity']++;
                existed = true;
                break;
            }
        }
        !existed ? products.push({ "ID": id, "Quantity": quantity }) : '';
    } else {
        products.push({ "ID": id, "Quantity": quantity });
    }
}
function removeCart(id, productsData) {
    var products = productsData.product;
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var ID = product['ID'];
        if ((id.toLowerCase() === ID.toLowerCase())) {
            products.splice(i, 1);
            break;
        }
    }
}
function updateCart(id, productsData, key, value) {
    var products = productsData.product;
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var ID = product['ID'];
        if ((id.toLowerCase() === ID.toLowerCase())) {
            product[key] = value;
            break;
        }
    }
}



function displayCartInfo() {
    var productCart = getStorage(productsCartStorage);
    var products = getStorage(productsStorage);
    var cartInfo = sumCart(productCart, products);
    var cartItem = cartInfo.count;
    var totalPrice = cartInfo.totalPrice;
    $('#cartInfo').find('>span').text(cartItem);
    $('#cartTotalPrice').text('$' + totalPrice.toFixed(2));
}
function sumCart(productCart, products) {
    var prdsCart = productCart.product;
    var prds = products.product;

    totalPrice = 0;
    if (prdsCart.length != 0) {
        for (var i = 0; i < prdsCart.length; i++) {
            var prdCart = prdsCart[i];
            var IDCart = prdCart['ID'];
            for (var j = 0; j < prds.length; j++) {
                var prd = prds[j];
                var IDprd = prd['ID'];
                if ((IDCart.toLowerCase() === IDprd.toLowerCase())) {
                    totalPrice += (parseFloat(prdCart['Quantity']) * parseFloat(prd["price"]));
                }
            }
        }
    }
    return {
        count: prdsCart.length,
        totalPrice: totalPrice
    }
}




// Localstorage ==========================================================================================

function isExistStorage(key) {
    return (localStorage.getItem(key, productsStorage) == null) ? false : true;
}

function setStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getStorage(key) {
    var result = localStorage.getItem(key);
    return JSON.parse(result);
}

function removeStorage(key) {
    localStorage.removeItem(key);
}


// Get param URL ==========================================================================================
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}