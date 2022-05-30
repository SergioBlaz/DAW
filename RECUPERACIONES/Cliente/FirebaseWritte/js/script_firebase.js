"use strict";
import * as plantillas from "./plantillasFirebase.js";
import { app } from "./datosFirebase.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  onSnapshot,
  doc,
  query,
  where,
  orderBy,
  limit,
  addDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
  deleteField,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

//*** Enlace a las bibliotecas Firebase -> https://firebase.google.com/docs/web/learn-more?authuser=0#libraries-cdn

window.onload = () => {
  // ****** Firebase ************************************/
  const d = document; // Acceso fácil.
  let datos = document.getElementById("datos"); // Contenedor de datos.

  /*** Conexión con la base de datos.
   * getFirestone   -> Conexión al servicio Firestone.
   * collection     -> Enlace a la colección de la base de datos.
   */
  const db = getFirestore(app);
  const feosColeccion = collection(db, "feos");

  /*** Leer datos.
   *  doc         -> Obtiene la referencia a un documento. Parámetros -> referencia a una colección y un id.
   *  getDoc      -> Obtiene los datos de un documento. Parámetro -> referencia a un documento.
   *  getDocs     -> Obtiene todos los documentos de una colección. Parámetro -> referencia a una colección.
   *  onSnapShot  -> Obtiene enlace en tiempo real a la base de datos.
   *  data()      -> Método para acceder a la información del documento.
   *  id          -> Propiedad identificacdor del documento (está fuera del método data()).
   *  exists()    -> Método que comprueba si el documento existe (boleano).
   */

  //*** Uso del doc *****************/
  const pruebaDoc = async (id) => {
    // Referencia al documento (sólo el id).
    const pruebaRef = await doc(feosColeccion, id);
    // Se obtiene el documento de la colección.
    const pruebaDoc = await getDoc(pruebaRef);
    //Compruebo si el documento existe.
    console.log(`El documento existe: ${pruebaDoc.exists()}`);
    console.log(
      `Impreso desde pruebaDoc: ${pruebaDoc.id} ${pruebaDoc.data().nombre}`
    );
  };

  pruebaDoc("LCy8664CnKt93gzwQfkr");

  const obtenerFeos = async () => {
    const feosDocumentos = await getDocs(feosColeccion);
    feosDocumentos.docs.map((documento) => {
      datos.innerHTML += plantillas.pintarFeo(documento);
      console.log(
        `${documento.data().nombre} ${
          documento.data().apellidos
        } tiene como aficiones ${documento.data().aficiones}`
      );
    });
  };

  const obtenerFeosSnap = async () => {
    const feosDocumentos = await onSnapshot(feosColeccion, (col) => {
      datos.innerHTML = "";
      col.docs.map((documento) => {
        datos.innerHTML += plantillas.pintarFeo(documento);
        console.log(
          `${documento.data().nombre} ${
            documento.data().apellidos
          } tiene como aficiones ${documento.data().aficiones}`
        );
      });
    });
  };

  //obtenerFeos();
  //obtenerFeosSnap();

  /* Filtrar datos
   *   query   -> Filtrar los resultados de la consulta. Parámetros -> colección y sentencia where.
   *   where   -> Especifica las condiciones que los documentos deben cumplir.
   *     (<, <=, ==, >, >=, !=, array-contains, array-contains-any, in y not-in)
   *   orderBy -> Ordenar los documentos de una colección. Parámetros -> clave y tipo de ordenación.
   *   limit   -> Limita la cantidad de documentos consultados. Parámetros -> número de documentos.
   */

  const filtrarFeos = async (campo, valor) => {
    const consulta = query(
      feosColeccion,
      where(campo, "array-contains", valor)
    );

    /*  const consulta = query(
     feosColeccion,
     where(campo, "!=", valor),
     orderBy(campo, "desc"),
     limit(5)
   ); */
    /* const consulta = query(
     feosColeccion,
     where("nombre", "==", "Pedro"),
     where("aficiones", "array-contains", "carreras")
   ); */
    const feosFiltrados = await getDocs(consulta);
    // Compruebo la longitud de la consulta.
    console.log(`Número de elementos filtrados : ${feosFiltrados.docs.length}`);
    feosFiltrados.docs.map((documento) => {
      datos.innerHTML += plantillas.pintarFeo(documento);
      console.log(
        `${documento.data().nombre} ${
          documento.data().apellidos
        } tiene como aficiones ${documento.data().aficiones}`
      );
    });
  };

  //filtrarFeos("aficiones", "carreras");

  /* Guardar datos en Firebase.
   *   doc     -> Crear un enlace a un documento. Parámetros -> referencia a una colección y un id válido.
   *   addDoc  -> Crea el documento en la colección. Parámetros -> referencia a una colección y documento.
   *   setDoc  -> Modifica la estructura y/o datos del documento. Parámetros -> referencia a documento y documento "nuevo".
   */

  // Construir un documento nuevo (JSON).
  const nuevoFeo = {
    nombre: "Albert",
    apellidos: "Einstein",
    aficiones: ["pesca", "relatividad", "peines"],
  };

  // Crear la función asíncrona para guardar el objeto en la base de datos.
  const guardarFeo = async (feo) => {
    const feoGuardado = await addDoc(feosColeccion, feo);
    console.log(`Feo guardado con el id ${feoGuardado.id}`);
  };

  //guardarFeo(nuevoFeo);

  // Uso del setDoc.
  const guardarFeoSet = async (id) => {
    // Se obtiene la referencia del documento.
    const pruebaRef = await doc(feosColeccion, id);
    // Se sobrescriben todos los datos del documento.
    // Las caves no especificadas se eliminan.
    // Las claves nuevas se añaden al documento.
    await setDoc(pruebaRef, {
      nombre: "Juanitarranga",
      apellidos: "López",
      edad: 87,
      aficiones: ["ninguna"],
    });
  };

  //guardarFeoSet("LCy8664CnKt93gzwQfkr");

  /* Actualizar datos en Firestone. 
  *   updateDoc   -> Actualiza las claves de un documento. Parámetros -> referencia a un documento y documento nuevo.
        // Las claves no definidas no se alteran.
        // Las claves nuevas se añaden al documento (como en setDoc).
      arrayUnion  -> Si la clave es un array, añade los valores nuevos (no duplica).
      arrayRemove -> Si la clave es un array, elimina los valores indicados.
  */

  const actualizarFeo = async (id) => {
    const pruebaRef = await doc(feosColeccion, id);
    await updateDoc(pruebaRef, {
      nombre: "Juan",
      aficiones: ["carreras"], // Sobrescribe el array entero.
    });
  };

  const actualizarFeoBien = async (id) => {
    const pruebaRef = await doc(feosColeccion, id);
    await updateDoc(pruebaRef, {
      nombre: "Juanita",
      apellidos: "López",
      claveNueva: "Grande", // Añade esta clave a la estructura del objeto.
      aficiones: arrayUnion("carreras", "coches"),
      // Añade "carreras" y "coches" como elementos del array aficiones.
      // Si ya existen no se duplican.
    });
  };

  //actualizarFeo("LCy8664CnKt93gzwQfkr");

  const eliminarAficion = async (id) => {
    const pruebaRef = await doc(feosColeccion, id);
    await updateDoc(pruebaRef, {
      aficiones: arrayRemove("coches"), // Elimina "coches" del array "aficiones".
    });
  };

  //eliminarAficion("LCy8664CnKt93gzwQfkr");

  /* Eliminar documentos en Firestone.
   *   deleteDoc     -> Elimina el documento de la colección. Parámetros -> referencia del documento.
   *   deleteField   -> Elimina la clave indicada del documento (durante updateDoc).
   */

  const borrarDoc = async (id) => {
    await deleteDoc(doc(feosColeccion, id));
    console.log(`${id} borrado con éxito.`);

    /* deleteDoc(doc(feosColeccion, id))
      .then(() => {
        console.log(`${id} borrado con éxito.`);
      })
      .catch((error) => {
        // Nunca salta el catch ya que la promesa siempre se resuelve.
        console.error(`Error al eliminar: ${error}`);
      }); */
  };

  //borrarDoc("06Rt835UtFM6oXQ2Nb9f");
  //borrarDoc("feo");

  const borrarApellido = async (id) => {
    const pruebaRef = await doc(feosColeccion, id);
    await updateDoc(pruebaRef, {
      apellidos: deleteField(),
    });
    console.log(`Apellido de ${pruebaRef.id} borrado.`);
  };

  //borrarApellido("LCy8664CnKt93gzwQfkr");

  /* Tratamiento de errores
   *   Es posible com try/catch (como en Java).
   *   También con la notación de punto de promesas (.then/.catch).
   */

  const xxx = async () => {
    const documento = await doc(feosColeccion, "LCy8664CnKt93gzwQfkr");
    updateDoc(documento, {
      aficiones: arrayRemove("feos", "guapos"),
    })
      .then(() => {
        console.log("Actualizado correctamente");
      })
      .catch((error) => {
        console.log("Error");
      });
  };

  //xxx();
}; // Fin window.load.
