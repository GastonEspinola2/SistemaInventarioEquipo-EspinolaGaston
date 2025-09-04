class InventarioViejo {
    private items: { itemName: string; category: string; status: string }[] = [];

    public agregarItem(itemName: string, category: string, status: string): void {
    this.items.push({ itemName, category, status });
    }

    public obtenerItems(): { itemName: string; category: string; status: string }[] {
    return this.items;
    }
}

class InventarioNuevo {
    public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    throw new Error("No implementado en este ejemplo"); 
    }
}

class AdaptadorInventario {
    private inventarioViejo: InventarioViejo;

    constructor(inventarioViejo: InventarioViejo) {
    this.inventarioViejo = inventarioViejo;
    }

    public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    this.inventarioViejo.agregarItem(nombre, tipo, estado);
    }

    public listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
    return this.inventarioViejo.obtenerItems().map(item => ({
        nombre: item.itemName,
        tipo: item.category,
        estado: item.status,
    }));
    }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);

adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");

console.log(adaptador.listarEquipos());
