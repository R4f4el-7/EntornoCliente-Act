export default function VariasCajas() {
    const cajas = [1, 2, 3];

    return React.createElement(
        'div',
        { style: { display: 'flex' } },
        cajas.map(n =>
            React.createElement(
                'div',
                {
                    key: n,
                    style: {
                        width: 50,
                        height: 50,
                        backgroundColor: 'blue',
                        marginRight: 5
                    }
                }
            )
        )
    );
}