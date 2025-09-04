interface Equipo {
  detalles(): string;
}

class EquipoNotebook implements Equipo {
  private nombre: string;
  private ram: string;
  private procesador: string;

  constructor(nombre: string, ram: string, procesador: string) {
    this.nombre = nombre;
    this.ram = ram;
    this.procesador = procesador;
  }

  detalles(): string {
    return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class EquipoDesktop implements Equipo {
  private nombre: string;
  private ram: string;
  private procesador: string;

  constructor(nombre: string, ram: string, procesador: string) {
    this.nombre = nombre;
    this.ram = ram;
    this.procesador = procesador;
  }

  detalles(): string {
    return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class EquipoServidor implements Equipo {
  private nombre: string;
  private ram: string;
  private procesador: string;

  constructor(nombre: string, ram: string, procesador: string) {
    this.nombre = nombre;
    this.ram = ram;
    this.procesador = procesador;
  }

  detalles(): string {
    return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class EquipoFactory {
  public crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Equipo {
    if (tipo === "Notebook") {
      return new EquipoNotebook(nombre, ram, procesador);
    } else if (tipo === "Desktop") {
      return new EquipoDesktop(nombre, ram, procesador);
    } else if (tipo === "Servidor") {
      return new EquipoServidor(nombre, ram, procesador);
    }
    throw new Error("Tipo de equipo no reconocido");
  }
}

const factory = new EquipoFactory();
const Notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(Notebook.detalles());