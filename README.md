# Eagle-Tech Seguros ----> Probar [Aquí](https://eagle-tech.netlify.app/)
# Estructura general:

El conjunto de páginas que conforman Eagle-Tech consisten en 5 páginas distintas navegables y diferenciadas una de otro, estas secciones son: página principal (Eagle-Tech), Quienes Somos, Nuestros Planes, Donde Estamos y Contáctanos( Formulario). La navegación puede realizarse verticalmente para ver información sobre cada sección, y a través de clics se cambia de una sección a otra con la barra superior de la página.

# Eagle-Tech:

La página principal consiste en una breve presentación de la empresa, los objetivos y valores, seguido de un carrusel de imágenes con distintas promociones y ofertas. Debajo se encuentran testimonios de personas que han contratado previamente el servicio y por último se ubica el footer con información, redes sociales, etc.

# Quienes Somos:

Esta sección incluye varias imágenes y una información más detallada sobre la empresa, su filosofía y compromiso.

# Nuestros Planes:

Aquí se encuentra la sección en la que se presentan las distintas coberturas que brinda la empresa. Cuenta con bloques de los distintos planes que ofrecemos, con una breve descripción de cada uno. 

# Donde Estamos:

Esta página está caracterizada por incluir un iframe para la disposición en la que se ve los datos de contacto, horario, ubicación de la empresa con mapa interactivo. En este último se utilizó un src para la misma.

# Contáctanos:

Por último, aquí se encuentra el formulario de contacto que tiene la empresa, este cuenta con 4 campos obligatorios para su envío, estos son: Nombre, un teléfono válido, un correo válido y un mensaje con la descripción de la consulta. Todos los campos están validados, por lo que se deben completar con ciertos parámetros en cada casilla, la validación se realizó utilizando JS. Para el envío del formulario se utilizó una API externa https://formspree.io que envía todas las consultas al correo de la empresa (eagletechcac@gmail.com) y luego de completa el formulario y enviarlo muestra una página de agradecimiento de formspree con un botón para volver a la sección de Contáctanos de Eagle-Tech.

# Funciones principales:

Esta página esta diseñada para invitar al público en general a contratar los servicios de Eagle-Tech a través de su diseño colorido y vivo junto con la información de una empresa comprometida con su trabajo.

En la parte superior se puede apreciar una sección con el logo y las distintas páginas de la empresa, que al contar con una pantalla de menos de 991px se convierte en un menú en forma de hamburguesa que se despliega con los títulos hacia abajo para poder seleccionarlos.

# Información importante:

•	Hay efectos de movimiento en la página en algunos subtítulos y elementos que se encuentra en ella.
•	Tanto el logo de la página como el título de las distintas páginas cuentan con una animación de zoom-in al pasar por encima de ellos.
•	En distintas secciones de las páginas se utilizó @media para distintos tamaños de ancho de la pantalla que modifican la estructura del contenido.
Se utilizaron apis de:
•	https://formspree.io Para el envío del formulario de contacto.
•	https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css y https://kit.fontawesome.com/7459002549.js Para iconos que se utilizan en las páginas de Eagle-Tech

