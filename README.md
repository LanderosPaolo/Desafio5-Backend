# Joyas App -Desafio 5

 Esta es una aplicación para gestionar el inventario de joyas. Proporciona funciones para obtener joyas de la base de datos, filtrarlas y generar informes.

## Configuración de la base de datos

   Antes de utilizar la aplicación, asegúrate de configurar correctamente la conexión a la base de datos PostgreSQL. Puedes modificar los parámetros de conexión en el        archivo 'consultas.js'.

    const pool = new Pool({
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'joyas',
      allowExitOnIdle: true
    });

*Asegúrate de que los valores de host, user, password y database sean los correctos para tu entorno de desarrollo.*

## Uso

  La aplicación expone los siguientes endpoints:

**-Obtener joyas**

*GET /joyas*

Este endpoint devuelve una lista de joyas. Puedes usar los siguientes parámetros de consulta para personalizar la respuesta:

    limits: Número máximo de joyas a devolver (por defecto: 3).
    order_by: Ordenar las joyas por un campo específico, seguido de _ASC o _DESC para especificar la dirección de ordenación (por defecto: id_ASC).
    page: Número de página para paginar los resultados (por defecto: 1).

Ejemplo de solicitud:

*GET /joyas?limits=10&order_by=nombre_ASC&page=2*

**-Filtrar joyas**

*GET /joyas/filtros*

Este endpoint permite filtrar las joyas en función de diferentes criterios. Puedes utilizar los siguientes parámetros de consulta para aplicar los filtros:

    precio_max: Precio máximo de las joyas.
    precio_min: Precio mínimo de las joyas.
    categoria: Categoría de las joyas.
    metal: Tipo de metal de las joyas.
    stock: Cantidad máxima de stock disponible.

Ejemplo de solicitud:

*GET /joyas/filtros?precio_max=1000&categoria=anillos&stock=10*

## Middlewares

La aplicación utiliza un middleware de informes para registrar información sobre las solicitudes recibidas. Esto es útil para realizar un seguimiento de las operaciones y depurar problemas.

El middleware se encuentra en el archivo consultas.js y se utiliza en el endpoint /joyas.
