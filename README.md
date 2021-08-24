FAKEFANTHELABEL 
e-commerce.

Este sitio echo por react por ahora cuenta con:

Un navBar el cual te redirige al catalogo llamado por el componente ItemListContainer.
Dentro del mismo llamamos a los items ,guardados en un array de objetos, mediante una promise con un setTimeOut de 2 segundos el cual mientras muestra un gif de carga.
Estos son mostrados en el componente ItemList mediante un map.
Al elegir un item nos redirige a la ruta /newdrops/:id el cual nos muetra en el componente itemDetailContainer, el cual tambien llama a los items mediante una promise, los dettales de nuestro item, pasandolos como propiedades hacia itemList.

Por otro lado dentro del navBar tenes el carrito de compra mediante un cartWidget y dentro de itemDetails el componente ItemCount el cual deja agregar o restar productos dependiendo de si hay stock o no, en el caso de que no haya salta una alerta por 3 segundos.
