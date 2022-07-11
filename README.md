# Protocolo HTTP

- Protocolo de transferencia de hipertexto.
- Comunicacion entre un servidor web y un cliente.
- HTTP no tiene estado (stateless), por lo cual no almacenan los mensajes de comunicacion de peticiones anteriores.

## HTTPS

- Protocolo de transferencia de hipertexto seguro.
- Transferencia de datos encriptados.

## Metodos HTTP

- GET :: Datos recibidos desde el servidor.
- POST :: Datos enviados al servidor.
- PUT :: Actualizacion de datos que ya se encuentran en el servidor.
- DELETE :: Eliminar datos alojados en el servidor.

## Codigos de estado HTTP

- 1xx :: Peticion recibida o procesando.
- 2xx :: Peticion recibida, entendida y aceptada.

    - 200 :: OK
    - 201 :: OK created

- 4xx :: Error del cliente

    - 400 :: Bad request
    - 401 :: Unathourized
    - 404 :: Not found

- 5xx :: Error del servidor

    - 500 :: Internal server error