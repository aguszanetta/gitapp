# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2021-06-12

##Added

- Agrega alerta de creacion de movimiento exitoso
- Agrega campo descripcion al modelo
- Agrega validacion HTML5 en el form de crear movimiento
- Agrega endpoitn en la API para permitir borrar un movimiento
- Agrega test de aparicion de alerta que indique que un movimiento se guardo con exito
- Agrega test para comprobar el correcto funcionamiento del endpoint de borrar movimiento
- Agrega test de aparicion de campo descripcion
- Agrega test para comprobar que se tome la fecha enviada al crear movimiento

##Fixed

- Arregla bug de headers en home
- Arregla el problema que todos los movimientos se creen con la fecha de hoy
- Arregla espacios y tabulaciones en el archivo client/js/movement-service.js
- Arregla el archivo client/js/income.js que no pasaba test run lint
- Arregla test de aparicion de alerta
- Arregla test de aparicion de campo descripcion

## [1.0.1] - 2021-05-03

### Added

-   Cypress detection for running tests on memory
-   Cypress seed before each cypress test

### Changed

-   Creates tables on server init and avoids erase on shutdown

### Removed

-   Cypress experimental configuration

## [1.0.0] - 2021-04-26

### Added

-   Movements API
-   Home UI with charts and last movements
-   Incomes UI with last incomes

[unreleased]: https://github.com/aguszanetta/gitapp/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/aguszanetta/gitapp/releases/tag/v1.1.0
[1.0.1]: https://github.com/aguszanetta/gitapp/releases/tag/v1.0.1
[1.0.0]: https://github.com/aguszanetta/gitapp/releases/tag/v1.0.0
