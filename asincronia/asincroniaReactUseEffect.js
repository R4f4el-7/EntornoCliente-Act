/*Crea un ejemplo completo en React sin JSX que use useState y
 useEffect para hacer una petición fetch a una API y
 mostrar "Cargando..." mientras llegan los datos. Devuelve solo el archivo JS.*/
const { useState, useEffect } = React;

function App() {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setUsuarios(data);
                setCargando(false);
            });
    }, []);

    if (cargando) {
        return React.createElement("p", null, "Cargando...");
    }

    return React.createElement(
        "div",
        null,
        React.createElement("h1", null, "Usuarios"),
        usuarios.map(user =>
            React.createElement("p", { key: user.id }, user.name)
        )
    );
}

ReactDOM.createRoot(document.getElementById("root"))
    .render(React.createElement(App));
