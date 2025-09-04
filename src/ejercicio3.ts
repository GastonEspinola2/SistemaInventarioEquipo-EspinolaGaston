type EstadoEquipo = "disponible" | "en reparación" | "asignado" | "baja";

interface Observador {
    actualizar(estado: EstadoEquipo): void;
}

class Soporte implements Observador {
    constructor(private nombre: string) {}

    actualizar(estado: EstadoEquipo): void {
    console.log(`${this.nombre} ha sido notificado. Nuevo estado del equipo: ${estado}`);
    }
}

class Equipo {
    private observadores: Observador[] = [];
    private estado: EstadoEquipo;

    constructor(private nombre: string, estadoInicial: EstadoEquipo) {
    this.estado = estadoInicial;
    }

    public agregarObservador(observador: Observador): void {
    this.observadores.push(observador);
    }

    public eliminarObservador(observador: Observador): void {
    this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    public cambiarEstado(nuevoEstado: EstadoEquipo): void {
    this.estado = nuevoEstado;
    this.notificarObservadores();
    }

    private notificarObservadores(): void {
    this.observadores.forEach(obs => obs.actualizar(this.estado));
    }
}

const equipo = new Equipo("Notebook HP", "disponible");

const soporte1 = new Soporte("Soporte Técnico 1");
const soporte2 = new Soporte("Soporte Técnico 2");

equipo.agregarObservador(soporte1);
equipo.agregarObservador(soporte2);

equipo.cambiarEstado("en reparación");
