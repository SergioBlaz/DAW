"use strict";
import * as plantillas from "./plantillasFirebase.js";
import { app, autentificacion } from "./datosFirebase.js";
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
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

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

  const nuevoFeo = {
    nombre: "Albert",
    apellidos: "Einstein",
    aficiones: ["pesca", "relatividad", "peines"],
  };

  const guardarFeo = async (feo) => {
    const feoGuardado = await addDoc(feosColeccion, feo);
    console.log(`Feo guardado con el id ${feoGuardado.id}`);
  };

  //guardarFeo(nuevoFeo);
  const guardarFeoSet = async (id) => {
    // Se obtiene la referencia del documento.
    const pruebaRef = await doc(feosColeccion, id);
    // Se sobrescriben todos los datos del documento.
    // Los no especificados se eliminan.
    await setDoc(pruebaRef, {
      nombre: "Juanitarranga",
      apellidos: "López",
      edad: 87,
      aficiones: ["ninguna"],
    });
  };

  //guardarFeoSet("LCy8664CnKt93gzwQfkr");

  const actualizarFeo = async (id) => {
    const pruebaRef = await doc(feosColeccion, id);
    await updateDoc(pruebaRef, {
      nombre: "Juanita",
      //apellidos: "López",
      //edad: 87,
      valor: "Grande",
      aficiones: arrayUnion("feos", "guapos", "medios"),
    });
  };

  //actualizarFeo("LCy8664CnKt93gzwQfkr");

  const eliminarAficion = async (id) => {
    const pruebaRef = await doc(feosColeccion, id);
    await updateDoc(pruebaRef, {
      aficiones: arrayRemove("feos", "guapos"),
    });
  };

  const xxx = async () => {
    const datos = await doc(feosColeccion, "LCy8664CnKt93gzwQfkr");
    updateDoc(datos, {
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
  //eliminarAficion("LCy8664CnKt93gzwQfkr");

  const borrarDoc = async (id) => {
    await deleteDoc(doc(feosColeccion, id));
  };

  //borrarDoc("iwJMNrwqWUPFoUxJ7hQ3");

  const borrarApellido = async (id) => {
    const pruebaRef = await doc(feosColeccion, id);
    await updateDoc(pruebaRef, {
      apellidos: deleteField(),
    });
    console.log(`Apellido de ${pruebaRef.id} borrado.`);
  };

  //borrarApellido("LCy8664CnKt93gzwQfkr");

  /* **** Autentificación de usuarios
   *   createUserWithEmailAndPassword  -> Crea una cuenta de usuario nueva. Parámetros -> auth, usuario y contraseña.
   *   signInWithEmailAndPassword      -> Inicia sesión. -> Parámetros auth, usuario y contraseña (existentes).
   *   signOut                         -> Cierra sesión.
   *   onAuthStateChanged              -> Crea un monitor sobre la sesión. Parámetros -> auth y manejador.
   **/
  let informe = document.getElementById("informe");

  const crearUsuario = (usuario, contra) => {
    createUserWithEmailAndPassword(autentificacion, usuario, contra)
      .then((credenciales) => {
        console.log("Usuario creado");
        console.log(credenciales); // Credenciales del usuario creado.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  d.getElementById("crear").addEventListener(
    "click",
    () => {
      crearUsuario(
        d.getElementById("usuario").value,
        d.getElementById("contra").value
      );
    },
    false
  );

  const iniciarSesion = (usuario, contra) => {
    signInWithEmailAndPassword(autentificacion, usuario, contra)
      .then((credenciales) => {
        console.log("Sesión Iniciada");
        const actual = credenciales.user;
        informe.innerHTML = `Ficha del usuario:<br>
        Correo: ${actual.email}<br>
        Nombre: ${actual.displayName}<br>
        Correo verificado: ${actual.emailVerified}`;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  d.getElementById("iniciar").addEventListener(
    "click",
    () => {
      iniciarSesion(
        d.getElementById("usuario").value,
        d.getElementById("contra").value
      );
    },
    false
  );

  const cerrarSesion = () => {
    autentificacion
      .signOut()
      .then(() => {
        console.log("Salir");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  d.getElementById("cerrar").addEventListener(
    "click",
    () => {
      cerrarSesion();
    },
    false
  );

  onAuthStateChanged(autentificacion, (usuario) => {
    if (usuario) {
      console.log(usuario.uid);
      obtenerFeosSnap();
    } else {
      d.getElementById("datos").innerHTML = "<h3>No se ha iniciado sesión</h3>";
    }
  });
}; // Fin window.load.
