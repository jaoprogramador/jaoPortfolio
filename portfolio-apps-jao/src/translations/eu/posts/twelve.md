---
date: "2025-04-09T17:00:00.000Z"
title: PL/SQL
tagline: PL/SQL-ra Sarrera Oracle aplikazioak indartzen
preview: >-
    
    PL/SQL, acrónimo de Procedural Language/Structured Query Language, es el lenguaje de programación procedural desarrollado por Oracle. Permite extender las capacidades del SQL tradicional integrando lógica procedural directamente en la base de datos, lo que facilita la creación de programas complejos, procedimientos almacenados, funciones y triggers.


image: >-
    /images/blogs/steve-johnson-wzdG7vJh1gw-unsplash.jpg
---
# PL/SQL-ren Oinarriak
## PL/SQL bloke egituratuetan antolatzen da, eta hiru atal nagusi ditu:

**Deklarazioa:** Bertan aldagaiak, konstanteak eta datu-motak definitzen dira.
**Exekuzioa:** Programaaren logika eta SQL sententziak jartzen diren atal nagusia.
**Salbuesen Kudeaketa:** Erroreak modu kontrolatuan harrapatu eta kudeatzeko aukera ematen du.

Adibidez, hurrengo blokeak langile baten soldata berreskuratzen du eta posible diren erroreak kudeatzen ditu:
```pl
DECLARE
   v_salario NUMBER(8,2);
BEGIN
   SELECT salario INTO v_salario FROM empleados WHERE empleado_id = 101;
   DBMS_OUTPUT.PUT_LINE('El salario es: ' || v_salario);
EXCEPTION
   WHEN NO_DATA_FOUND THEN
      DBMS_OUTPUT.PUT_LINE('No se encontró el empleado');
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
```
## Prozedurak eta Funtzioak
PL/SQL-ren abantaila bat modulu berrerabilgarriak sortzeko gaitasuna da:

## Prozedura
Hurrengo prozedurak langile baten soldata eguneratzen du:

```pl
CREATE OR REPLACE PROCEDURE actualizar_salario(
   p_empleado_id IN NUMBER,
   p_nuevo_salario IN NUMBER
) AS
BEGIN
   UPDATE empleados
   SET salario = p_nuevo_salario
   WHERE empleado_id = p_empleado_id;
   COMMIT;
EXCEPTION
   WHEN OTHERS THEN
      ROLLBACK;
      RAISE;
END;
```
## Funtzioa
Eta hemen langile baten izena lortzen duen funtzio bat:

```pl
CREATE OR REPLACE FUNCTION obtener_nombre(
   p_empleado_id IN NUMBER
) RETURN VARCHAR2 AS
   v_nombre VARCHAR2(100);
BEGIN
   SELECT nombre INTO v_nombre FROM empleados WHERE empleado_id = p_empleado_id;
   RETURN v_nombre;
EXCEPTION
   WHEN NO_DATA_FOUND THEN
      RETURN 'Empleado no encontrado';
END;
```
## Adibide hauek erakusten dute nola kapsulatu negozio-logika moduluetan, kodea mantentzea eta berrerabiltzea erraztuz.

## Trigger-ak PL/SQL-en
Trigger-ak kodea blokeak dira, eta datu-basean gertaera jakin batzuk gertatzean automatikoki exekutatzen dira, hala nola txertaketak, eguneraketak edo ezabaketak. Adibidez, langileen taulan aldaketak erregistratzen dituen trigger bat honakoa izan liteke:

```pl
CREATE OR REPLACE TRIGGER log_cambios_empleados
AFTER UPDATE ON empleados
FOR EACH ROW
BEGIN
   INSERT INTO log_cambios (empleado_id, fecha_cambio, accion)
   VALUES (:OLD.empleado_id, SYSDATE, 'Actualización');
END;
```
Funtzionalitate honek aldaketen kontrola eramatea ahalbidetzen du, aplikazioaren logika nagusia aldatu gabe.

## Abantailak eta Kontsiderazioak
PL/SQL erabiltzearen abantaila nagusien artean daude:

Oracle-ekin integrazio zuzena: Logika konplexua datu-basean zuzenean exekutatzea ahalbidetzen du.

Errendimendua hobetzea: Aplikazioaren eta datu-basearen arteko trafikoa murrizten du.

Kodea berrerabiltzea: Prozedurak, funtzioak eta trigger-ak mantentzea eta eskalagarritasuna errazten dute.

Erroreen kontrola: Salbuesen kudeaketak datuen osotasuna eta segurtasuna bermatzen laguntzen du.

Hala ere, garrantzitsua da transakzioen eta salbuesen kudeaketa onak ezartzea, errendimendu-arazoak saihesteko eta informazioaren koherentzia bermatzeko.


## Ondorioa
PL/SQL tresna ezinbestekoa da Oracle datu-baseekin lan egiten duen edozein garatzailentzat. Logika prozedurala SQL sententziekin konbinatzeko gaitasunak aplikazio sendoagoak eta eraginkorragoak garatzea ahalbidetzen du. PL/SQL menderatzeak ez du bakarrik datu-basearekin integrazioa hobetzen, baita prozesu kritikoen exekuzioa optimizatzen ere, eta hori funtsezkoa da eskaria handia duten inguruneetan.

PL/SQL aztertzeak eta esperimentatzeak aukera zabala eskaintzen du negozio-logika optimizatzeko eta Oracle-ren potentziala proiektuetan gehienez aprobetxatzeko.












