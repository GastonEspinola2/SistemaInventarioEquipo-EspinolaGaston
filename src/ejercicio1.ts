type EstadoEquipo = "disponible" | "en reparación" | "asignado" | "baja";

class Inventario {
    private static instancia: Inventario;
    private equipos: { [nombre: string]: { tipo: string; estado: EstadoEquipo } } = {};

    private constructor() {}

    public static obtenerInstancia(): Inventario {
    if (!Inventario.instancia) {
        Inventario.instancia = new Inventario();
    }
    return Inventario.instancia;
    }

    public agregarEquipo(nombre: string, tipo: string, estado: EstadoEquipo): void {
    this.equipos[nombre] = { tipo, estado };
    }

    public listarEquipos(nombre: string): { tipo: string; estado: EstadoEquipo } | undefined {
    return this.equipos[nombre];
    }
}

const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
inventario.agregarEquipo("Servidor Dell", "Servidor", "en reparación");

console.log(inventario.listarEquipos("Notebook HP"));
console.log(inventario.listarEquipos("Servidor Dell"));