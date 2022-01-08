/*Calcular la media de productos vendidos por Pizza Delivery y su precio medio de venta de cliente*/
    db.contabilidadpizza.aggregate([
    
    {$match: {cliente: "Pizza Delivery"}},
    { $group: {
             _id: "$cliente",
             mediacantidad: {$avg:"$cantidad"},
             mediaprecio: {$avg: "$precio_venta_cliente"},
             numeroGrupo:{$sum:1}}}
    ])

 /*Mostrar el producto con máximo precio de venta*/

    db.contabilidadpizza.aggregate( [
        { $group: { _id: "$producto", 
                    venta_producto: {$multiply: ["precio_venta_cliente", "cantidad"]}}},
        {$project: {Producto: "_id",
                    Maxprecio: {$Max: "$venta_producto"}

/*Cuantos helados podemos comprar con un presupuesto de 3000 euros a precio proveedor*/

    db.contabilidadpizza.aggregate([
    {$match: {producto: "Helados"}},
    {$group: {_id: 3,
                venta_producto: {$multiply: ["precio_venta_proveedor", "cantidad"]}},
    {$project: {precio_helados_proveedor: "$venta_producto",
                IVA: {$multiply: ["$venta_producto", "$iva"]},
                Precio_IVA_proveedor: {$Sum: ["$venta_producto", "$IVA"]},
                Presupuesto: { $divide: [ 3000, "$precio_IVA_proveedor"]}}
                        ])

/*Calcular las ventas totales particulares y su total de ventas*/

    db.contabilidadpizza.aggregate([
    { $match: { mayorista: "false" } },
    { $group: { _id: "$producto", 
                sumQuantity: { $sum: "$cantidad" },
                venta_producto: {$multiply: ["precio_venta_cliente", "cantidad"]}}},
    { $group: {_id: null,  total: {$sum: "$sumQuantity"}}},
    {$project: {Producto: "_id",
                totalvProducto_No_Mayorista: $venta_producto}}
    ])

/*Calcular el precio total de cada producto a precio de proveedor con IVA y Dto de Mayorista*/

    db.contabilidadpizza.aggregate (
    [ {$group: {_id: "$producto",
                venta_producto: {$multiply: ["precio_venta_proveedor", "cantidad"]}}},
      {$project:{
        Producto: "_id",
        totalvProducto_proveedor: "$venta_producto",
        IVA: {$multiply: ["$venta_producto", "$iva"]},
        totalvIVA_proveedor: {$Sum: ["$venta_producto", "$IVA"]},
        Dto_mayorista: {$Sustract: ["$totalvIVA_proveedor", {$multiply: ["$venta_producto", 0.05]}]

      }}}
    ]
    )

/*Obtener el precio de venta total, el iva y el precio total con iva en el año 2021*/

    db.contabilidadpizza.aggregate (
    [
        {$match: {$expr: {$lt: [{$year: "fecha_venta"}, 2022] }}},
    {$group: 
        { 
         _id: {$year: "$precio_venta"},
         venta_total: {$sum: {$multiply: ["precio_venta_cliente", "cantidad"]}}
        }
    },
    {$project: {
        año: "_id",
        _id: 0,
        totalventa: "$venta_total",
        IVA: {$multiply: ["$venta_total", 0.10]},
        TotalvIVA: {$sum: ["$venta_total", {$multiply: ["$venta_total", 0.10]}]},
        totalRedondeado: {$round: [{$sum: ["$venta_total", {$multiply: ["$venta_total", 0.10]}]}, 0]}
    }}
    ])