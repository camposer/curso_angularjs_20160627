# Cómo configurar un proyecto con Angular Seed

1.- Descargar e instalar la última versión estable de NodeJS
- Buscar instalador (MSI)
- Probar que funciona correctamente:

```
> npm --version
```

- Actualizar node

```
> npm install -g npm
```

2.- Descargar e instalar la última versión de Git
- Buscar instalador (MSI)
- Seleccionar opción para poder utilizar Git desde la consola de Windows (2da opción: Use windows command console)

```
> git --version
```

NOTA: Para que estos paquetes funcionen detrás de un proxy:

```
http_proxy=usuario:clave@proxy.company.com:puerto
https_proxy=usuario:clave@proxy.company.com:puerto
```

3.- Instalar dependencias para entorno de programación:

```
> npm install -g bower
```

- Grunt: Soporte la construcción del proyecto 
- Bower: Gestión de dependencias

4.- Descargar y configurar Angular Seed

- Buscar Angular Seed en Github (utilizando Google) y descargar 
- Entrar a la raíz del proyecto y ejecutar:

```
> npm install
> npm start
```

Abrir navegador: http://localhost:8000









