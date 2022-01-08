db.contabilidadpizza.drop()
db.contabilidadpizza.insertOne(

    { "_id" : 1,
      "producto": "pizza",
      "precio_coste": 1.50,
      "precio_venta_cliente": 6.9,
      "precio_venta_proveedor": 3.0,
      "fecha_venta": new Date("2021-12-19"),
      "cantidad": 600,
      "cliente": "Pizzería Deliciosa",
      "empleado_vendedor": "Luis Santos",
      "beneficios_rate": 460,
      "rentabilidad_rate": 56.5,
      "IVA": 10,
      "Mayorista": true,
      "Dto. Mayorista": 5
    }
)

db.contabilidadpizza.drop()
db.contabilidadpizza.insertMany([

    {"_id":1, "producto": "pizza", "precio_coste": 1.50, "precio_venta_cliente": 6.9, "precio_venta_proveedor": 3.0, "fecha_venta": new Date("2021-12-19"), "cantidad": 600, "cliente": "Pizzería Deliciosa", "empleado_vendedor": "Luis Santos", "beneficios_rate": 460, "rentabilidad_rate": 56.5, "IVA": 10, "Mayorista": true, "Dto. Mayorista": 5},
    {"_id":2, "producto": "Caja_pizza", "precio_coste": 0.30, "precio_venta_cliente": 1.20, "precio_venta_proveedor": 0.80, "fecha_venta": new Date("2021-12-05"), "cantidad": 1300, "cliente": "Pizza Delivery", "empleado_vendedor": "Estrella", "beneficios_rate": 400, "rentabilidad_rate": 66.6, "IVA": 21, "Mayorista": true, "Dto. Mayorista": 10},
    {"_id":3, "producto": "helados", "precio_coste": 1.00, "precio_venta_cliente": 3.5, "precio_venta_proveedor": 2.00, "fecha_venta": new Date("2021-12-31"), "cantidad": 400, "cliente": "Pizzería Americana", "empleado_vendedor": "Steven", "beneficios_rate": 350, "rentabilidad_rate": 57.15, "IVA": 10, "Mayorista": false, "Dto. Mayorista": 0},
    {"_id":4, "producto": "refrescos_33cl", "precio_coste": 0.60, "precio_venta_cliente": 2.00, "precio_venta_proveedor": 1.20, "fecha_venta": new Date("2021-12-23"), "cantidad": 800, "cliente": "Pizza Planet", "empleado_vendedor": "Fernando Huerta", "beneficios_rate": 333.3, "rentabilidad_rate": 60, "IVA": 21, "Mayorista": true, "Dto. Mayorista": 5},
    {"_id":5, "producto": "patatas", "precio_coste": 1.40, "precio_venta_cliente": 2.5, "precio_venta_proveedor": 1.9, "fecha_venta": new Date("2021-12-25"), "cantidad": 1500, "cliente": "Pizzoleta", "empleado_vendedor": "Jose Antonio Fuentes", "beneficios_rate": 178.57, "rentabilidad_rate": 76, "IVA": 10, "Mayorista": true, "Dto. Mayorista": 10},
    {"_id":6, "producto": "alitas", "precio_coste": 1.60, "precio_venta_cliente": 3.5, "precio_venta_proveedor": 2.1, "fecha_venta": new Date("2021-12-27"), "cantidad": 340, "cliente": "Pizza Boston", "empleado_vendedor":"Carmina Suárez", "beneficios_rate": 218.75, "rentabilidad_rate": 60, "IVA": 10, "Mayorista": false, "Dto. Mayorista": 0},
    {"_id":7, "producto": "aros de cebolla", "precio_coste": 0.65, "precio_venta_cliente": 2.5, "precio_venta_proveedor": 1.5, "fecha_venta": new Date("2022-01-04"), "cantidad": 600, "cliente": "Malaga Pizza", "empleado_vendedor":"Tomás Redondo", "beneficios_rate": 384.62, "rentabilidad_rate": 60, "IVA": 10, "Mayorista": true, "Dto. Mayorista": 5},
    {"_id":8, "producto": "ensalada", "precio_coste": 1.30, "precio_venta_cliente": 4.00, "precio_venta_proveedor": 2.5, "fecha_venta": new Date("2021-12-13"), "cantidad": 200, "cliente": "Pizzoleta", "empleado_vendedor":"Jose Antonio Fuentes", "beneficios_rate": 307.7, "rentabilidad_rate": 62.5, "IVA": 10, "Mayorista": false, "Dto. Mayorista": 0},
    {"_id":9, "producto": "vasos", "precio_coste": 0.30, "precio_venta_cliente": 1.00, "precio_venta_proveedor": 0.6, "fecha_venta": new Date("2021-12-31"), "cantidad": 2000, "cliente": "Pizzería Americana", "empleado_vendedor":"Steven", "beneficios_rate": 333.33, "rentabilidad_rate": 60, "IVA": 21, "Mayorista": true, "Dto. Mayorista": 10},
    {"_id":10, "producto": "Fingers de queso", "precio_coste": 1.80, "precio_venta_cliente": 3.5, "precio_venta_proveedor": 2.1, "fecha_venta": new Date("2021-12-28"), "cantidad": 900, "cliente": "Pizza Delivery", "empleado_vendedor":"Estrella", "beneficios_rate": 194.44, "rentabilidad_rate": 60, "IVA": 10, "Mayorista": true, "Dto. Mayorista": 5},
    {"_id":11, "producto": "Cerveza", "precio_coste": 0.50, "precio_venta_cliente": 2.00, "precio_venta_proveedor": 1.00, "fecha_venta": new Date("2021-12-31"), "cantidad": 2000, "cliente": "Pizza Planet", "empleado_vendedor": "Fernando Huerta", "beneficios_rate": 400, "rentabilidad_rate": 50, "IVA": 21, "Mayorista": true, "Dto. Mayorista": 10},
])
    